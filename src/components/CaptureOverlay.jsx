import { useEffect, useRef, useState } from "preact/hooks";
import { buildAnchor } from "../lib/anchor.js";

const HOST_ID = "faaaster-annotate-root";

// Find the topmost page element under the pointer, ignoring our own widget.
function elementAt(x, y) {
  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    if (el.id === HOST_ID || el.closest("#" + HOST_ID)) continue;
    if (el === document.documentElement) continue;
    return el;
  }
  return document.body;
}

// Full-page click catcher used in comment mode: highlights the hovered
// element and turns a click into a pin anchor. Page links/buttons are
// intentionally inert while commenting (like v1's annotate mode).
export function CaptureOverlay({ active, onPick }) {
  const [rect, setRect] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!active) setRect(null);
  }, [active]);

  if (!active) return null;

  const onMove = (event) => {
    const el = elementAt(event.clientX, event.clientY);
    if (!el || el === document.body || el === document.documentElement) {
      setRect(null);
      return;
    }
    const r = el.getBoundingClientRect();
    setRect({ left: r.left, top: r.top, width: r.width, height: r.height });
  };

  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const el = elementAt(event.clientX, event.clientY);
    if (!el) return;
    onPick(el, event.clientX, event.clientY, buildAnchor(el, event.clientX, event.clientY));
  };

  return (
    <div
      ref={overlayRef}
      class="fa-capture"
      onMouseMove={onMove}
      onMouseLeave={() => setRect(null)}
      onClick={onClick}
    >
      {rect && rect.width > 0 && (
        <div
          class="fa-highlight"
          style={{
            left: rect.left + "px",
            top: rect.top + "px",
            width: rect.width + "px",
            height: rect.height + "px",
          }}
        />
      )}
    </div>
  );
}
