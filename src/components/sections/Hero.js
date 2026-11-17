import React from "react";
import { useTranslation } from "react-i18next";
import HeroStage from "../hero/HeroStage";
import { getResumeAsset } from "../../utils/resumeAssets";
import { scrollToSectionId } from "../../utils/scrollTarget";
import { renderLines } from "../../utils/emphasis";
import "./Hero.css";

const Hero = ({ theme }) => {
  const { t, i18n } = useTranslation();
  const resume = getResumeAsset(i18n.language);
  const evidence = t("hero.evidence", { returnObjects: true });
  const evidenceList = Array.isArray(evidence) ? evidence : [];

  const jumpTo = (event, id) => {
    event.preventDefault();
    scrollToSectionId(id);
  };

  return (
    <section id="hero" className="hero">
      <HeroStage theme={theme} />
      <div className="hero-shade" aria-hidden="true" />

      <div className="wrap hero-meta mono" aria-hidden="true">
        <span>{t("hero.portfolioLabel")}</span>
        <span className="hero-meta-scroll">{t("navExtra.scroll")} ↓</span>
      </div>

      <div className="wrap hero-inner">
        <div className="hero-main">
          <p className="label-box hero-role">
            <span className="label-dot" aria-hidden="true" />
            <span>{t("hero.title")}</span>
          </p>
          <h1 className={`hero-name ${i18n.language === "en" ? "is-long" : ""}`}>
            {t("hero.name")}
          </h1>
          <p className="frame hero-subtitle">{renderLines(t("hero.subtitle"))}</p>
          <div className="hero-cta">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(event) => jumpTo(event, "projects")}
            >
              {t("hero.viewProjects")} <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="btn"
              onClick={(event) => jumpTo(event, "contact")}
            >
              {t("hero.getInTouch")}
            </a>
            <a
              href={resume.href}
              className="btn mono hero-pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={resume.downloadName}
              aria-label={t("hero.downloadResumeAria")}
            >
              {t("hero.downloadResume")}
            </a>
          </div>
        </div>

        {evidenceList.length > 0 && (
          <aside className="frame hero-evidence">
            <p className="kicker">{t("hero.evidenceLabel")}</p>
            <ol>
              {evidenceList.map((item, index) => (
                <li key={item}>
                  <span className="mono hero-evidence-index">{`0${index + 1}`}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        )}
      </div>
    </section>
  );
};

export default Hero;
