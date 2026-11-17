import React from "react";
import { useTranslation } from "react-i18next";
import { getResumeAsset } from "../../utils/resumeAssets";
import "./Contact.css";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const resume = getResumeAsset(i18n.language);
  const profileLinks = [
    { label: t("contact.email"), href: "mailto:jang961111@gmail.com" },
    { label: t("contact.github"), href: "https://github.com/jang961111-hash" },
    {
      label: t("contact.linkedin"),
      href: "https://www.linkedin.com/in/byeongheon-jang-ai-pm/",
    },
    { label: t("contact.resume"), href: resume.href },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" data-reveal="">
        <p className="contact-overline">{t("nav.contact")}</p>
        <h2 className="contact-title">{t("contact.title")}</h2>
        <p className="contact-description">{t("contact.description")}</p>
        <ul className="contact-links">
          {profileLinks.map((link, index) => {
            const isExternal = !link.href.startsWith("mailto:");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`cta-button ${index === 0 ? "primary" : "ghost"}`}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="footer-content">
        <p className="copyright">
          {t("contact.footerBuilt")} {t("contact.footerDesigned")}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
