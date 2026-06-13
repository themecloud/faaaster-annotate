import { t } from "./i18n.js";

export function timeAgo(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return "";
  const diff = Math.max(0, Date.now() - date.getTime());
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return t.timeAgo.now;
  if (minutes < 60) return minutes + " " + t.timeAgo.m;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + " " + t.timeAgo.h;
  const days = Math.floor(hours / 24);
  if (days < 7) return days + " " + t.timeAgo.d;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks + " " + t.timeAgo.w;
  const months = Math.floor(days / 30);
  return months + " " + t.timeAgo.mo;
}

export function fullDate(dateString, locale) {
  const date = new Date(dateString);
  if (isNaN(date)) return "";
  return date.toLocaleString(locale.replace("_", "-"));
}
