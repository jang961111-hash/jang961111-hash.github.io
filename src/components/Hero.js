import React from "react";
import { useTranslation } from "react-i18next";
import profilePhoto from "../assets/images/id-photo.webp";
import profilePhotoJpg from "../assets/images/id-photo.jpg";
import resumeKo from "../assets/docs/resume_ko.pdf";
import resumeEn from "../assets/docs/resume_en.pdf";
import "./Hero.css";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const proofKeys = ["product", "ai", "execution"];
  const strengthKeys = ["platform", "decision", "tech", "ai"];
  const portraitAlt =
    i18n.language === "ko"
      ? `${t("hero.name")} 프로필 사진`
      : `Profile photo of ${t("hero.name")}`;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-overline mono">{t("hero.portfolioLabel")}</p>

          <div className="hero-heading">
            <p className="hero-greeting">{t("hero.greeting")}</p>
            <h1 className="hero-title">{t("hero.name")}</h1>
          </div>

          <h2 className="hero-subtitle">{t("hero.subtitle")}</h2>
          <p className="hero-description">{t("hero.mission")}</p>

          <div className="hero-proof-list">
            {proofKeys.map((key, index) => (
              <div key={key} className="hero-proof-item">
                <span className="hero-proof-index mono">{`0${index + 1}`}</span>
                <p>{t(`hero.proofItems.${key}`)}</p>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">
              {t("hero.viewProjects")}
            </a>
            <a href="#contact" className="cta-button secondary">
              {t("hero.getInTouch")}
            </a>
            <a
              href={i18n.language === "ko" ? resumeKo : resumeEn}
              className="cta-button ghost"
              target="_blank"
              rel="noopener noreferrer"
              download={
                i18n.language === "ko"
                  ? "Jang-Byeong-Heon_TPM_Resume_KO.pdf"
                  : "Jang-Byeong-Heon_TPM_Resume_EN.pdf"
              }
              aria-label={t("hero.downloadResumeAria")}
            >
              {t("hero.downloadResume")}
            </a>
          </div>
        </div>

        <aside className="hero-showcase structural-card">
          <div className="hero-portrait-shell">
            <div className="hero-portrait-frame">
              <picture>
                <source srcSet={profilePhoto} type="image/webp" />
                <source srcSet={profilePhotoJpg} type="image/jpeg" />
                <img
                  className="hero-portrait"
                  src={profilePhotoJpg}
                  alt={portraitAlt}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>

          <div className="hero-showcase-copy">
            <p className="hero-showcase-label">{t("hero.focusLabel")}</p>
            <div className="hero-strength-list">
              {strengthKeys.map((key) => (
                <span key={key} className="hero-strength-chip">
                  {t(`identity.skills.${key}`)}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
