import React from "react";
import { useTranslation } from "react-i18next";
import profilePhoto from "../../assets/images/id-photo.webp";
import profilePhotoJpg from "../../assets/images/id-photo.jpg";
import { getResumeAsset } from "../../utils/resumeAssets";
import { renderEmphasis } from "../../utils/emphasis";
import "./Hero.css";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const resume = getResumeAsset(i18n.language);
  const evidence = t("hero.evidence", { returnObjects: true });
  const evidenceItems = Array.isArray(evidence) ? evidence : [];
  const portraitAlt =
    i18n.language === "ko"
      ? `${t("hero.name")} 프로필 사진`
      : `Profile photo of ${t("hero.name")}`;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-identity">
          <picture className="hero-portrait-frame">
            <source srcSet={profilePhoto} type="image/webp" />
            <source srcSet={profilePhotoJpg} type="image/jpeg" />
            <img
              className="hero-portrait"
              src={profilePhotoJpg}
              alt={portraitAlt}
              width="96"
              height="96"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <p className="hero-role">{t("hero.title")}</p>
        </div>

        <h1 className="hero-title">{t("hero.name")}</h1>
        <p className="hero-subtitle">{renderEmphasis(t("hero.subtitle"))}</p>

        {evidenceItems.length > 0 && (
          <ul className="hero-evidence" aria-label={t("hero.evidenceLabel")}>
            {evidenceItems.map((item) => (
              <li key={item} className="hero-evidence-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="hero-cta">
          <a href="#projects" className="cta-button primary">
            {t("hero.viewProjects")}
          </a>
          <a
            href={resume.href}
            className="cta-button ghost"
            target="_blank"
            rel="noopener noreferrer"
            download={resume.downloadName}
            aria-label={t("hero.downloadResumeAria")}
          >
            {t("hero.downloadResume")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
