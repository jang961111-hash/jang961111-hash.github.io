import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { renderEmphasis } from "../../utils/emphasis";

const experienceKeys = [
  "skalaTraining",
  "ssafyTraining",
  "projectPractice",
  "philosophy",
  "globalLeadership",
  "militaryCommunication",
  "customerExperience",
  "salesField",
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <SectionShell id="experience" title={t("experience.compactTitle")}>
      <ul className="history-list" data-reveal="">
        {experienceKeys.map((jobKey) => {
          const descriptions = t(`experience.jobs.${jobKey}.desc`, {
            returnObjects: true,
          });
          const firstLine = Array.isArray(descriptions) ? descriptions[0] : null;

          return (
            <li className="history-row" key={jobKey}>
              <span className="history-period mono">
                {t(`experience.jobs.${jobKey}.period`)}
              </span>
              <div className="history-main">
                <p className="history-heading">
                  <span className="history-title">
                    {t(`experience.jobs.${jobKey}.title`)}
                  </span>
                  <span className="history-org">
                    {t(`experience.jobs.${jobKey}.company`)}
                  </span>
                </p>
                {firstLine && <p className="history-desc">{renderEmphasis(firstLine)}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
};

export default Experience;
