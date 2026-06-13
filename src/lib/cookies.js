const COOKIE_NAME = "faaaster-annotate";

export function getCookie(name) {
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="));
  return match ? match.slice(name.length + 1) : undefined;
}

export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Session state persisted in the same cookie (and shape) as v1, because the
// PHP side reads it to decide whether to enqueue the widget at all.
export function readState() {
  const raw = getCookie(COOKIE_NAME);
  let parsed = {};
  if (raw) {
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      parsed = {};
    }
  }
  return {
    username: parsed.username || false,
    email: parsed.email || false,
    annotateMode: parsed.annotateMode === true,
    showIntro: parsed.showIntro !== false,
    disabled: parsed.disabled === true,
  };
}

export function writeState(state) {
  setCookie(COOKIE_NAME, JSON.stringify(state), 30);
}
