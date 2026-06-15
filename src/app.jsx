import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import { config } from "./config.js";
import { readState, writeState } from "./lib/cookies.js";
import {
  fetchAnnotations,
  saveAnnotations,
  upsertAnnotation,
  removeAnnotation,
  uploadFile,
  registerUser,
} from "./lib/api.js";
import { mergeLists } from "./lib/sync.js";
import {
  createAnnotation,
  addReply,
  setStatus,
  setScreenshot,
  editComment,
  removeComment,
  reindex,
} from "./lib/model.js";
import { captureViewport } from "./lib/capture.js";
import { resolveAnchor, anchorPoint } from "./lib/anchor.js";
import { t } from "./lib/i18n.js";
import { Toolbar } from "./components/Toolbar.jsx";
import { CaptureOverlay } from "./components/CaptureOverlay.jsx";
import { PinLayer } from "./components/PinLayer.jsx";
import { Thread } from "./components/Thread.jsx";
import { Composer } from "./components/Composer.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { LoginModal } from "./components/LoginModal.jsx";
import { Intro } from "./components/Intro.jsx";
import { OffscreenIndicators } from "./components/OffscreenIndicators.jsx";

function initialState() {
  const cookie = readState();
  const identity =
    config.wpUser && config.wpEmail
      ? { name: config.wpUser, email: config.wpEmail }
      : cookie.username && cookie.email
        ? { name: cookie.username, email: cookie.email }
        : null;
  const mode =
    config.forcedAnnotate === "true"
      ? "comment"
      : config.forcedAnnotate === "false"
        ? "browse"
        : cookie.annotateMode
          ? "comment"
          : "browse";
  return { cookie, identity, mode };
}

// Recompute every pin position (viewport coordinates) on scroll, resize and
// DOM mutations. Pins are rendered position:fixed so this is the single
// source of truth for placement.
function usePositions(annotations, draft) {
  const [positions, setPositions] = useState({});
  const resolvedRef = useRef(new Map());
  const frameRef = useRef(0);

  const compute = useCallback(() => {
    frameRef.current = 0;
    const cache = resolvedRef.current;
    const next = {};
    for (const a of annotations) {
      let resolved = cache.get(a.id);
      if (resolved === undefined || (resolved && !resolved.el.isConnected)) {
        resolved = resolveAnchor(a);
        cache.set(a.id, resolved);
      }
      const point = resolved ? anchorPoint(resolved) : null;
      next[a.id] = point ? { ...point, legacy: resolved.legacy } : null;
    }
    if (draft) {
      const rect = draft.el.isConnected ? draft.el.getBoundingClientRect() : null;
      next.__draft = rect
        ? {
            x: rect.left + rect.width * draft.anchor.relX,
            y: rect.top + rect.height * draft.anchor.relY,
          }
        : null;
    }
    setPositions(next);
  }, [annotations, draft]);

  const schedule = useCallback(() => {
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(compute);
    }
  }, [compute]);

  useEffect(() => {
    resolvedRef.current = new Map();
    compute();
  }, [compute]);

  useEffect(() => {
    window.addEventListener("scroll", schedule, { capture: true, passive: true });
    window.addEventListener("resize", schedule);
    const mutations = new MutationObserver(schedule);
    mutations.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
    });
    const resizer = new ResizeObserver(schedule);
    resizer.observe(document.body);
    return () => {
      window.removeEventListener("scroll", schedule, { capture: true });
      window.removeEventListener("resize", schedule);
      mutations.disconnect();
      resizer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [schedule]);

  return positions;
}

