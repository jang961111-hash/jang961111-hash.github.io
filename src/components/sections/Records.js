import React from "react";
import { Link } from "react-router-dom";
import SectionShell from "../layout/SectionShell";
import { revealRef } from "../../hooks/useReveal";
import useLang from "../../hooks/useLang";
import { getProjectPath } from "../../utils/localeRouting";
import {
  competitions,
  credentials,
  labNotes,
  training,
} from "../../content/records";

const pick = (value, lang) =>
  value && typeof value === "object" ? value[lang] ?? value.ko : value;

// Short lab write-ups without a detail page: period, title, one line, stack.
export const LabNotes = () => {
  const lang = useLang();

  return (
    <SectionShell id="labs" className="history records">
      <ol className="history-list">
        {labNotes.map((lab) => (
          <li className="history-row" key={lab.id} data-reveal ref={revealRef}>
            <span className="history-period mono">{lab.period}</span>
            <div className="history-role">
              <h3>{pick(lab.title, lang)}</h3>
              <div className="chip-list record-chips">
                {lab.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="history-desc">{pick(lab.note, lang)}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
};

// Awards, selections, and participation in one dated list.
export const Competitions = () => {
  const lang = useLang();

  return (
    <SectionShell id="awards" className="history records">
      <ol className="history-list">
        {competitions.map((item) => {
          const name = pick(item.name, lang);

          return (
            <li
              className={`history-row${item.award ? " is-award" : ""}`}
              key={`${item.period}-${name}`}
              data-reveal
              ref={revealRef}
            >
              <span className="history-period mono">{item.period}</span>
              <div className="history-role">
                <h3>
                  {item.slug ? (
                    <Link to={getProjectPath(lang, item.slug)} className="record-link">
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </h3>
              </div>
              <p className="history-desc record-result">{pick(item.result, lang)}</p>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
};

// Training programmes with their key facts, then language and certificates.
export const Training = () => {
  const lang = useLang();

  return (
    <SectionShell id="training" className="history records">
      <ol className="history-list">
        {training.map((item) => (
          <li className="history-row" key={item.period} data-reveal ref={revealRef}>
            <span className="history-period mono">{item.period}</span>
            <div className="history-role">
              <h3>{pick(item.name, lang)}</h3>
            </div>
            <ul className="history-desc record-lines">
              {pick(item.lines, lang).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
        {credentials.map((item) => {
          const name = pick(item.name, lang);

          return (
            <li className="history-row" key={name} data-reveal ref={revealRef}>
              <span className="history-period mono">{item.date}</span>
              <div className="history-role">
                <h3>{name}</h3>
              </div>
              <p className="history-desc record-result">{pick(item.value, lang)}</p>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
};
