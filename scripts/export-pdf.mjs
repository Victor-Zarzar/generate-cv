import fs from "fs";
import path from "path";
import { chromium } from "playwright";

function getArg(name) {
  const idx = process.argv.indexOf(name);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

function normalizeLocale(input) {
  const raw = String(input ?? "").trim();
  if (!raw) return "en-US";
  if (raw === "pt" || raw === "pt-br" || raw === "pt-BR") return "pt-BR";
  if (raw === "en" || raw === "en-us" || raw === "en-US") return "en-US";
  return "en-US";
}

const root = process.cwd();
const distDir = path.join(root, "dist");

const locale = normalizeLocale(getArg("--locale") ?? process.env.LOCALE ?? "en-US");

const htmlPath = path.join(distDir, `cv.${locale}.html`);
const pdfPath = path.join(distDir, `cv.${locale}.pdf`);

if (!fs.existsSync(htmlPath)) {
  console.error(`${htmlPath} It doesn't exist. Run: bun scripts/render.mjs --locale ${locale}`);
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });

await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: "14mm", right: "14mm", bottom: "14mm", left: "14mm" },
});

await browser.close();

console.log(`Generated: ${pdfPath}`);
