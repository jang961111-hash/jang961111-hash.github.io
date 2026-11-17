import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { getSectionIndex } from "../../config/sections";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    "skalaTraining",
    "ssafyTraining",
    "projectPractice",
    "philosophy",
    "globalLeadership",
    "militaryCommunication",
    "customerExperience",
    "salesField",
  ];

  return (
    <SectionShell id="experience" index={getSectionIndex("experience")} title={t("experience.title")}>
      <div className="timeline">
        {experiences.map((jobKey) => {
          const descriptions = t(`experience.jobs.${jobKey}.desc`, {
            returnObjects: true,
          });
          const descList = Array.isArray(descriptions) ? descriptions : [];

          return (
            <div className="timeline-item" key={jobKey}>
              <div className="timeline-marker"></div>
              <div className="timeline-content structural-card">
                <h3 className="role">{t(`experience.jobs.${jobKey}.title`)}</h3>
                <h4 className="company">{t(`experience.jobs.${jobKey}.company`)}</h4>
                <span className="date">{t(`experience.jobs.${jobKey}.period`)}</span>
                <ul className="task-list">
                  {descList.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default Experience;
