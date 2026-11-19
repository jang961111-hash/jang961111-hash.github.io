import React from "react";
import { useTranslation } from "react-i18next";
import HeroStage from "../hero/HeroStage";
import BrandMark from "../layout/BrandMark";
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

  // "?blind" hides the portrait for blind-screening applications.
  const showPortrait =
    typeof window === "undefined" ||
    !new URLSearchParams(window.location.search).has("blind");

  return (
    <section id="hero" className="hero">
      <HeroStage theme={theme} />
      <div className="hero-shade" aria-hidden="true" />

      <div className="wrap hero-meta mono" aria-hidden="true">
        <span>{t("hero.portfolioLabel")}</span>
        <span className="hero-meta-scroll">{t("navExtra.scroll")} ↓</span>
      </div>

      <div className="wrap hero-inner">
        {/* Paper has no top bar, so the first page carries the monogram. */}
        <div className="hero-print-brand" aria-hidden="true">
          <BrandMark className="hero-print-mark" />
          <span className="hero-print-dot" />
        </div>
        <div className="hero-main">
          <div className={`hero-identity ${showPortrait ? "has-portrait" : ""}`}>
            {showPortrait && (
              <figure className="frame hero-portrait">
                <img
                  src="/profile/portrait.webp"
                  alt={t("hero.portraitAlt")}
                  width="900"
                  height="1080"
                  decoding="async"
                  fetchPriority="high"
                />
              </figure>
            )}
            <div className="hero-identity-text">
              <p className="label-box hero-role">
                <span className="label-dot" aria-hidden="true" />
                <span>{t("hero.title")}</span>
              </p>
              <h1 className={`hero-name ${i18n.language === "en" ? "is-long" : ""}`}>
                {t("hero.name")}
              </h1>
            </div>
          </div>
          <p className="frame hero-subtitle">{renderLines(t("hero.subtitle"))}</p>
          {/* School and training names are left out of blind-screening pages. */}
          {showPortrait && (
            <p className="mono hero-background">{t("hero.background")}</p>
          )}
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
