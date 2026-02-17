import { escapeHtml, bulletsHtml, linksHtml } from "./html.mjs";

export function skillsHtml(skills) {
  const arr = Array.isArray(skills) ? skills : [];
  return arr
    .map(
      (g) =>
        `<div class="item"><div class="item-title">${escapeHtml(g.group)}:</div> ${escapeHtml(
          (g.items ?? []).join(", "),
        )}</div>`,
    )
    .join("\n");
}

export function certificatesHtml(certificates, labels) {
  const arr = Array.isArray(certificates) ? certificates : [];
  return arr
    .map((c) => {
      const issuer = c.issuer ? escapeHtml(c.issuer) : "";
      const date = c.date ? escapeHtml(c.date) : "";
      const issuerLine =
        issuer && date ? `${issuer} ${labels.issuerDateSeparator} ${date}` : issuer || date;

      return `
<div class="item">
  <div class="item-title">${escapeHtml(c.title)}</div>
  ${issuerLine ? `<div class="tech-line">${issuerLine}</div>` : ""}
  ${bulletsHtml(c.description)}
  ${linksHtml(c.links)}
</div>`;
    })
    .join("\n");
}

export function experienceHtml(exps) {
  const arr = Array.isArray(exps) ? exps : [];
  return arr
    .map(
      (e) => `
<div class="item">
  <div class="item-header">
    <div>
      <div class="item-title">${escapeHtml(e.role)}</div>
      <div class="item-subtitle">${escapeHtml(e.company)}</div>
    </div>
    <div class="item-date">${escapeHtml(e.date)}</div>
  </div>
  ${bulletsHtml(e.bullets)}
</div>`,
    )
    .join("\n");
}

export function educationHtml(eds) {
  const arr = Array.isArray(eds) ? eds : [];
  return arr
    .map(
      (e) => `
<div class="item">
  <div class="item-header">
    <div>
      <div class="item-title">${escapeHtml(e.title)}</div>
      <div class="item-subtitle">${escapeHtml(e.subtitle)}</div>
    </div>
    <div class="item-date">${escapeHtml(e.date)}</div>
  </div>
</div>`,
    )
    .join("\n");
}

export function languagesHtml(langs) {
  const arr = Array.isArray(langs) ? langs : [];
  return arr
    .map(
      (l) => `
<div class="item">
  <div class="item-header">
    <div class="item-title">${escapeHtml(l.name)} — ${escapeHtml(l.level)}</div>
    <div class="item-date">${escapeHtml(l.note)}</div>
  </div>
</div>`,
    )
    .join("\n");
}
