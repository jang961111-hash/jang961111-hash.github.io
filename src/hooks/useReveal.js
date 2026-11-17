// One IntersectionObserver for every [data-reveal] element on the page.
// Use as a callback ref: <div data-reveal ref={revealRef}>.
// When an element first enters the viewport (or is already above it) it gets
// a data-shown attribute and is no longer observed, so each cell plays once.
// The hidden starting state only exists under html.js (see index.css).
let sharedObserver = null;

const show = (element) => {
  element.setAttribute("data-shown", "");

  if (sharedObserver) {
    sharedObserver.unobserve(element);
  }
};

const getObserver = () => {
  if (sharedObserver || typeof IntersectionObserver === "undefined") {
    return sharedObserver;
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          show(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0 }
  );

  return sharedObserver;
};

export const revealRef = (element) => {
  if (!element) {
    return undefined;
  }

  const observer = getObserver();

  if (!observer) {
    show(element);
    return undefined;
  }

  observer.observe(element);

  return () => observer.unobserve(element);
};
