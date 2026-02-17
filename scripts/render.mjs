import fs from "fs";
import path from "path";
import { getLabels, normalizeLocale } from "./lib/i18n.mjs";
import { escapeHtml } from "./lib/html.mjs";
import {
  skillsHtml,
  experienceHtml,
  educationHtml,
  certificatesHtml,
  languagesHtml,
} from "./lib/sections.mjs";
import { getPaths } from "./lib/paths.mjs";

const root = process.cwd();

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

const locale = normalizeLocale(getArg("--locale") ?? process.env.LOCALE ?? "en-US");
const labels = getLabels(locale);

const { templatePath, cssPath, dataPath, distDir } = getPaths(root, locale);

fs.mkdirSync(distDir, { recursive: true });

const tpl = fs.readFileSync(templatePath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const html = tpl
  .replace(`<link rel="stylesheet" href="./style.css" />`, `<style>${css}</style>`)
  .replaceAll("{{NAME}}", escapeHtml(data.name))
  .replaceAll("{{TITLE}}", escapeHtml(data.title))
  .replaceAll("{{EMAIL}}", escapeHtml(data.email))
  .replaceAll("{{PHONE_E164}}", escapeHtml(data.phone_e164))
  .replaceAll("{{PHONE_DISPLAY}}", escapeHtml(data.phone_display))
  .replaceAll("{{LOCATION}}", escapeHtml(data.location))
  .replaceAll("{{LINKEDIN_URL}}", data.linkedin_url ?? "")
  .replaceAll("{{GITHUB_URL}}", data.github_url ?? "")
  .replaceAll("{{WEBSITE_URL}}", data.website_url ?? "")
  .replaceAll("{{LINKEDIN_TEXT}}", "linkedin.com/in/victorzarzar")
  .replaceAll("{{GITHUB_TEXT}}", "github.com/victorzarzar")
  .replaceAll("{{WEBSITE_TEXT}}", "www.victorzarzar.com.br")
  .replaceAll("{{SECTION_SUMMARY}}", labels.summary)
  .replaceAll("{{SECTION_SKILLS}}", labels.skills)
  .replaceAll("{{SECTION_EXPERIENCE}}", labels.experience)
  .replaceAll("{{SECTION_EDUCATION}}", labels.education)
  .replaceAll("{{SECTION_CERTIFICATES}}", labels.certificates)
  .replaceAll("{{SECTION_LANGUAGES}}", labels.languages)
  .replaceAll("{{SUMMARY}}", escapeHtml(data.summary))
  .replaceAll("{{SKILLS_HTML}}", skillsHtml(data.skills))
  .replaceAll("{{EXPERIENCE_HTML}}", experienceHtml(data.experience))
  .replaceAll("{{EDUCATION_HTML}}", educationHtml(data.education))
  .replaceAll("{{CERTIFICATES_HTML}}", certificatesHtml(data.certificates, labels))
  .replaceAll("{{LANGUAGES_HTML}}", languagesHtml(data.languages));

const out = path.join(distDir, `cv.${locale}.html`);
fs.writeFileSync(out, html, "utf8");
console.log(`Generated: ${out}`);
