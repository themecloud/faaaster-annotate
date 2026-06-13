import { useState } from "preact/hooks";
import { STATUSES, statusInfo, config } from "../config.js";
import { t, statusLabel } from "../lib/i18n.js";
import { getComments, getStatus, createdAt } from "../lib/model.js";
import { parseUA, deviceOf } from "../lib/env.js";
import { fullDate } from "../lib/time.js";
import { popoverStyle } from "./popover.js";
import {
  IconClose,
  IconTrash,
  IconSend,
  IconLink,
  IconInfo,
  IconCheck,
  IconMonitor,
  IconTablet,
  IconSmartphone,
} from "./icons.jsx";
import { useUploader, AttachmentChips, IconPaperclip } from "./attachments.jsx";
import { CommentList } from "./CommentList.jsx";

export function DeviceIcon({ meta }) {
  const device = deviceOf(meta);
  if (!device) return null;
  const title = meta.viewport.w + "×" + meta.viewport.h;
  return (
    <span class="fa-device" title={title}>
      {device === "mobile" ? (
        <IconSmartphone />
      ) : device === "tablet" ? (
        <IconTablet />
      ) : (
        <IconMonitor />
      )}
    </span>
  );
}

export function annotationLink(annotation) {
  return (
    window.location.origin +
    window.location.pathname +
    window.location.search +
    "#fa=" +
    encodeURIComponent(annotation.id)
  );
}

function InfoPanel({ annotation }) {
  const meta = annotation.meta || {};
  const ua = parseUA(meta.ua);
  const rows = [];
  if (ua) rows.push([t.details, ua.browser + " · " + ua.os]);
  if (meta.viewport) {
    rows.push(["Viewport", meta.viewport.w + "×" + meta.viewport.h]);
  }
  const created = createdAt(annotation);
  if (created) rows.push(["📅", fullDate(created, config.locale)]);
  if (!rows.length) return null;
  return (
    <div class="fa-info-panel">
      <DeviceIcon meta={meta} />
      {rows.map(([label, value]) => (
        <span key={label} title={label}>
          {value}
        </span>
      ))}
    </div>
  );
}

export function Thread({
  annotation,
  pos,
  identity,
  onReply,
  onStatus,
  onDelete,
  onEditComment,
  onDeleteComment,
  onClose,
  uploadsEnabled,
  onUploadUnsupported,
}) {
  const [reply, setReply] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [copied, setCopied] = useState(false);
  const uploader = useUploader(onUploadUnsupported);
  const comments = getComments(annotation);
  const status = getStatus(annotation);
  const screenshot = annotation.meta && annotation.meta.screenshot;
  const style = popoverStyle(pos);

  const send = () => {
    const value = reply.trim();
    if (!value || uploader.busy) return;
    onReply(value, uploader.files);
    setReply("");
    uploader.reset();
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(annotationLink(annotation))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  };

  return (
    <div
      class={(style ? "fa-popover" : "fa-popover fa-sheet") + " fa-thread"}
      style={style || undefined}
    >
      <div class="fa-thread-header">
        <span class="fa-thread-index" style={{ "--fa-pin-color": statusInfo(status).color }}>
          {annotation.index}
        </span>
        <select
          class="fa-status-select"
          value={status}
          onChange={(event) => onStatus(event.target.value)}
        >
          {STATUSES.map((s) => (
            <option key={s.value} value={s.value}>
              {statusLabel(s.value)}
            </option>
          ))}
        </select>
        <button
          type="button"
          class={"fa-icon-btn fa-small" + (copied ? " fa-copied" : "")}
          onClick={copyLink}
          title={copied ? t.linkCopied : t.copyLink}
        >
          {copied ? <IconCheck /> : <IconLink />}
        </button>
        <button
          type="button"
          class={"fa-icon-btn fa-small" + (showInfo ? " fa-active" : "")}
          onClick={() => setShowInfo(!showInfo)}
          title={t.details}
        >
          <IconInfo />
        </button>
        <button type="button" class="fa-icon-btn fa-small" onClick={onDelete} title={t.delete}>
          <IconTrash />
        </button>
        <button type="button" class="fa-icon-btn fa-small" onClick={onClose} title="✕">
          <IconClose />
        </button>
      </div>
      {showInfo && <InfoPanel annotation={annotation} />}
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
        identity={identity}
        onEdit={onEditComment}
        onDeleteComment={onDeleteComment}
      />
      <AttachmentChips files={uploader.files} onRemove={uploader.remove} />
      {uploader.error && <p class="fa-error">{uploader.error}</p>}
      <div class="fa-thread-reply">
        {uploadsEnabled && (
          <button
            type="button"
            class={"fa-icon-btn fa-small" + (uploader.busy ? " fa-busy" : "")}
            onClick={uploader.pick}
            disabled={uploader.busy}
            title={uploader.busy ? t.uploading : t.attach}
          >
            <IconPaperclip />
          </button>
        )}
        {uploader.input}
        <textarea
          class="fa-textarea"
          rows={1}
          placeholder={t.placeholderReply}
          value={reply}
          onInput={(event) => setReply(event.target.value)}
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
          disabled={!reply.trim() || uploader.busy}
          onClick={send}
          title={t.send}
        >
          <IconSend />
        </button>
      </div>
    </div>
  );
}
