import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "./SectionShell";

const About = () => {
  const { t } = useTranslation();

  return (
    <SectionShell id="about" index="01" title={t("identity.title")}>
      <div className="about-content">
        <div className="about-text">
          <p>{t("identity.text1")}</p>
          <p>{t("identity.text2")}</p>
          <p>{t("identity.text3")}</p>
          <div className="skill-group">
            <p className="skills-subtitle">{t("identity.skills_title")}</p>
            <ul className="skills-list">
              <li>{t("identity.skills.platform")}</li>
              <li>{t("identity.skills.decision")}</li>
              <li>{t("identity.skills.tech")}</li>
              <li>{t("identity.skills.ai")}</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default About;
