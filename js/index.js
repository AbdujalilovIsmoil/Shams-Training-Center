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

  const showToastify = ({ text, color }) => {
    Toastify({
      text,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: color,
      },
    }).showToast();
  };

  const language = "uz";

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

  const teacher = document.getElementById("teacher");
  const readStudent = document.getElementById("read");
  const middleStudent = document.getElementById("middle");
  const successStudent = document.getElementById("success");

  const intervalResult = (tag, count, second) => {
    let index = 0;
    const ineterval = setInterval(() => {
      index += second;
      tag.innerHTML = `+${index}`;

      if (index === count) {
        clearInterval(ineterval);
      }
    }, second);
  };

  intervalResult(readStudent, 1700, 10);
  intervalResult(successStudent, 70, 1);
  intervalResult(middleStudent, 1000, 10);
  intervalResult(teacher, 12, 1);

  const form = document.getElementById("contact__form");
  const userName = document.getElementById("user-name");
  let userNumber = document.getElementById("user-number");

  const onChangeNumberInput = (e) => {
    if (e.key === "e" && e.code === "KeyE") {
      e.preventDefault();
    }
  };

  userNumber.addEventListener("keydown", onChangeNumberInput);

  const sendFormData = async (e) => {
    e.preventDefault();

    console.log(userNumber.value.length);

    if (
      (userNumber.value.startsWith("998") ||
        userNumber.value.startsWith("+998")) &&
      userNumber.value.length === 12
    ) {
      showToastify({
        color: "#4CAF50",
        text: "Ma'lumotlar muvaffaqiyatli yuborildi.",
      });
    }
    if (
      (userNumber.value.startsWith("998") ||
        userNumber.value.startsWith("+998")) &&
      userNumber.value.length < 12
    ) {
      showToastify({
        color: "#f44336",
        text: "Telefon raqam xato kiritildi",
      });
    }
    if (
      (userNumber.value.startsWith("7") ||
        userNumber.value.startsWith("+7") ||
        userNumber.value.startsWith("8") ||
        userNumber.value.startsWith("+8")) &&
      userNumber.value.length === 11
    ) {
      showToastify({
        color: "#4CAF50",
        text: "Данные отправлены успешно.",
      });
    }
    if (
      (userNumber.value.startsWith("7") ||
        userNumber.value.startsWith("+7") ||
        userNumber.value.startsWith("8") ||
        userNumber.value.startsWith("+8")) &&
      userNumber.value.length < 10
    ) {
      showToastify({
        color: "#f44336",
        text: "Номер телефона введен неверно",
      });
    }

    const channel_id = "-1002336308190";
    const token = "7588901644:AAG8MHMGLE46uekQbIlMTKhPRf24BH9gZ60";
    const endpoint = "https://api.telegram.org";

    try {
      const request = await fetch(`${endpoint}/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `
        Foydalanuvchining ismi: ${userName.value}
Foydalanuvchining raqami: ${userNumber.value}
        `,
          chat_id: channel_id,
        }),
      });

      const { ok } = await request.json();

      if (ok) {
        userName.value = "";
        userNumber.value = "";
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  form.addEventListener("submit", sendFormData);
};

window.addEventListener("DOMContentLoaded", init);
