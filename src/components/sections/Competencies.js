import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionShell from '../layout/SectionShell';
import './Competencies.css';

const competencyGroups = [
  {
    key: 'productPlanning',
    icon: '01',
    items: ['problemFraming', 'userFlow', 'serviceStructure', 'marketAnalysis'],
  },
  {
    key: 'aiData',
    icon: '02',
    items: ['llmPrompting', 'pythonSql', 'dataDecision', 'aiPlanning'],
  },
  {
    key: 'webCollaboration',
    icon: '03',
    items: ['reactLiteracy', 'gitWorkflow', 'collaborationTools', 'documentation'],
  },
  {
    key: 'communicationLeadership',
    icon: '04',
    items: ['presentation', 'teamAlignment', 'userPerspective', 'feedbackLoop'],
  },
];

const Competencies = () => {
  const { t } = useTranslation();
  
  return (
    <SectionShell id="competencies" index="03" title={t('competencies.title')}>
      <p className="competencies-subtitle">{t('competencies.subtitle')}</p>
      
      <div className="competencies-grid">
        {competencyGroups.map((group) => (
          <div className="competency-card structural-card" key={group.key}>
            <div className="competency-card-header">
              <span className="competency-icon mono">{group.icon}</span>
              <h3 className="competency-title mono">
                {t(`competencies.groups.${group.key}.title`)}
              </h3>
            </div>
            <p className="competency-desc">
              {t(`competencies.groups.${group.key}.subtitle`)}
            </p>
            <ul className="competency-list">
              {group.items.map((itemKey) => (
                <li key={itemKey}>
                  <span className="competency-keyword">
                    {t(`competencies.groups.${group.key}.items.${itemKey}.title`)}
                  </span>
                  <span className="competency-text">
                    {t(`competencies.groups.${group.key}.items.${itemKey}.desc`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Competencies;
