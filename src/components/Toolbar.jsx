import { t } from "../lib/i18n.js";
import {
  IconComment,
  IconCursor,
  IconEye,
  IconEyeOff,
  IconList,
  IconPower,
} from "./icons.jsx";

export function Toolbar({
  mode,
  onMode,
  pinsVisible,
  onTogglePins,
  sidebarOpen,
  onToggleSidebar,
  count,
  loading,
  onDisable,
}) {
  return (
    <div class="fa-toolbar" role="toolbar" aria-label="Faaaster annotate">
      <div class="fa-toolbar-modes">
        <button
          type="button"
          class={"fa-mode-btn" + (mode === "comment" ? " fa-active" : "")}
          onClick={() => onMode("comment")}
          title={t.annotate}
        >
          <IconComment />
          <span>{t.annotate}</span>
        </button>
        <button
          type="button"
          class={"fa-mode-btn" + (mode === "browse" ? " fa-active" : "")}
          onClick={() => onMode("browse")}
          title={t.navigate}
        >
          <IconCursor />
          <span>{t.navigate}</span>
        </button>
      </div>
      <div class="fa-toolbar-sep" />
      <button
        type="button"
        class="fa-icon-btn"
        onClick={onTogglePins}
        title={pinsVisible ? t.hidePins : t.showPins}
      >
        {pinsVisible ? <IconEye /> : <IconEyeOff />}
      </button>
      <button
        type="button"
        class={"fa-icon-btn" + (sidebarOpen ? " fa-active" : "")}
        onClick={onToggleSidebar}
        title={t.tasks}
      >
        <IconList />
        {loading ? (
          <span class="fa-badge fa-badge-loading" />
        ) : (
          count > 0 && <span class="fa-badge">{count}</span>
        )}
      </button>
      <div class="fa-toolbar-sep" />
      <button type="button" class="fa-icon-btn fa-quit" onClick={onDisable} title={t.quit}>
        <IconPower />
      </button>
    </div>
  );
}
