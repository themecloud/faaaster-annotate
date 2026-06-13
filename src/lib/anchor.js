// Element anchoring: build a robust CSS selector for a clicked element and
// resolve it back to a viewport position later (including across reloads and
// moderate DOM changes).

const HOST_ID = "faaaster-annotate-root";

function cssEscape(value) {
  return window.CSS && CSS.escape
    ? CSS.escape(value)
    : value.replace(/([^a-zA-Z0-9_-])/g, "\\$1");
}

function isUniqueId(id) {
  try {
    return document.querySelectorAll("#" + cssEscape(id)).length === 1;
  } catch (e) {
    return false;
  }
}

// Looks auto-generated (react ids, ember ids, random hashes…) → unstable.
function isStableId(id) {
  if (!id || id.length > 64) return false;
  if (/\d{4,}/.test(id)) return false;
  if (/^(ember|react|radix|aria)-/.test(id)) return false;
  return true;
}

function segment(el) {
  const tag = el.tagName.toLowerCase();
  const parent = el.parentElement;
  if (!parent) return tag;
  const siblings = Array.from(parent.children).filter(
    (c) => c.tagName === el.tagName
  );
  if (siblings.length === 1) return tag;
  return `${tag}:nth-of-type(${siblings.indexOf(el) + 1})`;
}

export function buildSelector(el) {
  const parts = [];
  let node = el;
  while (node && node.nodeType === Node.ELEMENT_NODE && node !== document.documentElement) {
    if (node.id && isStableId(node.id) && isUniqueId(node.id)) {
      parts.unshift("#" + cssEscape(node.id));
      return parts.join(" > ");
    }
    if (node === document.body) {
      parts.unshift("body");
      return parts.join(" > ");
    }
    parts.unshift(segment(node));
    node = node.parentElement;
  }
  parts.unshift("html");
  return parts.join(" > ");
}

export function hasFixedAncestor(el) {
  let node = el;
  while (node && node.nodeType === Node.ELEMENT_NODE) {
    const position = window.getComputedStyle(node).position;
    if (position === "fixed" || position === "sticky") return true;
    node = node.parentElement;
  }
  return false;
}

// Build the anchor for a click at viewport coords (x, y) on element el.
export function buildAnchor(el, x, y) {
  const rect = el.getBoundingClientRect();
  return {
    selector: buildSelector(el),
    relX: rect.width ? (x - rect.left) / rect.width : 0.5,
    relY: rect.height ? (y - rect.top) / rect.height : 0.5,
    fixed: hasFixedAncestor(el),
  };
}

function parseFragment(value) {
  // "xywh=percent:relX,relY,0,0"
  const match = /percent:([\d.]+),([\d.]+)/.exec(value || "");
  if (!match) return null;
  return { relX: parseFloat(match[1]), relY: parseFloat(match[2]) };
}

function selectorsOf(annotation) {
  const target = annotation.target || {};
  const sel = target.selector;
  if (!sel) return [];
  return Array.isArray(sel) ? sel : [sel];
}

function findByText(quote) {
  if (!quote) return null;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (node.parentElement && node.parentElement.closest("#" + HOST_ID)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.textContent.includes(quote)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP;
    },
  });
  const node = walker.nextNode();
  return node ? node.parentElement : null;
}

// Resolve an annotation to { el, relX, relY, fixed, legacy } or null when the
// anchor can't be found anymore (annotation stays listed in the sidebar).
export function resolveAnchor(annotation) {
  const selectors = selectorsOf(annotation);

  const css = selectors.find((s) => s.type === "CssSelector");
  const fragment = selectors.find((s) => s.type === "FragmentSelector");
  if (css && fragment) {
    const rel = parseFragment(fragment.value);
    let el = null;
    try {
      el = document.querySelector(css.value);
    } catch (e) {
      el = null;
    }
    if (el && rel) {
      return { el, relX: rel.relX, relY: rel.relY, fixed: hasFixedAncestor(el), legacy: false };
    }
  }

  // v1 (recogito) annotations target a text quote — best effort re-anchor.
  const quote = selectors.find((s) => s.type === "TextQuoteSelector");
  if (quote && quote.exact) {
    const el = findByText(quote.exact.trim());
    if (el) {
      return { el, relX: 0.5, relY: 0.5, fixed: hasFixedAncestor(el), legacy: true };
    }
  }

  return null;
}

// Viewport position of a resolved anchor.
export function anchorPoint(resolved) {
  const rect = resolved.el.getBoundingClientRect();
  if (!rect.width && !rect.height) return null;
  return {
    x: rect.left + rect.width * resolved.relX,
    y: rect.top + rect.height * resolved.relY,
  };
}
