import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";

const TechnicalDepth = () => {
  const { t } = useTranslation();
  const depthKeys = ["state", "realtime"];

  return (
    <SectionShell
      id="depth"
      index="04"
      title={t("depth.title")}
      subtitle={t("depth.subtitle")}
      subtitleClassName="mono text-muted"
    >
      <div className="structural-grid">
        {depthKeys.map((key) => (
          <div key={key} className="structural-card">
            <h3 className="card-title">{t(`depth.items.${key}.title`)}</h3>
            <p className="card-text">{t(`depth.items.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default TechnicalDepth;
