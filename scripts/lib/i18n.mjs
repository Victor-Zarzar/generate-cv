export const LOCALES = ["pt-BR", "en-US"];

export function normalizeLocale(input) {
  const raw = String(input ?? "").trim();
  if (!raw) return "en-US";
  if (raw === "pt" || raw === "pt-br" || raw === "pt-BR") return "pt-BR";
  if (raw === "en" || raw === "en-us" || raw === "en-US") return "en-US";
  return "en-US";
}

export function getLabels(locale) {
  const lc = normalizeLocale(locale);

  const common = {
    links: "Links",
    stackLabel: "Stack",
  };

  if (lc === "pt-BR") {
    return {
      ...common,
      summary: "Resumo",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação",
      certificates: "Certificados",
      languages: "Idiomas",
      issuerDateSeparator: "—",
    };
  }

  return {
    ...common,
    summary: "Summary",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    certificates: "Certificates",
    languages: "Languages",
    issuerDateSeparator: "—",
  };
}
