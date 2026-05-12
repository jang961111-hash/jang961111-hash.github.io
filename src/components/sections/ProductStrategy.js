import React from "react";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";

const ProductStrategy = () => {
  const { t } = useTranslation();
  const strategyKeys = ["platform", "alignment"];

  return (
    <SectionShell id="strategy" index="03" title={t("strategy.title")}>
      <div className="structural-grid">
        {strategyKeys.map((key) => (
          <div key={key} className="structural-card">
            <h3 className="card-title">{t(`strategy.items.${key}.title`)}</h3>
            <p className="card-text">{t(`strategy.items.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default ProductStrategy;
