// Single source of truth for home section order and nav items.
// Reordering this array updates the rendered order and the navbar together.
// Items without a labelKey render on the page but stay out of the navbar.
// Exception: "contact" is rendered by AppLayout after the page content,
// so it must stay last in this array.
export const homeSections = [
  { id: "projects", labelKey: "nav.projects" },
  { id: "stack", labelKey: "nav.stack" },
  { id: "more-projects" },
  { id: "experience", labelKey: "nav.history" },
  { id: "contact", labelKey: "nav.contact" },
];

export const navSections = homeSections.filter(({ labelKey }) => Boolean(labelKey));

export const getSectionIndex = (id) => {
  const position = homeSections.findIndex((section) => section.id === id);

  return position === -1 ? "" : String(position + 1).padStart(2, "0");
};
