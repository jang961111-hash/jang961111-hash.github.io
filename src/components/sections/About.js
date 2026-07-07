import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";

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
        <aside className="about-glance" aria-label={t("identity.glance.title")}>
          <p className="about-glance-title mono">{t("identity.glance.title")}</p>
          <dl className="about-glance-list">
            <div className="about-glance-row">
              <dt>{t("identity.glance.projects")}</dt>
              <dd>11</dd>
            </div>
            <div className="about-glance-row">
              <dt>
                {t("identity.glance.awards")}
                <span className="about-glance-note">
                  {t("identity.glance.awardsNote")}
                </span>
              </dt>
              <dd>3</dd>
            </div>
            <div className="about-glance-row">
              <dt>{t("identity.glance.hackathons")}</dt>
              <dd>7</dd>
            </div>
            <div className="about-glance-row">
              <dt>{t("identity.glance.training")}</dt>
              <dd className="about-glance-text">
                {t("identity.glance.trainingValue")}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </SectionShell>
  );
};

export default About;
