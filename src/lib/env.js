// Lightweight environment description from the metadata stored on each
// annotation (meta.ua / meta.viewport) — enough to reproduce a report,
// no UA-parser dependency.

export function parseUA(ua) {
  if (!ua) return null;
  let browser = "?";
  if (/edg\//i.test(ua)) browser = "Edge";
  else if (/opr\//i.test(ua)) browser = "Opera";
  else if (/chrome|crios/i.test(ua)) browser = "Chrome";
  else if (/firefox|fxios/i.test(ua)) browser = "Firefox";
  else if (/safari/i.test(ua)) browser = "Safari";

  let os = "?";
  if (/windows/i.test(ua)) os = "Windows";
  else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
  else if (/mac os/i.test(ua)) os = "macOS";
  else if (/android/i.test(ua)) os = "Android";
  else if (/linux/i.test(ua)) os = "Linux";

  return { browser, os };
}

// Device class from the viewport width recorded at creation.
export function deviceOf(meta) {
  const width = meta && meta.viewport && meta.viewport.w;
  if (!width) return null;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}
