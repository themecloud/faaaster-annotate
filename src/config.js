// Reads the config injected by WordPress (wp_localize_script) and derives
// the constants shared across the app.

const wp = typeof window !== "undefined" && window.appConfig ? window.appConfig : {};

export const config = {
  locale: wp.locale || "en_US",
  lang: (wp.locale || "").toLowerCase().startsWith("fr") ? "fr" : "en",
  wpUser: wp.user || null,
  wpEmail: wp.email || null,
  // "true" / "false" / false — forced mode via ?annotate= query param
  forcedAnnotate: wp.annotate,
  disabled: wp.disabled,
  restBase: (wp.restBase || "/wp-json").replace(/\/$/, ""),
  // Refresh cadence for other users' annotations (0 disables polling).
  pollInterval: typeof wp.pollInterval === "number" ? wp.pollInterval : 15000,
};

// Page key used to partition annotations server-side. Kept byte-identical to
// v1 so existing data stays reachable: "/" replaced by "%%", sent raw.
export const PAGE_KEY = window.location.pathname.replace(/\//g, "%%");

// v1 used an older key format (host + path, slashes and dots to dashes) before
// switching to PAGE_KEY. We still read it as a fallback for old pages.
export const LEGACY_PAGE_KEY = (window.location.host + window.location.pathname)
  .replace(/\//g, "-")
  .replace(/\./g, "-");

// Stored status vocabulary — same values as v1 tags so the Faaaster dashboard
// keeps rendering them without changes.
export const STATUSES = [
  { value: "Nouveau", key: "new", color: "#f43f5e" },
  { value: "En cours", key: "progress", color: "#3b82f6" },
  { value: "À valider", key: "review", color: "#f59e0b" },
  { value: "Validé", key: "done", color: "#10b981" },
];

export const DEFAULT_STATUS = "Nouveau";

export function statusInfo(value) {
  return STATUSES.find((s) => s.value === value) || STATUSES[0];
}
