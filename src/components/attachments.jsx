// Attachment picking/uploading (shared by the composer and thread replies)
// and attachment rendering inside comments.

import { useRef, useState } from "preact/hooks";
import { uploadFile } from "../lib/api.js";
import { t } from "../lib/i18n.js";
import { IconClose } from "./icons.jsx";

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPT = "image/*,.pdf,.zip";
const ALLOWED = /^(image\/|application\/pdf$|application\/(x-)?zip)/;

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " Mo";
  return Math.max(1, Math.round(bytes / 1024)) + " Ko";
}

export function useUploader(onUnsupported) {
  const [files, setFiles] = useState([]); // uploaded: {url, name, type, size}
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const pick = () => inputRef.current && inputRef.current.click();

  const onChange = async (event) => {
    const selected = Array.from(event.target.files || []);
    event.target.value = "";
    setError(null);
    for (const file of selected) {
      if (file.size > MAX_SIZE) {
        setError(t.fileTooBig);
        continue;
      }
      if (!ALLOWED.test(file.type)) {
        setError(t.fileType);
        continue;
      }
      setBusy(true);
      try {
        const uploaded = await uploadFile(file);
        setFiles((prev) => [...prev, uploaded]);
      } catch (e) {
        if (e.unsupported) {
          setError(t.uploadUnavailable);
          if (onUnsupported) onUnsupported();
        } else {
          setError(t.uploadFailed);
        }
      }
      setBusy(false);
    }
  };

  const remove = (file) => setFiles((prev) => prev.filter((f) => f !== file));
  const reset = () => {
    setFiles([]);
    setError(null);
  };

  const input = (
    <input
      ref={inputRef}
      type="file"
      multiple
      accept={ACCEPT}
      style={{ display: "none" }}
      onChange={onChange}
    />
  );

  return { files, busy, error, pick, remove, reset, input };
}

export const IconPaperclip = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

// Chips shown while composing (with remove buttons).
export function AttachmentChips({ files, onRemove }) {
  if (!files.length) return null;
  return (
    <div class="fa-attach-chips">
      {files.map((file) => (
        <span class="fa-attach-chip" key={file.url} title={file.name}>
          {file.type && file.type.startsWith("image/") && (
            <img src={file.url} alt="" />
          )}
          <span class="fa-attach-name">{file.name}</span>
          <button type="button" onClick={() => onRemove(file)} title={t.removeFile}>
            <IconClose />
          </button>
        </span>
      ))}
    </div>
  );
}

// Read-only rendering inside a comment.
export function AttachmentList({ attachments }) {
  if (!attachments || !attachments.length) return null;
  const images = attachments.filter((a) => a.type && a.type.startsWith("image/"));
  const others = attachments.filter((a) => !a.type || !a.type.startsWith("image/"));
  return (
    <div class="fa-attachments">
      {images.length > 0 && (
        <div class="fa-attach-thumbs">
          {images.map((file) => (
            <a href={file.url} target="_blank" rel="noopener" key={file.url} title={file.name}>
              <img src={file.url} alt={file.name} loading="lazy" />
            </a>
          ))}
        </div>
      )}
      {others.map((file) => (
        <a class="fa-attach-file" href={file.url} target="_blank" rel="noopener" key={file.url}>
          <IconPaperclip />
          <span class="fa-attach-name">{file.name}</span>
          {file.size > 0 && <span class="fa-attach-size">{formatSize(file.size)}</span>}
        </a>
      ))}
    </div>
  );
}
