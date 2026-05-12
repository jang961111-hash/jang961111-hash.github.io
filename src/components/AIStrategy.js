import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "./SectionShell";

const AIStrategy = () => {
  const { t } = useTranslation();
  const aiKeys = ["responsibility", "integration"];

  return (
    <SectionShell
      id="ai"
      index="05"
      title={t("ai.title")}
      subtitle={t("ai.subtitle")}
      subtitleClassName="mono text-muted"
    >
      <div className="structural-grid">
        {aiKeys.map((key) => (
          <div key={key} className="structural-card">
            <h3 className="card-title">{t(`ai.items.${key}.title`)}</h3>
            <p className="card-text">{t(`ai.items.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default AIStrategy;
