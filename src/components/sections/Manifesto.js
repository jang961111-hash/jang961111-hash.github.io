import React from "react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../layout/SectionShell";
import { revealRef } from "../../hooks/useReveal";
import { renderLines } from "../../utils/emphasis";
import "../layout/Section.css";

// One oversized statement in a thin-bordered cell, right after the hero.
const Manifesto = () => {
  const { t } = useTranslation();

  return (
    <section id="manifesto" className="section manifesto">
      <div className="wrap">
        <SectionLabel id="manifesto" />
        <div className="frame manifesto-box" data-reveal ref={revealRef}>
          <p className="manifesto-text">{renderLines(t("hero.mission"))}</p>
        </div>
        <div className="manifesto-hatch hatch" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Manifesto;
