export const $ = (selector) => document.querySelector(selector);
export const $$ = (selectors) => document.querySelectorAll(selectors);

export const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);

  if (className) {
    element.setAttribute("class", className);
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
};
