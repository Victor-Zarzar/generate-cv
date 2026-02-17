export function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function bulletsHtml(items) {
  const arr = Array.isArray(items) ? items : [];
  if (arr.length === 0) return "";
  return `<ul class="bullets">${arr.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`;
}

export function linksHtml(links) {
  const arr = Array.isArray(links) ? links : [];
  if (arr.length === 0) return "";
  const li = arr
    .map(
      (l) =>
        `<li>${escapeHtml(l.label)}: <a href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(
          l.url,
        )}</a></li>`,
    )
    .join("");
  return `<ul class="bullets">${li}</ul>`;
}