export function App() {
  const init = useMemo(initialState, []);
  const [annotations, setAnnotations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(init.mode);
  const [identity, setIdentity] = useState(init.identity);
  const [pinsVisible, setPinsVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [draft, setDraft] = useState(null); // { el, anchor }
  const [loginOpen, setLoginOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(init.cookie.showIntro);
  // Optimistic until the upstream upload route says 404 (GCS-via-Next
  // not deployed yet) — then the attachments UI hides for the session.
  const [uploadsEnabled, setUploadsEnabled] = useState(true);

  const positions = usePositions(annotations, draft);

  // Keep the cookie in sync — PHP reads it to decide whether to load us.
  useEffect(() => {
    writeState({
      username: identity ? identity.name : false,
      email: identity ? identity.email : false,
      annotateMode: mode === "comment",
      showIntro,
      disabled: false,
    });
  }, [identity, mode, showIntro]);

  useEffect(() => {
    fetchAnnotations()
      .then((data) => setAnnotations(reindex(data)))
      .catch((error) => console.error("[faaaster-annotate] load failed", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      if (draft) setDraft(null);
      else if (openId) setOpenId(null);
      else if (sidebarOpen) setSidebarOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [draft, openId, sidebarOpen]);

  // Local state goes through a ref so two updates in the same render cycle
  // (e.g. reply then status change) can't overwrite each other.
  const annotationsRef = useRef(annotations);
  annotationsRef.current = annotations;
  // Ids created/edited (resp. deleted) this session — drives the merge with
  // concurrent server changes.
  const touchedRef = useRef(new Set());
  const deletedRef = useRef(new Set());
  // Comment bodies deleted this session ("annotationId::bodyKey"), so a poll
  // merge against a stale server read can't resurrect them.
  const deletedBodiesRef = useRef(new Set());
  // All network writes are serialized through this promise chain.
  const queueRef = useRef(Promise.resolve());
  // Optimistic until the upstream API says otherwise (404 on /annotation).
  const unitOpsRef = useRef(true);

  const apply = useCallback((updater) => {
    const next = updater(annotationsRef.current);
    annotationsRef.current = next;
    setAnnotations(next);
  }, []);

  // Pull the server state and fold it into ours (other users' changes).
  const refresh = useCallback(async () => {
    const server = await fetchAnnotations();
    const merged = mergeLists(
      server,
      annotationsRef.current,
      touchedRef.current,
      deletedRef.current,
      deletedBodiesRef.current
    );
    if (JSON.stringify(merged) !== JSON.stringify(annotationsRef.current)) {
      annotationsRef.current = merged;
      setAnnotations(merged);
    }
  }, []);

  // Legacy save path: merge with the server first to shrink the
  // lost-update window, then rewrite the whole page array.
  const mergeSave = useCallback(async () => {
    try {
      await refresh();
    } catch (e) {
      // Server unreachable for the merge read — save local state anyway.
    }
    await saveAnnotations(annotationsRef.current);
  }, [refresh]);

  const runOp = useCallback(
    async (op) => {
      if (unitOpsRef.current) {
        try {
          if (op.type === "delete") {
            await removeAnnotation(op.id);
          } else {
            // Send the freshest local version at execution time.
            const annotation = annotationsRef.current.find((a) => a.id === op.id);
            if (annotation) {
              const result = await upsertAnnotation(annotation);
              // The server assigns the immutable site-wide number on creation;
              // reflect it locally (no re-save).
              if (result && result.number != null) {
                apply((prev) =>
                  prev.map((a) =>
                    a.id === op.id && a.number !== result.number
                      ? { ...a, number: result.number }
                      : a
                  )
                );
              }
            }
          }
          return;
        } catch (error) {
          if (!error.unsupported) throw error;
          unitOpsRef.current = false;
        }
      }
      await mergeSave();
    },
    [mergeSave]
  );

  const persist = useCallback(
    (updater, op) => {
      apply(updater);
      if (op.type === "delete") deletedRef.current.add(op.id);
      else touchedRef.current.add(op.id);
      queueRef.current = queueRef.current
        .then(() => runOp(op))
        .catch((error) =>
          console.error("[faaaster-annotate] save failed", error)
        );
    },
    [apply, runOp]
  );

  // Poll for other users' annotations (serialized with writes).
  useEffect(() => {
    if (!config.pollInterval) return;
    const timer = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      queueRef.current = queueRef.current.then(() =>
        refresh().catch(() => {})
      );
    }, config.pollInterval);
    return () => clearInterval(timer);
  }, [refresh]);

  const requireIdentity = useCallback(() => {
    if (identity) return true;
    setLoginOpen(true);
    return false;
  }, [identity]);

  const changeMode = (next) => {
    setMode(next);
    setDraft(null);
    if (next === "comment") {
      setShowIntro(false);
      if (!identity) setLoginOpen(true);
    } else {
      setOpenId(null);
    }
  };

  const onPick = (el, x, y, anchor) => {
    if (!requireIdentity()) return;
    setOpenId(null);
    setDraft({ el, anchor });
  };

  // Background context screenshot: captured right after creation, uploaded,
  // then patched into the annotation through a unit upsert. Entirely best
  // effort — any failure just means no screenshot.
  const attachScreenshot = useCallback(
    (id) => {
      captureViewport()
        .then(({ blob, width, height }) => {
          const ext = blob.type === "image/webp" ? "webp" : "jpg";
          const file = new File([blob], "capture-" + id.replace("#", "") + "." + ext, {
            type: blob.type,
          });
          return uploadFile(file).then((uploaded) => {
            persist(
              (prev) =>
                prev.map((a) =>
                  a.id === id
                    ? setScreenshot(a, { url: uploaded.url, w: width, h: height })
                    : a
                ),
              { type: "upsert", id }
            );
          });
        })
        .catch((error) => {
          if (error && error.unsupported) setUploadsEnabled(false);
          else console.warn("[faaaster-annotate] screenshot skipped", error);
        });
    },
    [persist]
  );

  const submitDraft = (text, attachments) => {
    if (!draft || !identity) return;
    const annotation = createAnnotation({
      text,
      creator: identity,
      anchor: draft.anchor,
      attachments,
    });
    setDraft(null);
    persist((prev) => reindex([...prev, annotation]), {
      type: "upsert",
      id: annotation.id,
    });
    setOpenId(annotation.id);
    if (uploadsEnabled) attachScreenshot(annotation.id);
  };

  const onReply = (id, text, attachments) => {
    if (!identity) return;
    persist(
      (prev) =>
        prev.map((a) => (a.id === id ? addReply(a, text, identity, attachments) : a)),
      { type: "upsert", id }
    );
  };

  const onStatus = (id, status) => {
    persist(
      (prev) => prev.map((a) => (a.id === id ? setStatus(a, status) : a)),
      { type: "upsert", id }
    );
  };

  const onDelete = (id) => {
    if (!window.confirm(t.deleteConfirm)) return;
    setOpenId(null);
    persist((prev) => reindex(prev.filter((a) => a.id !== id)), {
      type: "delete",
      id,
    });
  };

  const onEditComment = (id, key, value) => {
    persist((prev) => prev.map((a) => (a.id === id ? editComment(a, key, value) : a)), {
      type: "upsert",
      id,
    });
  };

  const onDeleteComment = (id, key) => {
    deletedBodiesRef.current.add(id + "::" + key);
    persist((prev) => prev.map((a) => (a.id === id ? removeComment(a, key) : a)), {
      type: "upsert",
      id,
    });
  };

  const onLogin = (name, email) => {
    setIdentity({ name, email });
    setLoginOpen(false);
    registerUser(name, email);
  };

  const onSelect = (id) => {
    if (window.innerWidth < 640) setSidebarOpen(false);
    const annotation = annotations.find((a) => a.id === id);
    if (!annotation) return;
    const resolved = resolveAnchor(annotation);
    if (!resolved) return;
    resolved.el.scrollIntoView({ behavior: "smooth", block: "center" });
    setPinsVisible(true);
    window.setTimeout(() => setOpenId(id), 350);
  };

  // Deep link: #fa=<annotationId> scrolls to the pin and opens its thread
  // (the dashboard generates page links as ...?annotate=true#fa=<id>).
  useEffect(() => {
    if (loading) return;
    const match = /#fa=([^&]+)/.exec(window.location.hash);
    if (!match) return;
    const id = decodeURIComponent(match[1]);
    if (annotationsRef.current.find((a) => a.id === id)) onSelect(id);
  }, [loading]);

  const onDisable = () => {
    writeState({
      username: identity ? identity.name : false,
      email: identity ? identity.email : false,
      annotateMode: false,
      showIntro: false,
      disabled: true,
    });
    const url = new URL(window.location.href);
    url.searchParams.delete("t");
    window.location.href = url.href;
  };

  const open = annotations.find((a) => a.id === openId);
  const openPos = openId ? positions[openId] : null;

  return (
    <div class="fa-root">
      <CaptureOverlay
        active={mode === "comment" && !draft && !loginOpen}
        onPick={onPick}
      />
      {pinsVisible && (
        <PinLayer
          annotations={annotations}
          positions={positions}
          openId={openId}
          onOpen={(id) => {
            setDraft(null);
            setOpenId(id === openId ? null : id);
          }}
          draftPos={draft ? positions.__draft : null}
        />
      )}
      {draft && positions.__draft && (
        <Composer
          pos={positions.__draft}
          onSubmit={submitDraft}
          onCancel={() => setDraft(null)}
          uploadsEnabled={uploadsEnabled}
          onUploadUnsupported={() => setUploadsEnabled(false)}
        />
      )}
      {open && openPos && (
        <Thread
          annotation={open}
          pos={openPos}
          identity={identity}
          onReply={(text, attachments) => onReply(open.id, text, attachments)}
          onStatus={(status) => onStatus(open.id, status)}
          onDelete={() => onDelete(open.id)}
          onEditComment={(key, value) => onEditComment(open.id, key, value)}
          onDeleteComment={(key) => onDeleteComment(open.id, key)}
          onClose={() => setOpenId(null)}
          uploadsEnabled={uploadsEnabled}
          onUploadUnsupported={() => setUploadsEnabled(false)}
        />
      )}
      {pinsVisible && <OffscreenIndicators positions={positions} />}
      <Sidebar
        open={sidebarOpen}
        annotations={annotations}
        positions={positions}
        activeId={openId}
        identity={identity}
        onSelect={onSelect}
        onReply={onReply}
        onStatus={onStatus}
        onEditComment={onEditComment}
        onDeleteComment={onDeleteComment}
        onClose={() => setSidebarOpen(false)}
      />
      {showIntro && mode !== "comment" && (
        <Intro onDismiss={() => setShowIntro(false)} />
      )}
      {loginOpen && (
        <LoginModal
          onLogin={onLogin}
          onCancel={() => {
            setLoginOpen(false);
            setMode("browse");
          }}
        />
      )}
      <Toolbar
        mode={mode}
        onMode={changeMode}
        pinsVisible={pinsVisible}
        onTogglePins={() => setPinsVisible(!pinsVisible)}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        count={annotations.length}
        loading={loading}
        onDisable={onDisable}
      />
    </div>
  );
}
