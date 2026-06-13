// Shared placement for pin-anchored popovers (composer & thread).
// Returns null on small screens — the popover then renders as a bottom sheet.

export const POPOVER_WIDTH = 320;

export function popoverStyle(pos) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vw < 640) return null;
  let left = pos.x + 20;
  if (left + POPOVER_WIDTH > vw - 12) left = pos.x - 20 - POPOVER_WIDTH;
  if (left < 12) left = 12;
  const top = Math.max(12, Math.min(pos.y - 24, vh - 400));
  return { left: left + "px", top: top + "px" };
}
