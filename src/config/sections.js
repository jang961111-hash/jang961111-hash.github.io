// Single source of truth for home section order, numbering, and nav items.
// Reordering this array updates the rendered order, the "01."-style
// section numbers, and the navbar together.
// Sections marked `nav: false` are numbered and rendered but stay out of the navbar.
// Exception: "contact" is rendered by AppLayout after the page content,
// so it must stay last in this array.
export const homeSections = [
  { id: "about", labelKey: "nav.identity" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "stack", labelKey: "nav.stack", nav: false },
  { id: "ai-cases", labelKey: "nav.aiCases" },
  { id: "competencies", labelKey: "nav.competencies" },
  { id: "experience", labelKey: "nav.experience" },
  { id: "contact", labelKey: "nav.contact" },
];

export const getSectionIndex = (id) => {
  const position = homeSections.findIndex((section) => section.id === id);

  return position === -1 ? "" : String(position + 1).padStart(2, "0");
};
