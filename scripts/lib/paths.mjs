import path from "path";
import fs from "fs";

export function getPaths(root, locale) {
  const templatePath = path.join(root, "templates", "index.html");
  const cssPath = path.join(root, "templates", "style.css");
  const distDir = path.join(root, "dist");

  const candidates = [
    path.join(root, "data", `resume.${locale}.json`),
    path.join(root, "data", "resume.example.json"),
  ];

  const dataPath = candidates.find((p) => fs.existsSync(p));
  if (!dataPath) {
    throw new Error(`No resume json found. Tried: ${candidates.join(", ")}`);
  }

  return { templatePath, cssPath, dataPath, distDir };
}
