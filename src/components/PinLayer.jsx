import { statusInfo } from "../config.js";
import { getStatus } from "../lib/model.js";

export function PinLayer({ annotations, positions, openId, onOpen, draftPos }) {
  return (
    <div class="fa-pins">
      {annotations.map((annotation) => {
        const pos = positions[annotation.id];
        if (!pos) return null;
        const status = statusInfo(getStatus(annotation));
        const resolved = status.key === "done";
        return (
          <button
            type="button"
            key={annotation.id}
            class={
              "fa-pin" +
              (annotation.id === openId ? " fa-pin-open" : "") +
              (resolved ? " fa-pin-done" : "")
            }
            style={{
              left: pos.x + "px",
              top: pos.y + "px",
              "--fa-pin-color": status.color,
            }}
            onClick={(event) => {
              event.stopPropagation();
              onOpen(annotation.id);
            }}
            title={"#" + (annotation.number ?? annotation.index)}
          >
            <span>{annotation.number ?? annotation.index}</span>
          </button>
        );
      })}
      {draftPos && (
        <div
          class="fa-pin fa-pin-draft"
          style={{ left: draftPos.x + "px", top: draftPos.y + "px" }}
        >
          <span>+</span>
        </div>
      )}
    </div>
  );
}
