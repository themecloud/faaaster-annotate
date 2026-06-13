import { t } from "../lib/i18n.js";
import { IconComment } from "./icons.jsx";

export function Intro({ onDismiss }) {
  return (
    <div class="fa-intro">
      <span class="fa-intro-icon">
        <IconComment />
      </span>
      <div class="fa-intro-body">
        <b>{t.introTitle}</b>
        <p>{t.introText}</p>
      </div>
      <button type="button" class="fa-btn fa-btn-primary" onClick={onDismiss}>
        {t.gotIt}
      </button>
    </div>
  );
}
