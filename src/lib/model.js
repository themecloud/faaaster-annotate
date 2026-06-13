// Annotation model helpers. The stored shape stays W3C Web Annotation
// (recogito-compatible: body[] of TextualBody with purpose commenting/tagging)
// so the Faaaster dashboard keeps working, but targets are now element pins.

import { DEFAULT_STATUS } from "../config.js";

export function uuid() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function textualBody(value, creator, purpose, attachments) {
  const now = new Date().toISOString();
  const body = {
    type: "TextualBody",
    purpose,
    value,
    creator: { id: creator.email || creator.name, name: creator.name },
    created: now,
    modified: now,
  };
  // Non-standard extension ({url, name, type, size}) — unknown fields are
  // ignored by the dashboard, so this is safe to add.
  if (attachments && attachments.length) body.attachments = attachments;
  return body;
}

export function createAnnotation({ text, creator, anchor, attachments }) {
  return {
    "@context": "http://www.w3.org/ns/anno.jsonld",
    type: "Annotation",
    id: "#" + uuid(),
    body: [
      textualBody(text, creator, "commenting", attachments),
      { type: "TextualBody", purpose: "tagging", value: DEFAULT_STATUS },
    ],
    target: {
      source: window.location.href,
      selector: [
        { type: "CssSelector", value: anchor.selector },
        {
          type: "FragmentSelector",
          conformsTo: "http://www.w3.org/TR/media-frags/",
          value: `xywh=percent:${anchor.relX.toFixed(4)},${anchor.relY.toFixed(4)},0,0`,
        },
      ],
    },
    meta: {
      kind: "pin",
      fixed: anchor.fixed,
      viewport: { w: window.innerWidth, h: window.innerHeight },
      ua: navigator.userAgent,
    },
  };
}

export function addReply(annotation, text, creator, attachments) {
  const bodies = annotation.body.slice();
  // Replies are inserted before the tagging body to match v1 ordering
  // (comments first, tag last).
  const tagIndex = bodies.findIndex((b) => b.purpose === "tagging");
  const reply = textualBody(text, creator, "commenting", attachments);
  if (tagIndex === -1) bodies.push(reply);
  else bodies.splice(tagIndex, 0, reply);
  return { ...annotation, body: touchFirst(bodies) };
}

export function setStatus(annotation, status) {
  let found = false;
  const bodies = annotation.body.map((b) => {
    if (b.purpose === "tagging" && !found) {
      found = true;
      return { ...b, value: status, modified: new Date().toISOString() };
    }
    return b;
  });
  if (!found) bodies.push({ type: "TextualBody", purpose: "tagging", value: status });
  return { ...annotation, body: touchFirst(bodies) };
}

export function setScreenshot(annotation, screenshot) {
  return { ...annotation, meta: { ...(annotation.meta || {}), screenshot } };
}

// Stable identity of a comment body across edits (value changes, the
// creator+created pair doesn't) — also used by the sync merge.
export function bodyKey(body) {
  const creator = body.creator || {};
  return (creator.id || creator.name || "?") + "|" + (body.created || "");
}

export function editComment(annotation, key, newText) {
  return {
    ...annotation,
    body: annotation.body.map((b) =>
      b.purpose === "commenting" && bodyKey(b) === key
        ? { ...b, value: newText, modified: new Date().toISOString() }
        : b
    ),
  };
}

export function removeComment(annotation, key) {
  return {
    ...annotation,
    body: annotation.body.filter(
      (b) => !(b.purpose === "commenting" && bodyKey(b) === key)
    ),
  };
}

export function isOwnComment(body, identity) {
  if (!identity || !body.creator) return false;
  return (
    body.creator.id === identity.email ||
    (!body.creator.id && body.creator.name === identity.name)
  );
}

export function deleteReply(annotation, replyIndex) {
  const comments = getComments(annotation);
  const target = comments[replyIndex];
  if (!target) return annotation;
  return { ...annotation, body: annotation.body.filter((b) => b !== target) };
}

// Bump body[0].modified — both the v1 sidebar and the dashboard sort on it.
function touchFirst(bodies) {
  if (bodies.length && bodies[0].purpose === "commenting") {
    bodies = bodies.slice();
    bodies[0] = { ...bodies[0], modified: new Date().toISOString() };
  }
  return bodies;
}

export function getComments(annotation) {
  return (annotation.body || []).filter((b) => b.purpose === "commenting");
}

export function getStatus(annotation) {
  const tag = (annotation.body || []).find((b) => b.purpose === "tagging");
  return tag ? tag.value : DEFAULT_STATUS;
}

export function getCreator(annotation) {
  const first = (annotation.body || [])[0];
  return first && first.creator ? first.creator : { name: "?" };
}

export function lastActivity(annotation) {
  const first = (annotation.body || [])[0] || {};
  return first.modified || first.created || 0;
}

export function createdAt(annotation) {
  const first = (annotation.body || [])[0] || {};
  return first.created || 0;
}

// Sort by creation date and assign 1-based indexes — same convention as v1,
// the backend and dashboard both read `index`.
export function reindex(annotations) {
  const sorted = annotations
    .slice()
    .sort((a, b) => new Date(createdAt(a)) - new Date(createdAt(b)));
  sorted.forEach((a, i) => {
    a.index = i + 1;
  });
  return sorted;
}
