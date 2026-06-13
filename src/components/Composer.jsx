import { useEffect, useRef, useState } from "preact/hooks";
import { t } from "../lib/i18n.js";
import { popoverStyle } from "./popover.js";
import { IconSend } from "./icons.jsx";
import { useUploader, AttachmentChips, IconPaperclip } from "./attachments.jsx";

export function Composer({ pos, onSubmit, onCancel, uploadsEnabled, onUploadUnsupported }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const uploader = useUploader(onUploadUnsupported);
  const style = popoverStyle(pos);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const submit = () => {
    const value = text.trim();
    if (value && !uploader.busy) onSubmit(value, uploader.files);
  };

  return (
    <div class={style ? "fa-popover" : "fa-popover fa-sheet"} style={style || undefined}>
      <textarea
        ref={inputRef}
        class="fa-textarea"
        rows={3}
        placeholder={t.placeholderComment}
        value={text}
        onInput={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) submit();
        }}
      />
      <AttachmentChips files={uploader.files} onRemove={uploader.remove} />
      {uploader.error && <p class="fa-error">{uploader.error}</p>}
      <div class="fa-popover-actions">
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
        <span class="fa-actions-spacer" />
        <button type="button" class="fa-btn fa-btn-ghost" onClick={onCancel}>
          {t.cancel}
        </button>
        <button
          type="button"
          class="fa-btn fa-btn-primary"
          disabled={!text.trim() || uploader.busy}
          onClick={submit}
        >
          <IconSend />
          {t.send}
        </button>
      </div>
    </div>
  );
}
