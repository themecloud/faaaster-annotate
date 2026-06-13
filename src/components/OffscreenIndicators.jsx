import { t } from "../lib/i18n.js";
import { IconArrowUp, IconArrowDown } from "./icons.jsx";

// Edge badges signalling pins outside the viewport ("2 ↑ / 3 ↓"); clicking
// scrolls to the nearest one in that direction.
export function OffscreenIndicators({ positions }) {
  const points = Object.entries(positions).filter(
    ([id, pos]) => id !== "__draft" && pos
  );
  const above = points.filter(([, pos]) => pos.y < 0);
  const below = points.filter(([, pos]) => pos.y > window.innerHeight);

  const scrollToNearest = (list, direction) => {
    if (!list.length) return;
    const nearest = list.reduce((best, current) =>
      direction === "up"
        ? current[1].y > best[1].y
          ? current
          : best
        : current[1].y < best[1].y
          ? current
          : best
    );
    window.scrollBy({
      top: nearest[1].y - window.innerHeight / 2,
      behavior: "smooth",
    });
  };

  if (!above.length && !below.length) return null;

  return (
    <>
      {above.length > 0 && (
        <button
          type="button"
          class="fa-offscreen fa-offscreen-top"
          onClick={() => scrollToNearest(above, "up")}
          title={above.length + " " + t.above}
        >
          <IconArrowUp />
          {above.length}
        </button>
      )}
      {below.length > 0 && (
        <button
          type="button"
          class="fa-offscreen fa-offscreen-bottom"
          onClick={() => scrollToNearest(below, "down")}
          title={below.length + " " + t.below}
        >
          <IconArrowDown />
          {below.length}
        </button>
      )}
    </>
  );
}
