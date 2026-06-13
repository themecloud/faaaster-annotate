import { useState } from "preact/hooks";
import { t } from "../lib/i18n.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginModal({ onLogin, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(t.invalidEmail);
      return;
    }
    onLogin(name.trim(), email.trim());
  };

  return (
    <div class="fa-modal-backdrop" onClick={onCancel}>
      <form class="fa-modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <h3>{t.loginTitle}</h3>
        <p>{t.loginText}</p>
        <label>
          {t.username}
          <input
            type="text"
            required
            value={name}
            onInput={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          {t.email}
          <input
            type="email"
            required
            value={email}
            onInput={(event) => setEmail(event.target.value)}
          />
        </label>
        {error && <p class="fa-error">{error}</p>}
        <div class="fa-popover-actions">
          <button type="button" class="fa-btn fa-btn-ghost" onClick={onCancel}>
            {t.cancel}
          </button>
          <button type="submit" class="fa-btn fa-btn-primary" disabled={!name.trim() || !email.trim()}>
            {t.validate}
          </button>
        </div>
      </form>
    </div>
  );
}
