import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";

const ProblemSolving = () => {
  const { t } = useTranslation();
  const frameworkKeys = ["1", "2", "3", "4", "5"];

  return (
    <SectionShell
      id="framework"
      index="06"
      title={t("framework.title")}
      subtitle={t("framework.subtitle")}
      subtitleClassName="mono text-muted section-subtitle-spacious"
    >
      <div className="timeline">
        {frameworkKeys.map((key) => (
          <div key={key} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content structural-card">
              <h3 className="role">{t(`framework.steps.${key}.name`)}</h3>
              <p className="description">{t(`framework.steps.${key}.desc`)}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default ProblemSolving;
