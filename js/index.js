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

  const testimonials = [
    {
      id: 1,
      title: "Abdulloh M.",
      text: `
        Avval ko‘p joylarda arab tili o‘rganganman, lekin bu
        markazning uslubi juda zo‘r! Juda qisqa vaqt ichida CEFR
        imtihoniga tayyor bo‘ldim va natijam ham juda yaxshi bo‘ldi.
        Eng yaxshi o‘quv markazlaridan biri!
      `,
    },
    {
      id: 2,
      title: "Xadicha S.",
      text: `
        Men Shams o‘quv markazida 3 oy o‘qib, arab tilida gapirishni
        o‘rgandim. Darslar juda qiziqarli va samarali. Eng yaxshi
        tomoni – darslarni qayta ko‘rib chiqish imkoniyati borligi.
        Chunki bu bilan bilimni yanada mustaxkamlash mumkin!
      `,
    },
    {
      id: 3,
      title: "Hasanbek T.",
      text: `
        Oldin arab tilini tushunish menga juda qiyin tuyulardi, lekin
        Shams markazi darslari orqali qisqa vaqt ichida so‘z boyligim
        oshdi va grammatikani tushuna boshladim. Endi ishonch bilan
        gapira olaman!
      `,
    },
    {
      id: 4,
      title: "Zaynab A.",
      text: `
        O‘qitish jarayoni tushunarli va samarali. Qo‘shimcha
        materiallar beriladi va bu darslarni yanada foydali qiladi,
        shuning uchun har safar ulardan foydalanib bo’lgandan so’ng
        yangi darsni kutaman!
      `,
    },
    {
      id: 5,
      title: "Abdulloh M.",
      text: `
        Avval ko‘p joylarda arab tili o‘rganganman, lekin bu
        markazning uslubi juda zo‘r! Juda qisqa vaqt ichida CEFR
        imtihoniga tayyor bo‘ldim va natijam ham juda yaxshi bo‘ldi.
        Eng yaxshi o‘quv markazlaridan biri!
      `,
    },
    {
      id: 6,
      title: "Xadicha S.",
      text: `
        Men Shams o‘quv markazida 3 oy o‘qib, arab tilida gapirishni
        o‘rgandim. Darslar juda qiziqarli va samarali. Eng yaxshi
        tomoni – darslarni qayta ko‘rib chiqish imkoniyati borligi.
        Chunki bu bilan bilimni yanada mustaxkamlash mumkin!
      `,
    },
    {
      id: 7,
      title: "Hasanbek T.",
      text: `
        Oldin arab tilini tushunish menga juda qiyin tuyulardi, lekin
        Shams markazi darslari orqali qisqa vaqt ichida so‘z boyligim
        oshdi va grammatikani tushuna boshladim. Endi ishonch bilan
        gapira olaman!
      `,
    },
    {
      id: 8,
      title: "Zaynab A.",
      text: `
        O‘qitish jarayoni tushunarli va samarali. Qo‘shimcha
        materiallar beriladi va bu darslarni yanada foydali qiladi,
        shuning uchun har safar ulardan foydalanib bo’lgandan so’ng
        yangi darsni kutaman!
      `,
    },
  ];

  const questionsBox = document.querySelectorAll(".questions__box");
  const questionsItem = document.querySelectorAll(".questions__item");
  const testimonialsList = document.querySelector(".testimonials__list");
  const questionsContent = document.querySelectorAll(".questions__content");
  const questionsBoxIcon = document.querySelectorAll(".questions__box-icon");

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

  for (let i = 0; i < testimonials.length; i++) {
    const element = createElement(
      "li",
      "testimonials__item swiper-slide",
      `
       <h2 class="testimonials__item-title">${testimonials[i].title}</h2>
          <p class="testimonials__item-text">
            <q>${testimonials[i].text}</q>
          </p>
      `
    );

    testimonialsList.append(element);
  }

  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
  });
};

window.addEventListener("DOMContentLoaded", init);
