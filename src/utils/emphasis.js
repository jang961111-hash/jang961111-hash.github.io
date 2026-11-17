import React from "react";

// Copy strings may wrap one key phrase in **double asterisks**.
// renderEmphasis turns that into a highlighted <mark>; stripEmphasis removes
// the markers for places that need plain text (meta tags, alt text, keys).
const EMPHASIS_PATTERN = /\*\*(.+?)\*\*/g;

export const stripEmphasis = (text) =>
  typeof text === "string" ? text.replace(EMPHASIS_PATTERN, "$1") : text;

export const renderEmphasis = (text) => {
  if (typeof text !== "string" || !text.includes("**")) {
    return text;
  }

  return text.split(EMPHASIS_PATTERN).map((part, index) =>
    index % 2 === 1 ? (
      // eslint-disable-next-line react/no-array-index-key
      <mark className="em-mark" key={index}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};
