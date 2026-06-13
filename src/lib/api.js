// Thin client for the WordPress REST proxy (unchanged endpoints from v1).
// The page key is concatenated raw (not URL-encoded) on purpose: v1 did the
// same and the backend partitions data on the raw "%%"-encoded key.

import { config, PAGE_KEY, LEGACY_PAGE_KEY } from "../config.js";

const BASE = config.restBase + "/annotate/v1";

async function getJson(url) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("HTTP " + response.status);
  return response.json();
}

export async function fetchAnnotations() {
  let data = await getJson(BASE + "/annotations/?url=" + PAGE_KEY);
  if (Array.isArray(data) && data.length > 0) return data;
  // Fall back to the pre-v1.1 key format so old annotations keep showing.
  data = await getJson(BASE + "/annotations/?url=" + LEGACY_PAGE_KEY);
  return Array.isArray(data) ? data : [];
}

// Site-wide list (each annotation carries its page key in `url`). Upstream
// route to be implemented Next-side; 404 → `unsupported`, the sidebar hides
// its Page/Site switch.
export async function fetchSiteAnnotations() {
  const response = await fetch(BASE + "/annotations/?scope=site", {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw httpError(response.status);
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

// Unit operations (preferred): one HTTP call per annotation change, so two
// users editing the same page can't overwrite each other. When the upstream
// API doesn't support them yet, errors are flagged `unsupported` and the
// caller falls back to the legacy full-array save.
function httpError(status) {
  const error = new Error("HTTP " + status);
  error.unsupported = status === 404 || status === 405 || status === 410 || status === 501;
  return error;
}

export async function upsertAnnotation(annotation) {
  const response = await fetch(BASE + "/annotation/?url=" + PAGE_KEY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(annotation),
  });
  if (!response.ok) throw httpError(response.status);
  return response.json();
}

export async function removeAnnotation(id) {
  const response = await fetch(
    BASE + "/annotation/?url=" + PAGE_KEY + "&id=" + encodeURIComponent(id),
    { method: "DELETE" }
  );
  if (!response.ok) throw httpError(response.status);
  return response.json();
}

// Upload a file (attachment or screenshot). The WP proxy forwards the binary
// to the Faaaster API which stores it in GCS and returns its public URL.
// Until that endpoint exists upstream, callers get an `unsupported` error and
// degrade gracefully (no attachments UI, no screenshot).
export async function uploadFile(file) {
  const form = new FormData();
  form.append("file", file, file.name);
  const response = await fetch(BASE + "/upload/?url=" + PAGE_KEY, {
    method: "POST",
    body: form,
  });
  if (!response.ok) throw httpError(response.status);
  return response.json(); // { url, name, type, size }
}

// Legacy full-array save — fallback only.
export async function saveAnnotations(annotations) {
  const response = await fetch(BASE + "/proxy/?url=" + PAGE_KEY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(annotations),
  });
  if (!response.ok) throw new Error("HTTP " + response.status);
  return response.json();
}

export async function registerUser(username, email) {
  try {
    await fetch(BASE + "/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email }),
    });
  } catch (e) {
    // Non-blocking: user registration is informational.
  }
}
