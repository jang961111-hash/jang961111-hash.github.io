import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";

const caseKeys = ["questionFlow", "recommendation", "promptProduct", "agentPartner"];

const AiCases = () => {
  const { t } = useTranslation();

  return (
    <SectionShell
      id="ai-cases"
      index="03"
      title={t("aiCases.title")}
      subtitle={t("aiCases.subtitle")}
    >
      <div className="project-archive-grid">
        {caseKeys.map((key) => (
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
          </article>
        ))}
      </div>
    </SectionShell>
  );
};

export default AiCases;
