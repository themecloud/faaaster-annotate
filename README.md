# Faaaster Annotations

Système d'annotation visuelle / recueil de feedback pour les sites WordPress
hébergés sur Faaaster (type Atarim) : épingles cliquables n'importe où sur la
page, threads de commentaires, statuts, sidebar de suivi.

## Architecture

- **`faaaster-annotate.php`** — plugin WordPress : gating (cookie
  `trial_bypass`, flag `disabled`, lien de partage `?t=`), enqueue du bundle,
  proxy REST `annotate/v1/{annotations,proxy,users}` vers l'API Faaaster
  (`app.faaaster.io`).
- **`src/`** — application front en Preact, rendue dans un Shadow DOM
  (`#faaaster-annotate-root`) pour une isolation totale du thème.
  - `lib/anchor.js` — ancrage des épingles : sélecteur CSS robuste + offset
    relatif (%) dans l'élément ; ré-ancrage best-effort des annotations v1
    (recogito) via leur `TextQuoteSelector`.
  - `lib/model.js` — modèle W3C Web Annotation conservé de v1 (`body[]` avec
    `purpose: commenting|tagging`) : le dashboard Next continue de fonctionner
    sans modification. Les cibles sont désormais des pins
    (`CssSelector` + `FragmentSelector` percent).
  - `lib/api.js` — client du proxy REST ; clé de page identique à v1
    (path avec `/` → `%%`, fallback sur l'ancien format).
- **`dist/faaaster-annotate.js`** — bundle commité, chargé par le plugin.
  Aucun tooling nécessaire côté site.

## Développement

```bash
npm install
npm run build    # bundle de production → dist/
npm run watch    # rebuild à la volée
```

Page de test sans WordPress (endpoints REST mockés en localStorage) :

```bash
python3 -m http.server 8731
# → http://localhost:8731/test/index.html
```

## Écritures concurrentes

Le widget privilégie des **opérations unitaires par annotation** (plus de
réécriture du tableau complet à chaque modification) :

- `POST /wp-json/annotate/v1/annotation/?url=<clé>` — corps = l'annotation
  (création ou mise à jour), proxifié vers
  `POST {api}/annotate/annotation` avec `{ url, annotation }`.
- `DELETE /wp-json/annotate/v1/annotation/?url=<clé>&id=<id>` — proxifié vers
  `DELETE {api}/annotate/annotation` avec `{ url, id }`.

**Côté Next (à implémenter)** : ces deux routes doivent appliquer la
modification dans une **transaction Firestore** (lire le tableau de la page,
remplacer/insérer/supprimer l'entrée par `id`, réécrire) pour rendre le
read-modify-write atomique. Recalculer les `index` (tri par `body[0].created`)
dans la transaction.

**Fallback transitoire** : tant que l'API upstream répond 404 sur
`/annotation`, le widget bascule automatiquement (et pour la session) sur le
mode v1 — merge avec l'état serveur puis `POST /proxy` du tableau complet.
Le plugin peut donc être déployé avant la mise à jour de l'API.

Un **polling** (15 s par défaut, `appConfig.pollInterval`) fusionne les
annotations des autres utilisateurs en quasi-direct : union des commentaires
par annotation, statut le plus récent, suppressions distantes respectées.

## Fichiers : pièces jointes & captures d'écran

Stockage cible : **GCS via l'API Next**. Le plugin ne stocke rien localement,
il proxifie :

- `POST /wp-json/annotate/v1/upload/?url=<clé>` — multipart (`file`), validé
  côté WP (5 Mo max ; jpeg/png/webp/gif/pdf/zip), puis forwardé en binaire
  brut vers `POST {api}/annotate/upload` avec les en-têtes `Content-Type`,
  `X-File-Name`, `X-Page-Url` et `Authorization: Bearer`.
- **Réponse attendue côté Next** : `{ url, name, type, size }` (l'URL GCS
  publique ou signée). Tant que la route upstream répond 404, le widget
  masque l'UI de pièces jointes et saute les captures — déployable avant le
  backend.

Deux usages côté widget :

- **Pièces jointes** (trombone dans le composer et les réponses) : référencées
  sur le commentaire (`body[i].attachments = [{url, name, type, size}]`,
  champ ignoré par le dashboard actuel).
- **Capture de contexte** : à la création d'une annotation, la zone visible
  est rendue via html-to-image, recadrée au viewport, encodée WebP ~800 px
  (~20-40 Ko, fallback JPEG sur Safari), uploadée en arrière-plan puis patchée
  dans `annotation.meta.screenshot = {url, w, h}` par un upsert unitaire.
  Aucune latence à la création ; échec = simplement pas de capture.

## Deep links

`#fa=<annotationId>` sur n'importe quelle page scrolle jusqu'au pin et ouvre
le thread (bouton « copier le lien » dans chaque thread). Le dashboard peut
générer `…?annotate=true#fa=<id>`. Attention : `?t=` est réservé au dev
password des pages trial, ne pas le réutiliser.

## Vue site entier (préparée)

La sidebar a un switch « Cette page / Tout le site ». Le mode site appelle
`GET /wp-json/annotate/v1/annotations/?scope=site`, proxifié vers
`GET {api}/annotate/all` (**à implémenter côté Next** : renvoyer le tableau
aplati de toutes les pages, chaque annotation portant sa clé dans `url` —
même logique que la route dashboard `/annotations` mais authentifiée par
wpApiKey). Tant que la route répond 404, le switch est masqué.

## Statuts

Vocabulaire stocké inchangé depuis v1 (lu par le dashboard) :
`Nouveau`, `En cours`, `À valider`, `Validé`.
