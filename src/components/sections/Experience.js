import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { revealRef } from "../../hooks/useReveal";
import { renderLines } from "../../utils/emphasis";

// Work experience only. Education, military service and study abroad are in
// the training section (src/content/records.js).
const experiences = ["restaurantOps", "customerExperience", "salesField"];

// Table-like rows: period, role and organisation, first description line.
const Experience = () => {
  const { t } = useTranslation();

  return (
    <SectionShell id="experience" className="history">
      <ol className="history-list">
        {experiences.map((jobKey) => {
          const descriptions = t(`experience.jobs.${jobKey}.desc`, {
            returnObjects: true,
          });
          const firstLine = Array.isArray(descriptions) ? descriptions[0] : "";

          return (
            <li className="history-row" key={jobKey} data-reveal ref={revealRef}>
              <span className="history-period mono">
                {t(`experience.jobs.${jobKey}.period`)}
              </span>
              <div className="history-role">
                <h3>{t(`experience.jobs.${jobKey}.title`)}</h3>
                <p>{t(`experience.jobs.${jobKey}.company`)}</p>
              </div>
              {firstLine ? <p className="history-desc">{renderLines(firstLine)}</p> : null}
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
};

export default Experience;
