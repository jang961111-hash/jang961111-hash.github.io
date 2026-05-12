import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionShell from '../layout/SectionShell';
import './Competencies.css';

const Competencies = () => {
  const { t } = useTranslation();
  
  const strategyItems = ['platform', 'alignment'];
  const depthItems = ['state', 'realtime'];
  const aiItems = ['responsibility', 'integration'];
  const frameworkSteps = [1, 2, 3, 4, 5];

  return (
    <SectionShell id="competencies" index="03" title={t('competencies.title')}>
      <p className="competencies-subtitle">{t('competencies.subtitle')}</p>
      
      <div className="competencies-grid">
        <div className="competency-card structural-card">
          <h3 className="competency-title mono">{t('strategy.title')}</h3>
          <ul className="competency-list">
            {strategyItems.map(key => (
              <li key={key}>
                <strong>{t(`strategy.items.${key}.title`)}</strong>: {t(`strategy.items.${key}.desc`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="competency-card structural-card">
          <h3 className="competency-title mono">{t('depth.title')}</h3>
          <p className="competency-desc">{t('depth.subtitle')}</p>
          <ul className="competency-list">
            {depthItems.map(key => (
              <li key={key}>
                <strong>{t(`depth.items.${key}.title`)}</strong>: {t(`depth.items.${key}.desc`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="competency-card structural-card">
          <h3 className="competency-title mono">{t('ai.title')}</h3>
          <p className="competency-desc">{t('ai.subtitle')}</p>
          <ul className="competency-list">
            {aiItems.map(key => (
              <li key={key}>
                <strong>{t(`ai.items.${key}.title`)}</strong>: {t(`ai.items.${key}.desc`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="competency-card structural-card">
          <h3 className="competency-title mono">{t('framework.title')}</h3>
          <p className="competency-desc">{t('framework.subtitle')}</p>
          <div className="framework-steps">
            {frameworkSteps.map(step => (
              <div key={step} className="framework-step-item">
                <span className="step-number mono">{step}</span>
                <p><strong>{t(`framework.steps.${step}.name`)}</strong>: {t(`framework.steps.${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Competencies;
