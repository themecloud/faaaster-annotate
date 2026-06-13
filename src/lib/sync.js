// Concurrent-edit mitigation. The backend stores one array per page
// (last-write-wins), so before every save we re-fetch the server state and
// merge it with local changes: annotations are merged by id, comment bodies
// by union, the status tag by most recent edit. A short GET→POST window
// remains — the real fix is per-annotation endpoints in the Next API.

import { reindex, bodyKey } from "./model.js";

function commentsOf(annotation) {
  return (annotation.body || []).filter((b) => b.purpose === "commenting");
}

function tagOf(annotation) {
  return (annotation.body || []).find((b) => b.purpose === "tagging") || null;
}

// Union by stable identity (creator+created): an edited comment keeps its
// key, so the side with the newer `modified` wins; locally deleted comments
// (this session) don't come back from a stale server read.
function unionComments(annotationId, a, b, deletedBodyKeys) {
  const byKey = new Map();
  for (const body of [...a, ...b]) {
    const key = bodyKey(body);
    if (deletedBodyKeys.has(annotationId + "::" + key)) continue;
    const existing = byKey.get(key);
    if (
      !existing ||
      new Date(body.modified || body.created || 0) >
        new Date(existing.modified || existing.created || 0)
    ) {
      byKey.set(key, body);
    }
  }
  return Array.from(byKey.values()).sort(
    (x, y) => new Date(x.created || 0) - new Date(y.created || 0)
  );
}

function pickTag(serverAnn, localAnn, locallyTouched) {
  const serverTag = tagOf(serverAnn);
  const localTag = tagOf(localAnn);
  if (!serverTag) return localTag;
  if (!localTag) return serverTag;
  if (serverTag.value === localTag.value) return localTag;
  const serverTime = serverTag.modified || serverTag.created;
  const localTime = localTag.modified || localTag.created;
  if (serverTime && localTime) {
    return new Date(serverTime) > new Date(localTime) ? serverTag : localTag;
  }
  // No timestamps to compare (e.g. dashboard edits) — trust the side the
  // user actually touched this session.
  return locallyTouched ? localTag : serverTag;
}

function mergeAnnotation(serverAnn, localAnn, locallyTouched, deletedBodyKeys) {
  const comments = unionComments(
    localAnn.id,
    commentsOf(serverAnn),
    commentsOf(localAnn),
    deletedBodyKeys
  );
  const tag = pickTag(serverAnn, localAnn, locallyTouched);
  // The screenshot is patched in asynchronously after creation — keep it
  // whichever side it arrived on.
  const meta = {
    ...(serverAnn.meta || {}),
    ...(localAnn.meta || {}),
    screenshot:
      (localAnn.meta && localAnn.meta.screenshot) ||
      (serverAnn.meta && serverAnn.meta.screenshot) ||
      undefined,
  };
  if (!meta.screenshot) delete meta.screenshot;
  return { ...localAnn, meta, body: tag ? [...comments, tag] : comments };
}

/**
 * Merge the server list with the local list.
 * - same id on both sides → merged (union of comments, freshest tag)
 * - only on server → someone else created it → keep, unless we deleted it
 * - only local, touched this session → ours, pending save → keep
 * - only local, never touched → deleted remotely → drop
 */
export function mergeLists(server, local, touchedIds, deletedIds, deletedBodyKeys) {
  const noBodies = deletedBodyKeys || new Set();
  const byId = new Map();
  for (const annotation of server) {
    if (!annotation || !annotation.id || deletedIds.has(annotation.id)) continue;
    byId.set(annotation.id, annotation);
  }
  for (const annotation of local) {
    const remote = byId.get(annotation.id);
    if (remote) {
      byId.set(
        annotation.id,
        mergeAnnotation(remote, annotation, touchedIds.has(annotation.id), noBodies)
      );
    } else if (touchedIds.has(annotation.id)) {
      byId.set(annotation.id, annotation);
    }
  }
  return reindex(Array.from(byId.values()));
}
