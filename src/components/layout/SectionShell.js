import React from "react";
import { renderEmphasis } from "../../utils/emphasis";
import "./Section.css";

const SectionShell = ({ id, title, subtitle, subtitleClassName = "", children }) => {
  const subtitleClasses = ["section-subtitle", subtitleClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className="section">
      <div className="section-container">
        <header className="section-header" data-reveal="">
          <h2 className="section-title">{title}</h2>
          {subtitle ? (
            <p className={subtitleClasses}>{renderEmphasis(subtitle)}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
};

export default SectionShell;
