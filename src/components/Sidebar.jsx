import { useEffect, useRef, useState } from "preact/hooks";
import { STATUSES, statusInfo } from "../config.js";
import { t, statusLabel } from "../lib/i18n.js";
import { getComments, getStatus, getCreator, lastActivity } from "../lib/model.js";
import { timeAgo } from "../lib/time.js";
import { fetchSiteAnnotations } from "../lib/api.js";
import {
  IconClose,
  IconComment,
  IconOffscreen,
  IconChevron,
  IconExternal,
  IconSend,
} from "./icons.jsx";
import { CommentList } from "./CommentList.jsx";
import { DeviceIcon } from "./Thread.jsx";

function pagePath(urlKey) {
  return urlKey ? urlKey.replace(/%%/g, "/") : "";
}

// Inline reply used inside an expanded sidebar item (e.g. for annotations
// that can't be located on the page anymore).
function InlineReply({ onReply }) {
  const [text, setText] = useState("");
  const send = () => {
    const value = text.trim();
    if (!value) return;
    onReply(value);
    setText("");
  };
  return (
    <div class="fa-thread-reply">
      <textarea
        class="fa-textarea"
        rows={1}
        placeholder={t.placeholderReply}
        value={text}
        onInput={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
          }
        }}
      />
      <button
        type="button"
        class="fa-btn fa-btn-primary fa-btn-round"
        disabled={!text.trim()}
        onClick={send}
        title={t.send}
      >
        <IconSend />
      </button>
    </div>
  );
}

