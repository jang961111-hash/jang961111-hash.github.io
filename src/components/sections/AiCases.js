import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { projectUiCopy } from "../../content/projects";
import { getProjectPath } from "../../utils/localeRouting";

const cases = [
  { key: "questionFlow", slug: "dailylog" },
  { key: "recommendation", slug: "dailylog" },
  { key: "nlCommand", slug: "supporty" },
  { key: "promptProduct", slug: "ssafy-startup-track" },
  { key: "agentPartner", slug: "genwing-live" },
];

const AiCases = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "ko";
  const copy = projectUiCopy[lang];

  return (
    <SectionShell
      id="ai-cases"
      index="03"
      title={t("aiCases.title")}
      subtitle={t("aiCases.subtitle")}
    >
      <div className="project-archive-grid">
        {cases.map(({ key, slug }) => (
          <article key={key} className="project-archive-card structural-card">
            <p className="project-card-category">
              {t(`aiCases.items.${key}.project`)}
            </p>
            <h3 className="project-card-title">
              {t(`aiCases.items.${key}.title`)}
            </h3>

            <div className="project-core-block">
              <span className="detail-label">{t("aiCases.labels.problem")}</span>
              <p>{t(`aiCases.items.${key}.problem`)}</p>
            </div>

            <div className="project-core-block">
              <span className="detail-label">{t("aiCases.labels.approach")}</span>
              <p>{t(`aiCases.items.${key}.approach`)}</p>
            </div>

            <div className="project-core-block">
              <span className="detail-label">{t("aiCases.labels.result")}</span>
              <p>{t(`aiCases.items.${key}.result`)}</p>
            </div>

            <Link to={getProjectPath(lang, slug)} className="project-inline-link">
              {copy.viewDetails}
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
};

export default AiCases;
