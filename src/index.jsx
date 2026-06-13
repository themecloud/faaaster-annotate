import { render } from "preact";
import { App } from "./app.jsx";
import styles from "./styles.css";

const HOST_ID = "faaaster-annotate-root";

function boot() {
  // The whole page is the annotation surface — never run twice.
  if (document.getElementById(HOST_ID)) return;

  // Skip iframes (page builders, previews) — the parent page runs the widget.
  if (window !== window.top) return;

  const host = document.createElement("div");
  host.id = HOST_ID;
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = styles;
  shadow.appendChild(style);

  const mount = document.createElement("div");
  mount.className = "fa-app";
  shadow.appendChild(mount);

  render(<App />, mount);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