export function Sidebar({
  open,
  annotations,
  positions,
  activeId,
  identity,
  onSelect,
  onReply,
  onStatus,
  onEditComment,
  onDeleteComment,
  onClose,
}) {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [scope, setScope] = useState("page");
  const [siteAvailable, setSiteAvailable] = useState(false);
  const [siteAnnotations, setSiteAnnotations] = useState(null);
  const probedRef = useRef(false);

  // Probe site-wide support the first time the sidebar opens. The route is
  // served by Next/GCS and may not be deployed yet — only reveal the
  // Page/Site switch if it actually answers, so it never appears just to
  // vanish on click. The probe response doubles as the initial dataset.
  useEffect(() => {
    if (!open || probedRef.current) return;
    probedRef.current = true;
    fetchSiteAnnotations()
      .then((data) => {
        setSiteAnnotations(data);
        setSiteAvailable(true);
      })
      .catch(() => setSiteAvailable(false));
  }, [open]);

  // Refresh the site list each time we switch to it (keeps it current).
  useEffect(() => {
    if (scope !== "site" || !siteAvailable) return;
    fetchSiteAnnotations()
      .then(setSiteAnnotations)
      .catch(() => setScope("page"));
  }, [scope, siteAvailable]);

  const isSite = scope === "site" && Array.isArray(siteAnnotations);
  const source = isSite ? siteAnnotations : annotations;

  const sorted = source
    .slice()
    .sort((a, b) => new Date(lastActivity(b)) - new Date(lastActivity(a)));
  const filtered =
    filter === "all" ? sorted : sorted.filter((a) => getStatus(a) === filter);

  const counts = { all: source.length };
  for (const s of STATUSES) {
    counts[s.value] = source.filter((a) => getStatus(a) === s.value).length;
  }

  return (
    <aside class={"fa-sidebar" + (open ? " fa-sidebar-open" : "")}>
      <div class="fa-sidebar-header">
        <h2>{t.tasks}</h2>
        {siteAvailable && (
          <div class="fa-scope">
            <button
              type="button"
              class={scope === "page" ? "fa-scope-active" : ""}
              onClick={() => setScope("page")}
            >
              {t.thisPage}
            </button>
            <button
              type="button"
              class={scope === "site" ? "fa-scope-active" : ""}
              onClick={() => setScope("site")}
            >
              {t.wholeSite}
            </button>
          </div>
        )}
        <button type="button" class="fa-icon-btn fa-small" onClick={onClose}>
          <IconClose />
        </button>
      </div>
      <div class="fa-filters">
        <button
          type="button"
          class={"fa-chip" + (filter === "all" ? " fa-chip-active" : "")}
          onClick={() => setFilter("all")}
        >
          {t.all} <b>{counts.all}</b>
        </button>
        {STATUSES.map((s) => (
          <button
            type="button"
            key={s.value}
            class={"fa-chip" + (filter === s.value ? " fa-chip-active" : "")}
            style={{ "--fa-chip-color": s.color }}
            onClick={() => setFilter(s.value)}
          >
            {statusLabel(s.value)} <b>{counts[s.value]}</b>
          </button>
        ))}
      </div>
      <ul class="fa-list">
        {filtered.length === 0 && (
          <li class="fa-empty">{source.length === 0 ? t.empty : t.emptyFiltered}</li>
        )}
        {filtered.map((annotation) => {
          const comments = getComments(annotation);
          const replies = Math.max(0, comments.length - 1);
          const status = statusInfo(getStatus(annotation));
          const otherPage = isSite && annotation.url && pagePath(annotation.url) !== window.location.pathname;
          const located = !otherPage && !!positions[annotation.id];
          const expanded = expandedId === annotation.id;
          const screenshot = annotation.meta && annotation.meta.screenshot;
          return (
            <li key={annotation.id} class={expanded ? "fa-expanded" : ""}>
              <div
                class={
                  "fa-item" +
                  (annotation.id === activeId ? " fa-item-active" : "") +
                  (located || otherPage ? "" : " fa-item-unlocated")
                }
              >
                <button
                  type="button"
                  class="fa-item-main"
                  title={located || otherPage ? "" : t.notLocated}
                  onClick={() => {
                    if (otherPage) {
                      window.location.href =
                        pagePath(annotation.url) + "#fa=" + encodeURIComponent(annotation.id);
                    } else if (located) {
                      onSelect(annotation.id);
                    } else {
                      setExpandedId(expanded ? null : annotation.id);
                    }
                  }}
                >
                  <span class="fa-item-pin" style={{ "--fa-pin-color": status.color }}>
                    {annotation.number ?? annotation.index}
                  </span>
                  <span class="fa-item-body">
                    <span class="fa-item-text">{(comments[0] || {}).value || ""}</span>
                    {otherPage && (
                      <span class="fa-item-page">
                        <IconExternal /> {pagePath(annotation.url) || "/"}
                      </span>
                    )}
                    <span class="fa-item-meta">
                      <b>{getCreator(annotation).name}</b>
                      <span>·</span>
                      <time>{timeAgo(lastActivity(annotation))}</time>
                      {replies > 0 && (
                        <span class="fa-item-replies">
                          <IconComment /> {replies}
                        </span>
                      )}
                      <DeviceIcon meta={annotation.meta} />
                      {!located && !otherPage && <IconOffscreen />}
                    </span>
                  </span>
                  <span class="fa-item-status" style={{ "--fa-chip-color": status.color }}>
                    {statusLabel(status.value)}
                  </span>
                </button>
                <button
                  type="button"
                  class={"fa-item-chevron" + (expanded ? " fa-open" : "")}
                  onClick={() => setExpandedId(expanded ? null : annotation.id)}
                  title={expanded ? "−" : "+"}
                >
                  <IconChevron />
                </button>
              </div>
              {expanded && (
                <div class="fa-item-detail">
                  {!otherPage && (
                    <select
                      class="fa-status-select"
                      value={status.value}
                      onChange={(event) => onStatus(annotation.id, event.target.value)}
                    >
                      {STATUSES.map((s) => (
                        <option key={s.value} value={s.value}>
                          {statusLabel(s.value)}
                        </option>
                      ))}
                    </select>
                  )}
                  {screenshot && (
                    <a
                      class="fa-screenshot"
                      href={screenshot.url}
                      target="_blank"
                      rel="noopener"
                      title={t.screenshot}
                    >
                      <img src={screenshot.url} alt={t.screenshot} loading="lazy" />
                    </a>
                  )}
                  <CommentList
                    comments={comments}
                    identity={otherPage ? null : identity}
                    onEdit={(key, value) => onEditComment(annotation.id, key, value)}
                    onDeleteComment={(key) => onDeleteComment(annotation.id, key)}
                  />
                  {!otherPage && (
                    <InlineReply onReply={(text) => onReply(annotation.id, text, [])} />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
