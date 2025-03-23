"use strict";

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

  let language = "uz";

  const successFullyData = {
    ru: "Данные отправлены успешно.",
    en: "The data was sent successfully.",
    uz: "Ma'lumotlar muvaffaqiyatli yuborildi.",
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
        showToastify({
          color: "#4CAF50",
          text: successFullyData[language],
        });

        userName.value = "";
        userNumber.value = "";
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  form.addEventListener("submit", sendFormData);

  const text = document.querySelector(".hero__play-text");

  const newText = text.innerText
    .split("")
    .map((char, i) => {
      return `<span style="transform:rotate(${i * 15}deg)">${char}</span>`;
    })
    .join("");

  text.innerHTML = newText;

  const chevronDown = document.querySelector(".fa-chevron-down");
  const selectTop = document.querySelector(".header-select__top");
  const icons = document.querySelectorAll(".header-select__language");
  const headerTopText = document.querySelector(".header-select__top-text");
  const selectLanguages = document.querySelector(".header-select-languages");

  const openLanguages = () => {
    chevronDown.classList.toggle("active");
    selectLanguages.classList.toggle("header-select-languages--open");
  };

  selectTop.addEventListener("click", openLanguages);

  const hideIcon = () => {
    icons.forEach((el) => {
      el.children[1].classList.remove("visible");
    });
  };

  const showIcon = (i) => {
    icons[i].children[1].classList.add("visible");

    getLanguageData(icons[i].getAttribute("data-lang"));

    headerTopText.innerHTML = icons[i].children[0].innerHTML;
  };

  hideIcon();
  showIcon(0);

  icons.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      hideIcon();
      showIcon(i);

      openLanguages();
    });
  });

  function getLanguageData(lang) {
    const navLinks = document.querySelectorAll(".nav__item-link");
    const headerContact = document.querySelector(".header-contact");

    const navLinksLanguages = {
      ru: ["O нас", "Преимущества", "Курсы", "Вопросы"],
      en: ["Us about", "Advantages", "Courses", "Questions"],
      arab: ["معلومات عنا", "المزايا", "الدورات", "أسئلة"],
      uz: ["Biz haqimizda", "Avzalliklar", "Kurslar", "Savollar"],
    };

    const headerContactLanguages = {
      en: "Contact us",
      uz: "Biz bilan Aloqa",
      ru: "Связаться с нами",
      arab: "سفيزاتسيا نامي",
    };

    navLinks.forEach((el, i) => {
      el.innerText = navLinksLanguages[lang][i];
    });

    headerContact.innerText = headerContactLanguages[lang];

    const heroContentTitleLanguages = {
      uz: `<span class="hero__content-span">
            Shams - Quyosh
          </span> onlayn o’quv markazi`,
      ru: `<span class="hero__content-span">
            Шамс – Солнце
          </span> онлайн-центр обучения`,
      en: `
        <span class="hero__content-span">
           Shams - Sun
        </span> online study centre
      `,
      arab: `
        <span class="hero__content-span">
            شمس - شمس
          </span> مركز التعلم عبر الإنترنت
      `,
    };

    const heroContentTitle = document.querySelector(".hero__content-title");

    heroContentTitle.innerHTML = heroContentTitleLanguages[lang];

    const heroContentText = {
      uz: `
        Tajribali ustozlar, zamonaviy ta’lim metodlari
        va mukammal natija kafolati – Shams o‘quv markazi sizni kutmoqda!
      `,
      ru: `
        Опытные преподаватели, современные методы обучения
        и гарантия отличного результата – учебный центр Шамс ждет вас!
      `,
      en: `
        Experienced teachers, modern training methods
        I guarantee an excellent result - the educational center Shams jdet vas!
      `,
      arab: `
        معلمون ذوو خبرة، أساليب تعليمية حديثة
        وضمان نتائج ممتازة - مركز شمس للتدريب في انتظارك!
      `,
    };

    const heroContentTextTag = document.querySelector(".hero__content-text");

    heroContentTextTag.innerText = heroContentText[lang];

    const contactOrangeBtnText = {
      uz: "Ko’proq bilish",
      ru: "Узнать больше",
      en: "Know more",
      arab: "يتعلم أكثر",
    };

    const contactOrangeTag = document.querySelector(
      ".hero__contact-btn--orange"
    );

    contactOrangeTag.innerText = contactOrangeBtnText[lang];

    const contactDarkBtnText = {
      uz: "Biz bilan Aloqa",
      ru: "Связаться с нами",
      en: "Contact us",
      arab: "اتصل بنا",
    };

    const contactDarkTag = document.querySelector(".hero__contact-btn--dark");

    contactDarkTag.innerText = contactDarkBtnText[lang];

    const playText = {
      uz: "Video Ko'rish Qo'llanma",
      ru: "Руководство по просмотру видео",
      en: "Video Watch Guide",
      arab: "دليل مشاهدة الفيديو",
    };

    const newText = playText[lang]
      .split("")
      .map((char, i) => {
        return `<span style="transform:rotate(${i * 15}deg)">${char}</span>`;
      })
      .join("");

    text.innerHTML = newText;

    const resultLangTexteOneData = {
      uz: "O’qigan o’quvchilar soni",
      ru: "Количество студентов, обучавшихся",
      en: "Number of students enrolled",
      arab: "عدد الطلاب المسجلين",
    };

    const resultLangTexteTwoData = {
      uz: "C1 darajaga erishgan o’quvchillar",
      ru: "Студенты, достигшие уровня C1",
      en: "Students who have reached level C1",
      arab: "الطلاب الذين وصلوا إلى المستوى C1",
    };

    const resultLangTexteThreeData = {
      uz: "B1 Darajaga erisha olganlar",
      ru: "Те, кто достиг уровня B1",
      en: "Those who have reached level B1",
      arab: "الذين وصلوا إلى المستوى B1",
    };

    const resultLangTexteFourData = {
      uz: "Ustoz bo’lib yetishib chiqa olganlar",
      ru: "Те, кто стал учителями",
      en: "Those who became teachers",
      arab: "أولئك الذين أصبحوا معلمين",
    };

    const resultsItemTitles = document.querySelectorAll(".results__item-text");

    resultsItemTitles[0].innerText = resultLangTexteOneData[lang];
    resultsItemTitles[1].innerText = resultLangTexteTwoData[lang];
    resultsItemTitles[2].innerText = resultLangTexteThreeData[lang];
    resultsItemTitles[3].innerText = resultLangTexteFourData[lang];

    const serviceTitleLanguagesData = {
      uz: `
        Nega aynan <span class="services-span">biz?</span>
      `,
      ru: `
        Почему именно <span class="services-span">мы?</span>
      `,
      en: `
        Почему именно <span class="services-span">we?</span>
      `,
      arab: `
        لماذا اسمي <span class="services-span">نحن؟</span>
      `,
    };

    const serviceTitle = document.querySelector(".services-title");

    serviceTitle.innerHTML = serviceTitleLanguagesData[lang];

    const serviceItemOneData = {
      uz: {
        title: "Zamonaviy",
        text: `
          Interaktiv o‘quv tizimi qiziqarli va samarali qilish uchun
          zamonaviy yondashuvdir. Darslarimiz orqali o‘quvchilar
          gramatikani yozish, tinglash, o‘qishni rivojlantiradilar.
        `,
      },
      ru: {
        title: "Современный",
        text: `
          Интерактивная система обучения, чтобы сделать его интересным и эффективным
          это современный подход. Студенты на наших уроках
          они развивают грамматику письма, аудирования и чтения.
        `,
      },
      en: {
        title: "Modern",
        text: `
          Interactive learning system to make it interesting and effective
          is a modern approach. Students in our lessons
          they develop grammar of writing, listening and reading.
        `,
      },
      arab: {
        title: "حديث",
        text: `
          نظام تعليمي تفاعلي شيق وفعال، نهج حديث. في دروسنا،
          يطور الطلاب مهاراتهم في الكتابة والاستماع والقراءة.
        `,
      },
    };

    const serviceItemTwoData = {
      uz: {
        title: "Sifat",
        text: `
          Tez va samarali natija - qisqa vaqt ichida Qur’on va hadislarni
          tushunib o‘qish, shuningdek, erkin va ravon, qiynalmasdan
          gapirish ko‘nikmalarini shakllantirish imkoniyatiga ega bo‘lasiz
        `,
      },
      ru: {
        title: "Качество",
        text: `
          Быстрый и эффективный результат – Коран и хадисы за короткое время
          понимание прочитанного, а также свободно и бегло, без затруднений
          у вас будет возможность развить разговорные навыки
        `,
      },
      en: {
        title: "Quality",
        text: `
          Fast and effective result - Quran and Hadith in a short time
          reading comprehension, as well as fluency and fluency, without difficulties
          you will have the opportunity to develop speaking skills
        `,
      },
      arab: {
        title: "جودة",
        text: `
          نتيجة سريعة وفعالة - القرآن الكريم
          والحديث الشريف في وقت قصير. فهم المقروء، بالإضافة إلى طلاقة
          وطلاقة، دون صعوبات. ستتاح لك الفرصة لتطوير مهارات التحدث.
        `,
      },
    };

    const serviceItemThreeData = {
      uz: {
        title: "Oson",
        text: `
          Onlayn kutubxona va Telegram bot orqali o‘quvchilarimiz o‘z
          bilimlarini oshirishlari mumkin. Ushbu platformalar orqali
          foydali darsliklar va qo‘llanmalar taqdim etiladi.
        `,
      },
      ru: {
        title: "Легкий",
        text: `
          Благодаря онлайн-библиотеке и боту Telegram наши читатели имеют свои собственные
          они могут улучшить свои знания. Через эти платформы
          предоставляются полезные учебники и пособия.
        `,
      },
      en: {
        title: "Easy",
        text: `
          Thanks to the online library and the Telegram bot, our readers have their own
          they can improve their knowledge. Through these platforms,
          useful textbooks and manuals are provided.
        `,
      },
      arab: {
        title: "سهل",
        text: `
          بفضل المكتبة الإلكترونية
          وروبوتتيليجرام، أصبح لقرائنا منصة خاصة بهم لتطوير معارفهم.
          ومن خلال هذه المنصات، نوفر كتبًا دراسية وأدلة مفيدة.
        `,
      },
    };

    const serviceItemFourData = {
      uz: {
        title: "E’tibor",
        text: `
          Islomiy til metodikasi o‘rganish jarayonini yanada samarali
          qiladi. Bu yondashuv faqatgina gramatikani o‘rgatishga emas,
          balki til jonli muloqot, amaliy mashg‘ulotlar orqali bo’ladi
        `,
      },
      ru: {
        title: "Внимание",
        text: `
          Методика исламского языка делает процесс обучения более эффективным
          делает. Этот подход заключается не только в обучении грамматике,
          скорее язык через живое общение и практические занятия
        `,
      },
      en: {
        title: "Attention",
        text: `
          The Islamic language method makes the learning process more effective
          does. This approach is not only about teaching grammar,
          rather the language through live communication and practical classes
        `,
      },
      arab: {
        title: "انتباه",
        text: `
          تُحسّن طريقة تدريس اللغة الإسلامية عملية
          التعلم. لا يقتصر هذا النهج على تعليم القواعد فحسب، بل
          يشمل أيضًا اللغة من خلال التواصل المباشر والدروس العملية.
        `,
      },
    };

    const serviceItemFiveData = {
      uz: {
        title: "Qulay",
        text: `
          Istalgan joydan toʻlovlarni oson va tez amalga oshirishingiz
          mumkin. Sizga qulay boʻlgan har qanday qurilmadan, telefon yoki
          kompyuterdan boʻlsin, toʻlovlarni bajarish imkoniyati
        `,
      },
      ru: {
        title: "Комфортный",
        text: `
          Совершайте платежи легко и быстро из любой точки мира
          возможный С любого удобного для вас устройства, телефона или
          возможность совершать платежи с компьютера
        `,
      },
      en: {
        title: "Comfortable",
        text: `
          Make payments easily and quickly from anywhere in the world
          possible From any convenient device, phone or
          the ability to make payments from a computer
        `,
      },
      arab: {
        title: "مريح",
        text: `
          قم بإجراء الدفعات بسهولة وسرعة من أي مكان في العالم
ممكن من أي جهاز مناسب، هاتف أو                                          
إمكانية إجراء الدفعات من جهاز كمبيوتر
         `,
      },
    };

    const serviceItemTitles = document.querySelectorAll(
      ".services__item-title"
    );
    const serviceItemTexts = document.querySelectorAll(".services__item-text");

    serviceItemTitles[0].innerHTML = serviceItemOneData[lang].title;
    serviceItemTexts[0].innerHTML = serviceItemOneData[lang].text;
    serviceItemTitles[1].innerHTML = serviceItemTwoData[lang].title;
    serviceItemTexts[1].innerHTML = serviceItemTwoData[lang].text;
    serviceItemTitles[2].innerHTML = serviceItemThreeData[lang].title;
    serviceItemTexts[2].innerHTML = serviceItemThreeData[lang].text;
    serviceItemTitles[3].innerHTML = serviceItemFourData[lang].title;
    serviceItemTexts[3].innerHTML = serviceItemFourData[lang].text;
    serviceItemTitles[4].innerHTML = serviceItemFiveData[lang].title;
    serviceItemTexts[4].innerHTML = serviceItemFiveData[lang].text;
  }

  getLanguageData(language);
};

window.addEventListener("DOMContentLoaded", init);
