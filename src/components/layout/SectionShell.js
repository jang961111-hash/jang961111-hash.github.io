import React from "react";
import { useTranslation } from "react-i18next";
import { getSectionIndex, getSectionLabelKey } from "../../config/sections";
import { revealRef } from "../../hooks/useReveal";
import "./Section.css";

// Section frame: small bordered label cell, an optional oversized statement
// in a thin-bordered cell, an optional caption, then the section content.
export const SectionLabel = ({ id, label }) => {
  const { t } = useTranslation();

  return (
    <h2 className="label-box section-label">
      <span className="label-dot" aria-hidden="true" />
      <span className="label-index" aria-hidden="true">{getSectionIndex(id)}</span>
      <span>{label ?? t(getSectionLabelKey(id))}</span>
    </h2>
  );
};

const SectionShell = ({ id, label, statement, caption, className = "", children }) => (
  <section id={id} className={`section ${className}`.trim()}>
    <div className="wrap">
      <div className="section-head">
        <SectionLabel id={id} label={label} />
        {statement ? (
          <div className="frame section-statement" data-reveal ref={revealRef}>
            <p className="display">{statement}</p>
          </div>
        ) : null}
        {caption ? (
          <div className="frame section-caption" data-reveal ref={revealRef}>
            <p>{caption}</p>
          </div>
        ) : null}
      </div>
      {children}
    </div>
  </section>
);

export default SectionShell;
