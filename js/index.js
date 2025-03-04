"use strict";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const init = () => {
  const createElement = (tagName, className, content) => {
    const element = document.createElement(tagName);

    if (className) {
      element.setAttribute("class", className);
    }

    if (content) {
      element.innerHTML = content;
    }

    return element;
  };

  const questionsBox = document.querySelectorAll(".questions__box");
  const questionsItem = document.querySelectorAll(".questions__item");
  const questionsBoxIcon = document.querySelectorAll(".questions__box-icon");
  const questionsContent = document.querySelectorAll(".questions__content");

  const hideElements = () => {
    for (let i = 0; i < questionsItem.length; i++) {
      questionsItem[i].classList.remove("questions__item--reset");
    }

    for (let i = 0; i < questionsBoxIcon.length; i++) {
      questionsBoxIcon[i].classList.remove("questions__box-icon--rotate");
    }

    for (let i = 0; i < questionsContent.length; i++) {
      questionsContent[i].classList.remove("questions__content--open");
    }
  };

  const showElements = (index) => {
    questionsItem[index].classList.add("questions__item--reset");

    questionsBoxIcon[index].classList.add("questions__box-icon--rotate");

    questionsContent[index].classList.add("questions__content--open");
  };

  hideElements();
  showElements(0);

  for (let i = 0; i < questionsBox.length; i++) {
    const openContent = (e) => {
      hideElements();
      showElements(i);
    };

    questionsBox[i].addEventListener("click", openContent);
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
  });

  swiper();
};

window.addEventListener("DOMContentLoaded", init);
