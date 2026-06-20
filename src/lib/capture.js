// Viewport screenshot taken when an annotation is created, so the feedback
// keeps its visual context even if the page layout changes later.
// Rendering is done client-side with html-to-image (SVG foreignObject), the
// result is cropped to the visible viewport and encoded as WebP (~800px wide,
// JPEG fallback for engines that can't encode WebP). Best effort: cross-origin
// images without CORS are simply missing from the render.

import { toCanvas } from "html-to-image";

const HOST_ID = "faaaster-annotate-root";
const TARGET_WIDTH = 800;
const QUALITY = 0.65;
const TIMEOUT_MS = 12000;

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("capture timeout")), ms)
    ),
  ]);
}

function encode(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob && blob.type === "image/webp") return resolve(blob);
        // Engine ignored the WebP hint (e.g. older Safari) → JPEG.
        canvas.toBlob(
          (jpeg) => (jpeg ? resolve(jpeg) : reject(new Error("encode failed"))),
          "image/jpeg",
          QUALITY
        );
      },
      "image/webp",
      QUALITY
    );
  });
}

// Draws the pin marker on the cropped canvas (the widget itself is excluded
// from the html-to-image render, so the real pin isn't there — we add it). A
// white-ringed dot over a soft halo, visible on any background. `px/py` are
// already in crop-canvas pixels.
function drawPin(ctx, px, py) {
  const r = Math.max(9, ctx.canvas.width * 0.014);
  ctx.save();
  ctx.beginPath();
  ctx.arc(px, py, r + 2, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(px, py, r, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(px, py, r - Math.max(2, r * 0.3), 0, Math.PI * 2);
  ctx.fillStyle = "#f43f5e"; // statut « Nouveau » (cohérent avec un pin frais)
  ctx.fill();
  ctx.restore();
}

// `pin` (optional): { el, relX, relY } — the anchored element + relative
// position; its viewport point is snapshotted with the SAME scroll as the crop
// so the marker lands exactly where the pin is.
export async function captureViewport(pin) {
  const scale = Math.min(1, TARGET_WIDTH / window.innerWidth);
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  let pinPt = null;
  if (pin && pin.el && pin.el.getBoundingClientRect) {
    const r = pin.el.getBoundingClientRect();
    if (r.width || r.height) {
      pinPt = {
        x: r.left + r.width * (pin.relX == null ? 0.5 : pin.relX),
        y: r.top + r.height * (pin.relY == null ? 0.5 : pin.relY),
      };
    }
  }

  // Render the full page at reduced scale, excluding our own UI.
  const canvas = await withTimeout(
    toCanvas(document.body, {
      pixelRatio: scale,
      filter: (node) => !(node.id === HOST_ID || node.id === "wpadminbar"),
      backgroundColor: "#ffffff",
    }),
    TIMEOUT_MS
  );

  // Crop to what the user currently sees.
  const crop = document.createElement("canvas");
  crop.width = Math.round(window.innerWidth * scale);
  crop.height = Math.round(window.innerHeight * scale);
  const ctx = crop.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, crop.width, crop.height);
  ctx.drawImage(
    canvas,
    Math.round(scrollX * scale),
    Math.round(scrollY * scale),
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  if (pinPt) {
    drawPin(ctx, pinPt.x * scale, pinPt.y * scale);
  }

  const blob = await encode(crop);
  return {
    blob,
    width: crop.width,
    height: crop.height,
  };
}
