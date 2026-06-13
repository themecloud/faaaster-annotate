import { useState } from "preact/hooks";
import { config } from "../config.js";
import { t } from "../lib/i18n.js";
import { bodyKey, isOwnComment } from "../lib/model.js";
import { timeAgo, fullDate } from "../lib/time.js";
import { AttachmentList } from "./attachments.jsx";
import { IconPencil, IconTrash, IconCheck, IconClose } from "./icons.jsx";

function initials(name) {
  return (name || "?")
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function CommentList({ comments, identity, onEdit, onDeleteComment }) {
  const [editingKey, setEditingKey] = useState(null);
  const [draft, setDraft] = useState("");

  const startEdit = (comment) => {
    setEditingKey(bodyKey(comment));
    setDraft(comment.value);
  };

  const saveEdit = (comment) => {
    const value = draft.trim();
    if (value && value !== comment.value) onEdit(bodyKey(comment), value);
    setEditingKey(null);
  };

  return (
    <div class="fa-thread-comments">
      {comments.map((comment, index) => {
        const key = bodyKey(comment);
        const own = isOwnComment(comment, identity);
        const edited =
          comment.modified && comment.created && comment.modified !== comment.created;
        return (
          <div class="fa-comment" key={key}>
            <span class="fa-avatar">{initials(comment.creator && comment.creator.name)}</span>
            <div class="fa-comment-main">
              <div class="fa-comment-meta">
                <span class="fa-comment-author">
                  {(comment.creator && comment.creator.name) || "?"}
                </span>
                <time title={fullDate(comment.modified || comment.created, config.locale)}>
                  {timeAgo(comment.modified || comment.created)}
                  {edited && editingKey !== key ? " · " + t.edited : ""}
                </time>
                {own && editingKey !== key && (
                  <span class="fa-comment-tools">
                    <button type="button" title={t.edit} onClick={() => startEdit(comment)}>
                      <IconPencil />
                    </button>
                    {index > 0 && (
                      <button
                        type="button"
                        title={t.delete}
                        onClick={() => {
                          if (window.confirm(t.deleteComment)) onDeleteComment(key);
                        }}
                      >
                        <IconTrash />
                      </button>
                    )}
                  </span>
                )}
              </div>
              {editingKey === key ? (
                <div class="fa-comment-edit">
                  <textarea
                    class="fa-textarea"
                    rows={2}
                    value={draft}
                    onInput={(event) => setDraft(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        saveEdit(comment);
                      }
                      if (event.key === "Escape") setEditingKey(null);
                    }}
                  />
                  <div class="fa-comment-edit-actions">
                    <button type="button" title={t.cancel} onClick={() => setEditingKey(null)}>
                      <IconClose />
                    </button>
                    <button
                      type="button"
                      class="fa-edit-save"
                      title={t.save}
                      onClick={() => saveEdit(comment)}
                    >
                      <IconCheck />
                    </button>
                  </div>
                </div>
              ) : (
                <div class="fa-comment-text">{comment.value}</div>
              )}
              <AttachmentList attachments={comment.attachments} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
