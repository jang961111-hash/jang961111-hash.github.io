export const updateMetaTag = (selector, content) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};
