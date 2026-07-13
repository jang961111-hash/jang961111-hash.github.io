import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';
import { getResumeAsset } from '../../utils/resumeAssets';
import './Contact.css';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { elementRef, isVisible } = useScrollReveal();
  const resume = getResumeAsset(i18n.language);
  const profileLinks = [
    {
      label: t('contact.github'),
      href: 'https://github.com/jang961111-hash',
    },
    {
      label: t('contact.linkedin'),
      href: 'https://www.linkedin.com/in/byeongheon-jang-ai-pm/',
    },
    {
      label: t('contact.email'),
      href: 'mailto:jang961111@gmail.com',
    },
    {
      label: t('contact.resume'),
      href: resume.href,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div 
        ref={elementRef} 
        className={`contact-container reveal-base ${isVisible ? 'reveal-visible' : ''}`}
      >
        <p className="contact-overline"><span className="text-highlight">06.</span> {t('contact.subtitle')}</p>
        <h2 className="contact-title">{t('contact.title')}</h2>
        <p className="contact-description">
          {t('contact.description')}
        </p>
        <div className="contact-buttons">
          <a href="mailto:jang961111@gmail.com" className="cta-button primary">{t('contact.button')}</a>
        </div>
      </div>
      
      <footer className="footer-content">
        <div className="social-links">
          {profileLinks.map((link) => {
            const isEmail = link.href.startsWith('mailto:');
            const isExternal = !isEmail;

            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <p className="copyright">
          {t('contact.footerBuilt')} <br />
          {t('contact.footerDesigned')}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
