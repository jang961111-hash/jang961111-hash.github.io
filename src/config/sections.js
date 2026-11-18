// Single source of truth for home section order, numbering, and nav items.
// Reordering this array updates the rendered order, the "02"-style
// section numbers, the navbar tabs, and the terminal line together.
// Sections marked `nav: false` are numbered and rendered but stay out of the navbar.
// `navKey` gives a tab a shorter name than the section label.
// Exception: "contact" is rendered by AppLayout after the page content,
// so it must stay last in this array.
export const homeSections = [
  { id: "manifesto", labelKey: "hero.focusLabel", nav: false },
  { id: "projects", labelKey: "nav.projects" },
  { id: "principles", labelKey: "records.principles", navKey: "nav.principles" },
  { id: "labs", labelKey: "records.labs", nav: false },
  { id: "stack", labelKey: "nav.stack" },
  { id: "awards", labelKey: "records.awards", navKey: "nav.awardsTab" },
  { id: "training", labelKey: "records.training", nav: false },
  { id: "experience", labelKey: "nav.history" },
  { id: "contact", labelKey: "nav.contact" },
];

export const getSectionIndex = (id) => {
  const position = homeSections.findIndex((section) => section.id === id);

  return position === -1 ? "" : String(position + 1).padStart(2, "0");
};

export const getSectionLabelKey = (id) =>
  homeSections.find((section) => section.id === id)?.labelKey ?? "";

// Tab that should read as "current" for a section: its own tab, or the
// nearest earlier tab when the section has none (e.g. labs -> principles).
export const getNavTabId = (id) => {
  const position = homeSections.findIndex((section) => section.id === id);

  for (let index = position; index >= 0; index -= 1) {
    if (homeSections[index].nav !== false) {
      return homeSections[index].id;
    }
  }

  return "";
};
