import React from "react";
import { useTranslation } from "react-i18next";
import { getResumeAsset } from "../../utils/resumeAssets";
import { SectionLabel } from "./SectionShell";
import { revealRef } from "../../hooks/useReveal";
import "./Contact.css";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const resume = getResumeAsset(i18n.language);
  const profileLinks = [
    {
      label: t("contact.email"),
      detail: "jang961111@gmail.com",
      href: "mailto:jang961111@gmail.com",
    },
    {
      label: t("contact.github"),
      detail: "github.com/jang961111-hash",
      href: "https://github.com/jang961111-hash",
    },
    {
      label: t("contact.linkedin"),
      detail: "linkedin.com/in/byeongheon-jang-ai-pm",
      href: "https://www.linkedin.com/in/byeongheon-jang-ai-pm/",
    },
    {
      label: t("contact.resume"),
      detail: resume.downloadName,
      href: resume.href,
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="wrap">
        <SectionLabel id="contact" />

        <div className="frame contact-statement" data-reveal ref={revealRef}>
          <p className="kicker">{t("contact.subtitle")}</p>
          <h2 className="display contact-title">{t("contact.title")}</h2>
          <p className="contact-description">{t("contact.description")}</p>
        </div>

        <ul className="contact-links">
          {profileLinks.map((link) => {
            const isExternal = !link.href.startsWith("mailto:");

            return (
              <li key={link.href} data-reveal ref={revealRef}>
                <a
                  className="contact-link"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-link-detail mono">{link.detail}</span>
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-arrow arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <footer className="site-footer">
          <div className="footer-hatch hatch" aria-hidden="true" />
          <div className="footer-row mono">
            <span>{`© 2026 ${t("hero.name")}`}</span>
            <span>{t("contact.footerBuilt")}</span>
            <span>{t("contact.footerDesigned")}</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
