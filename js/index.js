"use strict";

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

let language = localStorage.getItem("lang") || "uz";

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

for (let i = 0; i < questionsBox.length; i++) {
  const openContent = () => {
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

const form = document.getElementById("contact__form");
const userName = document.getElementById("user-name");
let userNumber = document.getElementById("user-number");

const onChangeNumberInput = (e) => {
  if (e.key === "e" && e.code === "KeyE") {
    e.preventDefault();
  }
};

userNumber.addEventListener("keydown", onChangeNumberInput);

const text = document.querySelector(".hero__play-text");

let updatedLang = language;

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
      const successFullyData = {
        ru: "Данные отправлены успешно.",
        en: "The data was sent successfully.",
        uz: "Ma'lumotlar muvaffaqiyatli yuborildi.",
        arab: "تم إرسال البيانات بنجاح.",
      };

      showToastify({
        color: "#4CAF50",
        text: successFullyData[updatedLang],
      });

      userName.value = "";
      userNumber.value = "";
    }
  } catch (error) {
    console.error("error", error);
  }
};

form.addEventListener("submit", sendFormData);

function getLanguageData(lang) {
  updatedLang = lang;
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

  headerContact.innerHTML = headerContactLanguages[lang];

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

  const contactOrangeTag = document.querySelector(".hero__contact-btn--orange");

  contactOrangeTag.innerText = contactOrangeBtnText[lang];

  const contactDarkBtnText = {
    uz: "Biz bilan Aloqa",
    ru: "Связаться с нами",
    en: "Contact us",
    arab: "اتصل بنا",
  };

  const contactDarkTag = document.querySelector(".hero__contact-btn--dark");

  contactDarkTag.innerText = contactDarkBtnText[lang];

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
        Why exactly <span class="services-span">we?</span>
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
  const serviceItemSixData = {
    uz: {
      title: "Oson kirish",
      text: `
          O‘quvchilar kurslarga telefon yoki kompyuter orqali kirishadi.
          Darslar va materiallar Telegram kanali orqali taqdim etiladi,
          o‘rganish istalgan joyda va vaqtda mumkin.
        `,
    },
    ru: {
      title: "Легкий доступ",
      text: `
          Студенты получают доступ к курсам через телефон или компьютер.
          Уроки и материалы предоставляются через канал Telegram,
          Обучение возможно в любом месте и в любое время.
        `,
    },
    en: {
      title: "Easy access",
      text: `
          Students access courses via phone or computer.
          Lessons and materials are provided via Telegram channel,
          Learning is possible anywhere and at any time.
        `,
    },
    arab: {
      title: "سهولة الوصول",
      text: `
          يمكن للطلاب الوصول إلى الدورات عبر الهاتف أو الحاسوب.
          تُقدم الدروس والمواد عبر قناة تيليجرام.
          التعلم متاح في أي مكان وزمان.
         `,
    },
  };

  const serviceItemTitles = document.querySelectorAll(".services__item-title");
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
  serviceItemTitles[4].innerHTML = serviceItemFiveData[lang].title;
  serviceItemTitles[5].innerHTML = serviceItemSixData[lang].title;
  serviceItemTexts[5].innerHTML = serviceItemSixData[lang].text;

  const highlightContentTitle = document.querySelector(
    ".highlight__content-title"
  );
  const highlightContentText = document.querySelector(
    ".highlight__content-text"
  );

  const highlightTitleData = {
    uz: `
        Sizga kerakli <span class="highlight__content-span">
        hammasi</span> bizda bor
      `,
    ru: `
        Тебе это нужно <span class="highlight__content-span">
        все</span> у нас есть
      `,
    en: `
        You need it <span class="highlight__content-span">
        all</span> we have
      `,
    arab: `
        أنت في حاجة إليها <span class="highlight__content-span">
        الجميع</span> لدينا
      `,
  };

  const highlightTextData = {
    uz: `
        Shams o‘quv markazi bilan arab tilini tez, oson va sifatli
        o‘rganish imkoniyatini qo‘ldan boy bermang!
      `,
    ru: `
        Изучите арабский язык быстро, легко и качественно с учебным центром Shams
        не упустите шанс научиться!
      `,
    en: `
        Learn Arabic quickly, easily and efficiently with Shams Learning Center
        don't miss your chance to learn!
      `,
    arab: `
        تعلم اللغة العربية بسرعة وسهولة وفعالية
        مع مركز شمس التعليمي. لا تفوت فرصتك للتعلم!
      `,
  };

  highlightContentTitle.innerHTML = highlightTitleData[lang];
  highlightContentText.innerHTML = highlightTextData[lang];

  const highlightTitleOneData = {
    uz: {
      title: "Yakka tartibda",
      text: "Yakka tartibdagi tizimlashtirilgan sifatli oquv tizimi",
    },
    ru: {
      title: "Индивидуально",
      text: "Индивидуализированная систематизированная система качества образования",
    },
    en: {
      title: "Individually",
      text: "Individualized systematic system of quality education",
    },
    arab: {
      title: "بشكل فردي",
      text: "نظام منهجي فردي للتعليم الجيد",
    },
  };

  const highlightTitleTwoData = {
    uz: {
      title: "Ayollar uchun",
      text: "Ayollar uchun Alohida Ayol ustoz imkoniyati",
    },
    ru: {
      title: "Для женщин",
      text: "Эксклюзивная возможность наставничества для женщин",
    },
    en: {
      title: "For women",
      text: "Exclusive Mentoring Opportunity for Women",
    },
    arab: {
      title: "للنساء",
      text: "فرصة إرشاد حصرية للنساء",
    },
  };

  const highlightTitleThreeData = {
    uz: {
      title: "Dars vaqti",
      text: "Darsning vaqti sizga qulay vaqtga qarab belgilanadi",
    },
    ru: {
      title: "Время занятий",
      text: "Время занятия определяется в удобное для вас время.",
    },
    en: {
      title: "Class time",
      text: "The lesson time is determined at a time convenient for you.",
    },
    arab: {
      title: "وقت الفصل",
      text: "يتم تحديد وقت الدرس في الوقت المناسب لك.",
    },
  };

  const highlightItemTitles = document.querySelectorAll(
    ".highlight__item-title"
  );
  const highlightItemTexts = document.querySelectorAll(".highlight__item-text");

  highlightItemTitles[0].innerHTML = highlightTitleOneData[lang].title;
  highlightItemTexts[0].innerHTML = highlightTitleOneData[lang].text;
  highlightItemTitles[1].innerHTML = highlightTitleTwoData[lang].title;
  highlightItemTexts[1].innerHTML = highlightTitleTwoData[lang].text;
  highlightItemTitles[2].innerHTML = highlightTitleThreeData[lang].title;
  highlightItemTexts[2].innerHTML = highlightTitleThreeData[lang].text;

  const hightlightContactData = {
    uz: {
      title: "Qanday savolingiz bor?",
      text: "Bizga bog’lanib barcha savollaringizni javobini toping!",
      btn: "Biz bilan bog’laning",
    },
    ru: {
      title: "Какой у вас вопрос?",
      text: "Свяжитесь с нами и найдите ответы на все свои вопросы!",
      btn: "Связаться с нами",
    },
    en: {
      title: "What is your question?",
      text: "Contact us and find answers to all your questions!",
      btn: "Contact us",
    },
    arab: {
      title: "ما هو سؤالك؟",
      text: "اتصل بنا واحصل على إجابات لجميع أسئلتك!",
      btn: "اتصل بنا",
    },
  };

  const hightLightContactTitle = document.querySelector(
    ".highlight__contact-title"
  );

  const hightLightContactText = document.querySelector(
    ".highlight__contact-text"
  );

  const hightLightContactBtn = document.querySelector(
    ".highlight__contact-btn"
  );

  hightLightContactTitle.innerHTML = hightlightContactData[lang].title;
  hightLightContactText.innerHTML = hightlightContactData[lang].text;
  hightLightContactBtn.innerHTML = hightlightContactData[lang].btn;

  const definitionData = {
    uz: `
        Bizning <span class="definition-span">tariflar</span>
      `,
    ru: `
        Наш <span class="definition-span">тарифы</span>
      `,
    en: `
        Our <span class="definition-span">tariffs</span>
      `,
    arab: `
        ملكنا <span class="definition-span">التعريفات</span>
      `,
  };

  const definitionTitle = document.querySelector(".definition-title");

  definitionTitle.innerHTML = definitionData[lang];

  const definitionInfoOneData = {
    uz: {
      dollar: "$132",
      tarrifs: "Yengil tarif",
      price: "1 700 000 so’m",
      titles: [
        "1 oyda 15 ta onlayn darslik",
        "Har bir dars 40 daqiqadan bo’lib otadi",
      ],
      info: "Bizning markazda darslar xisoblanadi kurslar emas",
      text: `
          Kurs olishda ikkilanayotgan bo’lsangiz uni bepul qismini sinab
          ko’rishingiz mumkin`,
      video: "Videoni ko’rish",
      contact: "Biz bilan bog’laning",
    },
    ru: {
      dollar: "$131.07",
      tarrifs: "Лайт тариф",
      price: "1 700 000 сум",
      titles: [
        "15 онлайн-учебников за 1 месяц",
        "Каждое занятие длится 40 минут",
      ],
      info: "В нашем центре засчитываются занятия, а не курсы",
      text: `
          Если вы не решаетесь пройти курс, попробуйте бесплатную часть.
          ты можешь видеть`,
      video: "Посмотреть видео",
      contact: "Связаться с нами",
    },
    en: {
      dollar: "$131.07",
      tarrifs: "Light tariff",
      price: "1 700 000 sum",
      titles: [
        "15 online tutorials in 1 month",
        "Each lesson lasts 40 minutes.",
      ],
      info: "In our center, classes are counted, not courses.",
      text: `
          If you are hesitant to take the course, try the free part.
          you can see`,
      video: "Watch the video",
      contact: "Contact us",
    },
    arab: {
      dollar: "$131.07",
      tarrifs: "التعرفة الخفيفة",
      price: "1700000 سوم",
      titles: [
        "15 درسًا تعليميًا عبر الإنترنت في شهر واحد",
        "كل درس يستغرق 40 دقيقة.",
      ],
      info: "في مركزنا يتم احتساب الفصول وليس الدورات.",
      text: `
          إذا كنت مترددًا في أخذ الدورة، فجرب الجزء المجاني. يمكنك أن ترى`,
      video: "شاهد الفيديو",
      contact: "اتصل بنا",
    },
  };

  const definitionInfoTwoData = {
    uz: {
      dollar: "$177.33",
      tarrifs: "O’rta tarif",
      price: "2 300 000 so'm",
      titles: [
        "1 oyda 20 ta onlayn darslik",
        "Har bir dars 40 daqiqadan bo’lib otadi",
      ],
      info: "Bizning markazda darslar xisoblanadi kurslar emas",
      text: `
          Kurs olishda ikkilanayotgan bo’lsangiz uni bepul qismini sinab
          ko’rishingiz mumkin`,
      video: "Videoni ko’rish",
      contact: "Biz bilan bog’laning",
    },
    ru: {
      dollar: "$177.33",
      tarrifs: "Средний тариф",
      price: "2 300 000 сум",
      titles: [
        "20 онлайн-учебников за 1 месяц",
        "Каждое занятие длится 40 минут",
      ],
      info: "В нашем центре засчитываются занятия, а не курсы",
      text: `
          Если вы не решаетесь пройти курс, попробуйте бесплатную часть.
          ты можешь видеть`,
      video: "Посмотреть видео",
      contact: "Связаться с нами",
    },
    en: {
      dollar: "$177.33",
      tarrifs: "Average tariff",
      price: "2 300 000 sum",
      titles: [
        "20 online tutorials in 1 month",
        "Each lesson lasts 40 minutes.",
      ],
      info: "In our center, classes are counted, not courses.",
      text: `
          If you are hesitant to take the course, try the free part.
          you can see`,
      video: "Watch the video",
      contact: "Contact us",
    },
    arab: {
      dollar: "$177.33",
      tarrifs: "متوسط ​​التعريفة",
      price: "2 300 000 سوم",
      titles: [
        "20 درسًا تعليميًا عبر الإنترنت في شهر واحد",
        "كل درس يستغرق 40 دقيقة.",
      ],
      info: "في مركزنا يتم احتساب الفصول وليس الدورات.",
      text: `
          إذا كنت مترددًا في أخذ الدورة، فجرب الجزء المجاني. يمكنك أن ترى`,
      video: "شاهد الفيديو",
      contact: "اتصل بنا",
    },
  };

  const definitionInfoThreeData = {
    uz: {
      dollar: "$215.88",
      tarrifs: "Katta tarif",
      price: "2 800 000 so'm",
      titles: [
        "1 oyda 25 ta onlayn darslik",
        "Har bir dars 40 daqiqadan bo’lib otadi",
      ],
      info: "Bizning markazda darslar xisoblanadi kurslar emas",
      text: `
          Kurs olishda ikkilanayotgan bo’lsangiz uni bepul qismini sinab
          ko’rishingiz mumkin`,
      video: "Videoni ko’rish",
      contact: "Biz bilan bog’laning",
    },
    ru: {
      dollar: "$215.88",
      tarrifs: "Большой тариф",
      price: "2 800 000 сум",
      titles: [
        "25 онлайн-учебников за 1 месяц",
        "Каждое занятие длится 40 минут",
      ],
      info: "В нашем центре засчитываются занятия, а не курсы",
      text: `
          Если вы не решаетесь пройти курс, попробуйте бесплатную часть.
          ты можешь видеть`,
      video: "Посмотреть видео",
      contact: "Связаться с нами",
    },
    en: {
      dollar: "$215.88",
      tarrifs: "Big tariff",
      price: "2 800 000 sum",
      titles: [
        "25 online tutorials in 1 month",
        "Each lesson lasts 40 minutes.",
      ],
      info: "In our center, classes are counted, not courses.",
      text: `
          If you are hesitant to take the course, try the free part.
          you can see`,
      video: "Watch the video",
      contact: "Contact us",
    },
    arab: {
      dollar: "$215.88",
      tarrifs: "تعريفة كبيرة",
      price: "2800000 سوم",
      titles: [
        "25 درسًا تعليميًا عبر الإنترنت في شهر واحد",
        "كل درس يستغرق 40 دقيقة.",
      ],
      info: "في مركزنا يتم احتساب الفصول وليس الدورات.",
      text: `
          إذا كنت مترددًا في أخذ الدورة، فجرب الجزء المجاني. يمكنك أن ترى`,
      video: "شاهد الفيديو",
      contact: "اتصل بنا",
    },
  };

  const definitionContentOne = `
      <img
        width="440"
        height="440"
        alt="Yengil tarif"
        class="definition__card-img"
        src="./images/png/card-image-1.png"
      />

              <div class="definition__container">
                <div class="definition__content">
                  <h2 class="definition__content-title">${definitionInfoOneData[lang]?.tarrifs}</h2>

                  <div class="definition__price">
                    <h2 class="definition__price-title">${definitionInfoOneData[lang]?.price}</h2>

                    <h3 class="definition__price-sub-title">${definitionInfoOneData[lang]?.dollar}</h3>
                  </div>
                </div>

                <ul class="definition__infos">
                  <li class="definition__info">
                    <img
                      height="12"
                      width="7.5"
                      alt="flag icon"
                      src="./images/svg/flag.svg"
                      class="definition__info-img"
                    />
                    <p class="definition__info-text">
                      ${definitionInfoOneData[lang]?.titles[0]}
                    </p>
                  </li>
                  <li class="definition__info">
                    <img
                      height="12"
                      width="7.5"
                      alt="flag icon"
                      src="./images/svg/flag.svg"
                      class="definition__info-img"
                    />
                    <p class="definition__info-text">
                       ${definitionInfoOneData[lang]?.titles[1]}
                    </p>
                  </li>
                </ul>

                <div class="definition__warning">
                  <img
                    width="2"
                    height="16"
                    alt="exclamation icon"
                    class="definition__warning-icon"
                    src="./images/svg/exclamation.svg"
                  />

                  <p class="definition__warning-text">
                    ${definitionInfoOneData[lang]?.info}
                  </p>
                </div>

                <p class="definition-text">
                  ${definitionInfoOneData[lang]?.text}
                </p>

                <div class="definition__view">
                  <a
                    role="button"
                    target="_blank"
                    class="definition__view-btn"
                    href="https://www.youtube.com/@Shams_oquvmarkaz"
                  >
                    ${definitionInfoOneData[lang]?.video}
                  </a>
                  <a
                    role="button"
                    target="_blank"
                    href="https://t.me/Shams_oquvmarkaz_Admin"
                    class="definition__view-btn definition__view-btn--orange"
                  >
                     ${definitionInfoOneData[lang]?.contact}
                  </a>
                </div>
              </div>
    `;
  const definitionContentTwo = `
      <img
        width="440"
        height="440"
        alt="Yengil tarif"
        class="definition__card-img"
        src="./images/png/card-image-2.png"
      />

              <div class="definition__container">
                <div class="definition__content">
                  <h2 class="definition__content-title">${definitionInfoTwoData[lang]?.tarrifs}</h2>

                  <div class="definition__price">
                    <h2 class="definition__price-title">${definitionInfoTwoData[lang]?.price}</h2>

                    <h3 class="definition__price-sub-title">${definitionInfoTwoData[lang]?.dollar}</h3>
                  </div>
                </div>

                <ul class="definition__infos">
                  <li class="definition__info">
                    <img
                      height="12"
                      width="7.5"
                      alt="flag icon"
                      src="./images/svg/flag.svg"
                      class="definition__info-img"
                    />
                    <p class="definition__info-text">
                      ${definitionInfoTwoData[lang]?.titles[0]}
                    </p>
                  </li>
                  <li class="definition__info">
                    <img
                      height="12"
                      width="7.5"
                      alt="flag icon"
                      src="./images/svg/flag.svg"
                      class="definition__info-img"
                    />
                    <p class="definition__info-text">
                       ${definitionInfoTwoData[lang]?.titles[1]}
                    </p>
                  </li>
                </ul>

                <div class="definition__warning">
                  <img
                    width="2"
                    height="16"
                    alt="exclamation icon"
                    class="definition__warning-icon"
                    src="./images/svg/exclamation.svg"
                  />

                  <p class="definition__warning-text">
                    ${definitionInfoTwoData[lang]?.info}
                  </p>
                </div>

                <p class="definition-text">
                  ${definitionInfoTwoData[lang]?.text}
                </p>

                <div class="definition__view">
                  <a
                    role="button"
                    target="_blank"
                    class="definition__view-btn"
                    href="https://www.youtube.com/@Shams_oquvmarkaz"
                  >
                    ${definitionInfoTwoData[lang]?.video}
                  </a>
                  <a
                    role="button"
                    target="_blank"
                    href="https://t.me/Shams_oquvmarkaz_Admin"
                    class="definition__view-btn definition__view-btn--orange"
                  >
                     ${definitionInfoTwoData[lang]?.contact}
                  </a>
                </div>
              </div>
    `;

  const definitionContentThree = `
      <img
        width="440"
        height="440"
        alt="Yengil tarif"
        class="definition__card-img"
        src="./images/png/card-image-3.png"
      />

              <div class="definition__container">
                <div class="definition__content">
                  <h2 class="definition__content-title">${definitionInfoThreeData[lang]?.tarrifs}</h2>

                  <div class="definition__price">
                    <h2 class="definition__price-title">${definitionInfoThreeData[lang]?.price}</h2>

                    <h3 class="definition__price-sub-title">${definitionInfoThreeData[lang]?.dollar}</h3>
                  </div>
                </div>

                <ul class="definition__infos">
                  <li class="definition__info">
                    <img
                      height="12"
                      width="7.5"
                      alt="flag icon"
                      src="./images/svg/flag.svg"
                      class="definition__info-img"
                    />
                    <p class="definition__info-text">
                      ${definitionInfoThreeData[lang]?.titles[0]}
                    </p>
                  </li>
                  <li class="definition__info">
                    <img
                      height="12"
                      width="7.5"
                      alt="flag icon"
                      src="./images/svg/flag.svg"
                      class="definition__info-img"
                    />
                    <p class="definition__info-text">
                       ${definitionInfoThreeData[lang]?.titles[1]}
                    </p>
                  </li>
                </ul>

                <div class="definition__warning">
                  <img
                    width="2"
                    height="16"
                    alt="exclamation icon"
                    class="definition__warning-icon"
                    src="./images/svg/exclamation.svg"
                  />

                  <p class="definition__warning-text">
                    ${definitionInfoThreeData[lang]?.info}
                  </p>
                </div>

                <p class="definition-text">
                  ${definitionInfoThreeData[lang]?.text}
                </p>

                <div class="definition__view">
                  <a
                    role="button"
                    target="_blank"
                    class="definition__view-btn"
                    href="https://www.youtube.com/@Shams_oquvmarkaz"
                  >
                    ${definitionInfoThreeData[lang]?.video}
                  </a>
                  <a
                    role="button"
                    target="_blank"
                    href="https://t.me/Shams_oquvmarkaz_Admin"
                    class="definition__view-btn definition__view-btn--orange"
                  >
                     ${definitionInfoThreeData[lang]?.contact}
                  </a>
                </div>
              </div>
    `;

  const definitionCards = document.querySelectorAll(".definition__card");

  definitionCards[0].innerHTML = definitionContentOne;
  definitionCards[1].innerHTML = definitionContentTwo;
  definitionCards[2].innerHTML = definitionContentThree;

  const questionsTitleData = {
    uz: `
        <span class="questions-span">Biz</span> Haqimizda savollar
      `,
    ru: `
        <span class="questions-span">We</span> Вопросы о нас
      `,
    en: `
        <span class="questions-span">We</span> Questions about us
      `,
    arab: `
        <span class="questions-span">نحن</span> أسئلة عنا
      `,
  };

  const questionsTitle = document.querySelector(".questions-title");

  questionsTitle.innerHTML = questionsTitleData[lang];

  const questionItemOneData = {
    uz: {
      title: "Shams oquv markazi qachon faoliyatni boshlagan?",
      text: `
          2022 yilda Shams o'quv markazi o'zining onlayn darslarini
          yo'lga qo'ydi va hozirda 1700 ta talaba markazni
          muvaffaqiyat bilan tamomlagan, shuningdek, 12 mingdan ortiq
          faol kuzatuvchilari mavjud.
        `,
    },
    ru: {
      title: "Когда образовательный центр «Шамс» начал свою деятельность?",
      text: `
          Ю. Абдурахман, основатель образовательного центра «Шамс», арабский язык
          окончила кафедру, 3+ года по данному направлению
          имеет опыт. Речь идет о преподавании языка и образовательной методике.
          имеет достаточные знания и навыки.
        `,
    },
    en: {
      title: "When did the Shams Educational Center start its activities?",
      text: `
          Y. Abdurakhman, founder of the educational center "Shams", Arabic language
          graduated from the department, 3+ years in this area
          has experience. We are talking about teaching language and educational methodology.
          has sufficient knowledge and skills.
        `,
    },
    arab: {
      title: "متى بدأ مركز شمس التربوي نشاطه؟",
      text: `
          ي. عبد الرحمن، مؤسس المركز
          التعليمي "شمس"، تخصص لغة عربية، خريج قسم اللغة العربية،
          لديه خبرة في هذا المجال تزيد عن ثلاث سنوات. لدينا خبرة
          في تدريس اللغة ومنهجياتها. يمتلك معرفة ومهارات كافية.
        `,
    },
  };

  const questionItemTwoData = {
    uz: {
      title: "Bu markaz asoschisi kim?",
      text: `
          Shams o‘quv markazining asoschisi Y. Abdurahmon Arab tili
          yo‘nalishini tamomlagan bo‘lib, ushbu sohada 3+ yillik
          tajribaga ega. U til o‘rgatish va ta’lim metodikasi bo‘yicha
          yetarli bilim va malakaga ega.
        `,
    },
    ru: {
      title: "Кто основатель этого центра?",
      text: `
          Ю. Абдурахман, основатель образовательного центра «Шамс», арабский язык
          окончила кафедру, 3+ года по данному направлению
          имеет опыт. Речь идет о преподавании языка и образовательной методике.
          имеет достаточные знания и навыки.
        `,
    },
    en: {
      title: "Who is the founder of this center?",
      text: `
          Y. Abdurakhman, founder of the educational center "Shams", Arabic language
          graduated from the department, 3+ years in this area
          has experience. We are talking about teaching language and educational methodology.
          has sufficient knowledge and skills.
        `,
    },
    arab: {
      title: "من هو مؤسس هذا المركز؟",
      text: `
          ي. عبد الرحمن، مؤسس المركز التعليمي
          "شمس"، تخصص لغة عربية، خريج قسم اللغة العربية، لديه
          خبرة في هذا المجال تزيد عن ثلاث سنوات. لدينا خبرة في
          تدريس اللغة ومنهجياتها. يمتلك معرفة ومهارات كافية.
        `,
    },
  };

  const questionItemThreeData = {
    uz: {
      title: "Darslar qanday tazrda otiladi?",
      text: `
          Darslar to‘liq onlayn shaklda o‘tiladi. Mashg‘ulotlar
          interaktiv va zamonaviy metodlar asosida tashkil etilgan
          bo‘lib, talabalar Zoom yoki maxsus platforma orqali
          qatnashadilar. Dars jarayonida grammatik qoidalar, talaffuz,
          so‘z boyligini oshirish va suhbat ko‘nikmalarini
          rivojlantirishga alohida e’tibor qaratiladi. Shuningdek,
          video darsliklar, yozma topshiriqlar va mustaqil o‘rganish
          uchun qo‘shimcha materiallar ham taqdim etiladi.
        `,
    },
    ru: {
      title: "Как проводятся уроки?",
      text: `
          Занятия проходят полностью онлайн. Классы
          организовано на основе интерактивных и современных методов
          и студентов через Zoom или специальную платформу
          они участвуют. Грамматические правила, произношение,
          увеличить словарный запас и разговорные навыки
          особое внимание уделяется развитию. также
          видеоуроки, письменные задания и самостоятельное изучение
          также предоставляются дополнительные материалы.
        `,
    },
    en: {
      title: "How are lessons conducted?",
      text: `
          Classes are held entirely online. Classes
          are organized based on interactive and modern methods
          and students via Zoom or a special platform
          they participate. Grammar rules, pronunciation,
          increase vocabulary and speaking skills
          special attention is paid to the development. also
          video lessons, written assignments and independent study
          additional materials are also provided.
        `,
    },
    arab: {
      title: "كيف تتم الدروس؟",
      text: `
          تُعقد الدروس عبر الإنترنت بالكامل. تُنظّم الدروس بأساليب تفاعلية وحديثة، ويشارك
          فيها الطلاب عبر تطبيق زووم أو منصة خاصة. يتم التركيز على قواعد
          النحو والنطق، وتنمية مهارات التحدث والمفردات. كما تُقدّم
          دروس فيديو، وواجبات كتابية، ودروس مستقلة، ومواد إضافية.
        `,
    },
  };

  const questionItemFourData = {
    uz: {
      title: "Cefr yoki Tanalga tayyorlaysizlarmi?",
      text: `
          Ha, biz CEFR va TANAL imtihonlariga tayyorlaymiz.
          Darslarimiz maxsus imtihon talablariga moslashtirilgan
          bo‘lib, grammatik qoidalar, tinglab tushunish, o‘qish,
          yozish va suhbat ko‘nikmalarini rivojlantirishga
          yo‘naltirilgan. Talabalarimiz imtihonda yuqori natijalarga
          erishishi uchun tajribali ustozlar qo‘llanmalari, maxsus
          testlar va amaliy mashg‘ulotlar bilan ta’minlanadi.
        `,
    },
    ru: {
      title: "Вы готовите Цефр или Танал?",
      text: `
          Да, мы готовимся к экзаменам CEFR и TANAL.
          Наши уроки адаптированы к конкретным экзаменационным требованиям.
          грамматические правила, понимание на слух, чтение,
          развивать письменные и разговорные навыки
          направлен. Наши студенты добиваются высоких результатов на ЕГЭ
          руководства опытных учителей для достижения, специальные
          обеспечены тестами и практическими занятиями.
        `,
    },
    en: {
      title: "Are you preparing Cefr or Tanal?",
      text: `
          Yes, we prepare for the CEFR and TANAL exams.
          Our lessons are tailored to specific exam requirements.
          grammar rules, listening comprehension, reading,
          developing writing and speaking skills
          aimed. Our students achieve high results in the Unified State Exam
          guidance from experienced teachers to achieve, special
          provided with tests and practical classes.
        `,
    },
    arab: {
      title: "هل تقوم بتحضير سيفر أو تنال؟",
      text: `
          نعم، نستعد لامتحانات الإطار الأوروبي المرجعي العام للغات (CEFR) والإطار الوطني لتعلم اللغات (TANAL).
          دروسنا مصممة خصيصًا لتلبية متطلبات الامتحانات المحددة.
          تشمل قواعد اللغة، وفهم الاستماع، والقراءة،
          وتطوير مهارات الكتابة والتحدث.
          يحقق طلابنا نتائج ممتازة في امتحان الولاية الموحد،
          بتوجيه من معلمين ذوي خبرة لتحقيق ذلك،
          وتوفر لهم اختبارات ودروسًا عملية.
        `,
    },
  };

  const questionItemFiveData = {
    uz: {
      title: "Men Qachon Arab Tilida Gaplasha Olaman?",
      text: `
          Bu sizning har kunlik mashg‘ulotingiz va amaliyotga ajratgan
          vaqtingizga bog‘liq! Kuniga 30 daqiqa → 6 oy ichida asosiy
          so‘z va iboralarni tushunish. Kuniga 1 soat → 3-4 oyda oddiy
          suhbat qura olish. Kuniga 2 soat yoki ko‘proq → 2-3 oy
          ichida erkin gapira boshlash.
        `,
    },
    ru: {
      title: "Когда я могу говорить по-арабски?",
      text: `
          Это ваша ежедневная тренировка и практика
          зависит от вашего времени! 30 минут в день → базовый за 6 месяцев
          понимать слова и фразы. 1 час в день → норма через 3-4 месяца
          уметь поддержать разговор. 2 часа в день и более → 2-3 месяца
          начать говорить свободно внутри себя.
        `,
    },
    en: {
      title: "When can I speak Arabic?",
      text: `
          This is your daily training and practice
          depends on your time! 30 minutes a day → basic in 6 months
          understand words and phrases. 1 hour a day → normal in 3-4 months
          be able to maintain a conversation. 2 hours a day or more → 2-3 months
          start speaking freely within yourself.
        `,
    },
    arab: {
      title: "متى يمكنني التحدث باللغة العربية؟",
      text: `
          هذا تدريبك اليومي وممارستك.
          يعتمد على وقتك! ٣٠ دقيقة يوميًا → أساسي في ٦ أشهر
          فهم الكلمات والعبارات. ساعة يوميًا → طبيعي في ٣-٤ أشهر
          القدرة على مواصلة المحادثة. ساعتان يوميًا أو أكثر → شهرين إلى ثلاثة أشهر
          البدء بالتحدث بحرية مع نفسك.
        `,
    },
  };

  const questionItemSixData = {
    uz: {
      title: "Kursni tugatgandan keyin sertifikat beriladimi?",
      text: `
          Ha, kursni muvaffaqiyatli tugatganlarga rasmiy sertifikat
          taqdim etiladi.
        `,
    },
    ru: {
      title: "Есть ли сертификат после прохождения курса?",
      text: `
          Да, официальный сертификат об успешном прохождении курса
          предоставляется.
        `,
    },
    en: {
      title: "Is there a certificate after completing the course?",
      text: `
          Yes, an official certificate of successful
          completion of the course is provided.
        `,
    },
    arab: {
      title: "هل هناك شهادة بعد الانتهاء من الدورة؟",
      text: `
          نعم، يتم تقديم شهادة رسمية بإتمام الدورة بنجاح.
         `,
    },
  };

  const questionItemSevenData = {
    uz: {
      title: "Dars jadvali qanday bo‘ladi?",
      text: `
          Darslar turli guruhlar uchun moslashtirilgan jadval asosida
          o‘tiladi. Shuningdek, individual ta’lim olish imkoniyati ham
          mavjud.
        `,
    },
    ru: {
      title: "Какой будет график занятий?",
      text: `
          Занятия проводятся по индивидуальному графику для разных групп.
          будет пройдено. А также возможность индивидуального обучения
          есть.
        `,
    },
    en: {
      title: "What will be the class schedule?",
      text: `
          Classes are held on an individual schedule for different groups.
          will be completed. And also the possibility of individual training
          is.
        `,
    },
    arab: {
      title: "ما هو جدول الحصص الدراسية؟",
      text: `
            تُعقد الدروس وفق جدول زمني فردي لمجموعات مختلفة.
            سيتم إكمالها. كما تتوفر إمكانية التدريب الفردي.
        `,
    },
  };

  const questionItemEightData = {
    uz: {
      title: "Nega kursingiz bunchalar qimmat?",
      text: `
          Bilimga sarmoya – eng foydali sarmoya! Tez va samarali
          o‘rganing, natijani his qiling! Haqiqiy bilim arzon
          bo‘lmaydi, lekin kelajakda ming barobar ortiq daromad
          keltiradi! Vaqtingizni tejang, sifatli ta’lim tanlang!
          O‘qish – xarajat emas, kelajak uchun eng yaxshi
          investitsiya! Bugun boshlang – ertangi muvaffaqiyatingizga
          bir qadam qo‘ying! Bilimga kiritilgan sarmoya hech qachon
          zoye ketmaydi! Sifatli ta’lim – cheksiz imkoniyatlar kaliti!
          Orzularingizni kechiktirmang, bugun harakatni boshlang!
        `,
    },
    ru: {
      title: "Почему ваш курс такой дорогой?",
      text: `
          Инвестиции в знания – самые выгодные инвестиции! Быстро и эффективно
          учитесь, чувствуйте результат! Настоящие знания стоят дешево
          нет, но в будущем доход в тысячу раз больше
          приносит! Экономьте свое время, выбирайте качественное образование!
          Образование – это не расходы, это лучшее для будущего
          инвестиции! Начните сегодня – для завтрашнего успеха
          сделай шаг! Инвестиции в знания никогда
          оно не пропадет даром! Качественное образование – залог неограниченных возможностей!
          Не откладывайте свои мечты, начните действовать уже сегодня!
        `,
    },
    en: {
      title: "Why is your course so expensive?",
      text: `
          Investments in knowledge are the most profitable investments! Quickly and effectively
          learn, feel the result! Real knowledge is cheap
          no, but in the future the income is a thousand times more
          brings! Save your time, choose quality education!
          Education is not an expense, it is the best for the future
          investment! Start today - for tomorrow's success
          take a step! Investments in knowledge will never
          go to waste! Quality education is the key to unlimited opportunities!
          Do not postpone your dreams, start acting today!
        `,
    },
    arab: {
      title: "لماذا دورتك مكلفة للغاية؟",
      text: `
          الاستثمار في المعرفة هو
          أكثر الاستثمارات ربحية! تعلم بسرعة وفعالية، واشعر بالنتيجة!
          المعرفة الحقيقية رخيصة، لا، لكن في المستقبل سيجلب دخلًا
          أكبر بكثير! وفر وقتك، واختر تعليمًا عالي الجودة! التعليم ليس
          نفقة، بل هو أفضل استثمار للمستقبل! ابدأ اليوم - لنجاح الغد،
          انطلق! الاستثمار في المعرفة لن يضيع أبدًا! التعليم الجيد
          هو مفتاح الفرص اللامحدودة! لا تؤجل أحلامك، ابدأ بالعمل اليوم!
        `,
    },
  };

  const questionItemNineData = {
    uz: {
      title: "Kursga qanday yozilsam bo‘ladi?",
      text: `
          Kursga yozilish uchun bizning rasmiy Telegram yoki
          vebsaytimiz orqali ariza topshirishingiz mumkin. Shuningdek,
          to‘lov amalga oshirilgach, sizga darslar uchun barcha
          kerakli ma’lumotlar taqdim etiladi
        `,
    },
    ru: {
      title: "Как я могу зарегистрироваться на курс?",
      text: `
          Для регистрации на курс наш официальный Telegram или
          Вы можете подать заявку через наш сайт. также
          После оплаты вы получите все уроки.
          необходимая информация предоставляется
        `,
    },
    en: {
      title: "How can I register for a course?",
      text: `
          To register for the course, our official Telegram or
          You can apply through our website. also
          After payment, you will receive all the lessons.
          The necessary information is provided
        `,
    },
    arab: {
      title: "كيف يمكنني التسجيل في الدورة؟",
      text: `
          للتسجيل في
          الدورة، تواصل معنا عبر تيليجرام أو موقعنا الإلكتروني.
          بعد الدفع، ستصلك جميع الدروس.
          المعلومات اللازمة متوفرة.
        `,
    },
  };

  const questionItemTenData = {
    uz: {
      title: "Men Arabchani Qayerda Ishlata Olaman?",
      text: `
          Saudiya yoki BAA da ishlash. Islomiy universitetlarga
          kirish. Xalqaro tarjimon bo‘lish. Xalqaro tarjimon bo‘lish.
          Onlayn ta’lim orqali daromad qilish. Arab tilida blog yoki
          YouTube yuritish
        `,
    },
    ru: {
      title: "Где я могу использовать арабский язык?",
      text: `
          Работа в Саудовской Аравии или ОАЭ. в исламские университеты
          доступ Станьте международным переводчиком. Станьте международным переводчиком.
          Заработок через онлайн-обучение. Блог на арабском или
          Запуск YouTube
        `,
    },
    en: {
      title: "Where can I use Arabic?",
      text: `
          Work in Saudi Arabia or UAE. in Islamic universities
          access Become an international translator. Become an international translator.
          Earn money through online learning. Blog in Arabic or
          YouTube launch
        `,
    },
    arab: {
      title: "أين يمكنني استخدام اللغة العربية؟",
      text: `
          العمل في السعودية أو الإمارات. في الجامعات الإسلامية.
          انضم إلى برنامج المترجمين الدوليين.
          اربح المال من خلال التعلم عبر الإنترنت.
          مدونة باللغة العربية أو
          انطلق على يوتيوب.
        `,
    },
  };

  const questionsBoxTitles = document.querySelectorAll(".questions__box-title");

  const questionsBoxTexts = document.querySelectorAll(".questions__item-text");

  questionsBoxTitles[0].innerHTML = questionItemOneData[lang].title;
  questionsBoxTexts[0].innerHTML = questionItemOneData[lang].text;
  questionsBoxTitles[1].innerHTML = questionItemTwoData[lang].title;
  questionsBoxTexts[1].innerHTML = questionItemTwoData[lang].text;
  questionsBoxTitles[2].innerHTML = questionItemThreeData[lang].title;
  questionsBoxTexts[2].innerHTML = questionItemThreeData[lang].text;
  questionsBoxTitles[3].innerHTML = questionItemFourData[lang].title;
  questionsBoxTexts[3].innerHTML = questionItemFourData[lang].text;
  questionsBoxTitles[4].innerHTML = questionItemFiveData[lang].title;
  questionsBoxTexts[4].innerHTML = questionItemFiveData[lang].text;
  questionsBoxTitles[5].innerHTML = questionItemSixData[lang].title;
  questionsBoxTexts[5].innerHTML = questionItemSixData[lang].text;
  questionsBoxTitles[6].innerHTML = questionItemSevenData[lang].title;
  questionsBoxTexts[6].innerHTML = questionItemSevenData[lang].text;
  questionsBoxTitles[7].innerHTML = questionItemEightData[lang].title;
  questionsBoxTexts[7].innerHTML = questionItemEightData[lang].text;
  questionsBoxTitles[8].innerHTML = questionItemNineData[lang].title;
  questionsBoxTexts[8].innerHTML = questionItemNineData[lang].text;
  questionsBoxTitles[9].innerHTML = questionItemTenData[lang].title;
  questionsBoxTexts[9].innerHTML = questionItemTenData[lang].text;

  const testimonialsTitleData = {
    uz: `
        O’quvchilarimizni
        <span class="testimonials-span">biz haqimizdagi</span>
        fikrlari
      `,
    ru: `
        Наши студенты
        <span class="testimonials-span">о нас</span>
        мысли
      `,
    en: `
        Our students
        <span class="testimonials-span">about Us</span>
        thoughts
      `,
    arab: `
        طلابنا
        <span class="testimonials-span">معلومات عنا</span>
        أفكار
      `,
  };

  const testimonialsTitle = document.querySelector(".testimonials-title");

  testimonialsTitle.innerHTML = testimonialsTitleData[lang];

  const testimonialsOneData = {
    uz: {
      title: "Abdulloh M.",
      text: `
        Avval ko‘p joylarda arab tili o‘rganganman, lekin bu
        markazning uslubi juda zo‘r! Juda qisqa vaqt ichida CEFR
        imtihoniga tayyor bo‘ldim va natijam ham juda yaxshi bo‘ldi.
        Eng yaxshi o‘quv markazlaridan biri!
        `,
    },
    ru: {
      title: "Абдулла М.",
      text: `
        Раньше я учил арабский язык во многих местах, но это
        стиль хаба отличный! CEFR в очень сжатые сроки
        Я готовился к экзамену, и мой результат был очень хорошим.
        Один из лучших образовательных центров!
        `,
    },
    en: {
      title: "Abdullah M.",
      text: `
          I have studied Arabic in many places before, but this
          hub style is great! CEFR in a very short time
          I was preparing for the exam and my result was very good.
          One of the best educational centers!
        `,
    },
    arab: {
      title: "عبدالله م.",
      text: `
          لقد درستُ اللغة العربية في أماكن عديدة سابقًا، لكن هذا المركز رائع! حصلتُ على الإطار الأوروبي المرجعي العام للغات (CEFR) في وقت قصير جدًا. كنتُ أستعد للامتحان وكانت نتيجتي ممتازة.
          من أفضل المراكز التعليمية!
        `,
    },
  };

  const testimonialsTwoData = {
    uz: {
      title: "Xadicha S.",
      text: `
        Men Shams o‘quv markazida 3 oy o‘qib, arab tilida gapirishni
        o‘rgandim. Darslar juda qiziqarli va samarali. Eng yaxshi
        tomoni – darslarni qayta ko‘rib chiqish imkoniyati borligi.
        Chunki bu bilan bilimni yanada mustaxkamlash mumkin!
        `,
    },
    ru: {
      title: "Хадиджа С.",
      text: `
        Я училась в образовательном центре Шамс 3 месяца и научилась говорить по-арабски.
        Я узнал. Уроки очень интересные и эффективные. Лучшее
        сторона – что есть возможность пересматривать уроки.
        Потому что с помощью этих знаний можно еще больше укрепиться!
        `,
    },
    en: {
      title: "Khadija S.",
      text: `
          I studied at the Shams Educational Center for 3 months and learned to speak Arabic.
          I learned. The lessons are very interesting and effective. The best
          side is that there is an opportunity to review the lessons.
          Because with the help of this knowledge you can strengthen yourself even more!
        `,
    },
    arab: {
      title: "خديجة س.",
      text: `
          درستُ في مركز شمس التعليمي لمدة ثلاثة أشهر، وتعلمتُ اللغة العربية.
          تعلمتُ. الدروس شيقة وفعّالة للغاية. والأجمل من ذلك كله هو إمكانية مراجعة الدروس.
          فبمساعدة هذه المعرفة، يمكنك تقوية نفسك أكثر!
        `,
    },
  };

  const testimonialsThreeData = {
    uz: {
      title: "Hasanbek T.",
      text: `
          Oldin arab tilini tushunish menga juda qiyin tuyulardi, lekin
          Shams markazi darslari orqali qisqa vaqt ichida so‘z boyligim
          oshdi va grammatikani tushuna boshladim. Endi ishonch bilan
          gapira olaman!
        `,
    },
    ru: {
      title: "Хасанбек Т.",
      text: `
          Раньше мне было очень трудно понимать арабский, но
          Мой словарный запас за короткое время благодаря урокам центра Шамс
          увеличился, и я начал понимать грамматику. Теперь с уверенностью
          я могу говорить
        `,
    },
    en: {
      title: "Hasanbek T.",
      text: `
          I used to have a hard time understanding Arabic, but
          My vocabulary increased in a short time thanks to the lessons at Shams Center
          and I started to understand the grammar. Now I can speak with confidence
        `,
    },
    arab: {
      title: "حسن بك ت.",
      text: `
          كنتُ أجد صعوبة في فهم
          اللغة العربية، لكن مفرداتي ازدادت بسرعة بفضل دروس
          مركز شمس، وبدأتُ أفهم قواعدها. الآن أستطيع التحدث بثقة.
        `,
    },
  };

  const testimonialsFourData = {
    uz: {
      title: "Zaynab A.",
      text: `
          O‘qitish jarayoni tushunarli va samarali. Qo‘shimcha
          materiallar beriladi va bu darslarni yanada foydali qiladi,
          shuning uchun har safar ulardan foydalanib bo’lgandan so’ng
          yangi darsni kutaman!
        `,
    },
    ru: {
      title: "Зайнаб А.",
      text: `
          Учебный процесс понятен и эффективен. Дополнительный
          материалы предоставляются, и это делает уроки более полезными,
          так каждый раз после их использования
          Жду нового урока!
        `,
    },
    en: {
      title: "Zainab A.",
      text: `
          The learning process is clear and effective. Additional
          materials are provided, and this makes the lessons more useful,
          so every time after using them
          I look forward to a new lesson!
        `,
    },
    arab: {
      title: "زينب أ.",
      text: `
          عملية التعلم
          واضحة وفعّالة. تتوفر مواد إضافية، مما يجعل الدروس أكثر
          فائدة، لذا في كل مرة أستخدمها، أتطلع إلى درس جديد!
        `,
    },
  };

  const testimonialsFiveData = {
    uz: {
      title: "Abdulloh M.",
      text: `
          Avval ko‘p joylarda arab tili o‘rganganman, lekin bu
          markazning uslubi juda zo‘r! Juda qisqa vaqt ichida CEFR
          imtihoniga tayyor bo‘ldim va natijam ham juda yaxshi bo‘ldi.
          Eng yaxshi o‘quv markazlaridan biri!
        `,
    },
    ru: {
      title: "Абдулла М.",
      text: `
          Раньше я учил арабский язык во многих местах, но это
          стиль хаба отличный! CEFR в очень сжатые сроки
          Я готовился к экзамену, и мой результат был очень хорошим.
          Один из лучших образовательных центров!
        `,
    },
    en: {
      title: "Abdullah M.",
      text: `
          I have studied Arabic in many places before, but this
          hub style is great! CEFR in a very short time
          I was preparing for the exam and my result was very good.
          One of the best educational centers!
        `,
    },
    arab: {
      title: "عبدالله م.",
      text: `
          لقد درستُ اللغة العربية في أماكن عديدة سابقًا، لكن هذا المركز
          رائع! حصلتُ على الإطار الأوروبي المرجعي العام للغات (CEFR)
          في وقت قصير جدًا. كنتُ أستعد للامتحان وكانت نتيجتي ممتازة.
          من أفضل المراكز التع  ليمية!
        `,
    },
  };

  const testimonialsSixData = {
    uz: {
      title: "Xadicha S.",
      text: `
          Men Shams o‘quv markazida 3 oy o‘qib, arab tilida gapirishni
          o‘rgandim. Darslar juda qiziqarli va samarali. Eng yaxshi
          tomoni – darslarni qayta ko‘rib chiqish imkoniyati borligi.
          Chunki bu bilan bilimni yanada mustaxkamlash mumkin!
        `,
    },
    ru: {
      title: "Хадиджа С.",
      text: `
          Я училась в образовательном центре Шамс 3 месяца и научилась говорить по-арабски.
          Я узнал. Уроки очень интересные и эффективные. Лучшее
          сторона – что есть возможность пересматривать уроки.
          Потому что с помощью этих знаний можно еще больше укрепиться!
        `,
    },
    en: {
      title: "Khadija S.",
      text: `
          I studied at the Shams Educational Center for 3 months and learned to speak Arabic.
          I learned. The lessons are very interesting and effective. The best
          side is that there is an opportunity to review the lessons.
          Because with the help of this knowledge you can strengthen yourself even more!
        `,
    },
    arab: {
      title: "خديجة س.",
      text: `
          درستُ في مركز شمس التعليمي لمدة ثلاثة أشهر، وتعلمتُ اللغة العربية.
          تعلمتُ. الدروس شيقة وفعّالة للغاية. والأجمل من ذلك كله هو إمكانية مراجعة الدروس.
          فبمساعدة هذه المعرفة، يمكنك تقوية نفسك أكثر!
        `,
    },
  };

  const testimonialsSevenData = {
    uz: {
      title: "Hasanbek T.",
      text: `
          Oldin arab tilini tushunish menga juda qiyin tuyulardi, lekin
          Shams markazi darslari orqali qisqa vaqt ichida so‘z boyligim
          oshdi va grammatikani tushuna boshladim. Endi ishonch bilan
          gapira olaman!
        `,
    },
    ru: {
      title: "Хасанбек Т.",
      text: `
          Раньше мне было очень трудно понимать арабский, но
          Мой словарный запас за короткое время благодаря урокам центра Шамс
          увеличился, и я начал понимать грамматику. Теперь с уверенностью
          я могу говорить
        `,
    },
    en: {
      title: "Hasanbek T.",
      text: `
         I used to have a hard time understanding Arabic, but
         My vocabulary increased in a short time thanks to the lessons at Shams Center
         and I started to understand the grammar. Now I can speak with confidence
        `,
    },
    arab: {
      title: "حسن بك ت.",
      text: `
          كنتُ أجد صعوبة
          في فهم اللغة العربية، لكن مفرداتي ازدادت بسرعة بفضل دروس
          مركز شمس، وبدأتُ أفهم قواعدها. الآن أستطيع التحدث بثقة.
        `,
    },
  };

  const testimonialsEightData = {
    uz: {
      title: "Zaynab A.",
      text: `
          O‘qitish jarayoni tushunarli va samarali. Qo‘shimcha
          materiallar beriladi va bu darslarni yanada foydali qiladi,
          shuning uchun har safar ulardan foydalanib bo’lgandan so’ng
          yangi darsni kutaman!
        `,
    },
    ru: {
      title: "Зайнаб А.",
      text: `
          Учебный процесс понятен и эффективен. Дополнительный
          материалы предоставляются, и это делает уроки более полезными,
          так каждый раз после их использования
          Жду нового урока!
        `,
    },
    en: {
      title: "Zainab A.",
      text: `
         The learning process is clear and effective. Additional
         materials are provided, and this makes the lessons more useful,
         so every time after using them
         I look forward to a new lesson!
        `,
    },
    arab: {
      title: "زينب أ.",
      text: `
          عملية التعلم
          واضحة وفعّالة. تتوفر مواد إضافية، مما يجعل الدروس أكثر
          فائدة، لذا في كل مرة أستخدمها، أتطلع إلى درس جديد!
        `,
    },
  };

  const testimonialsItemTitles = document.querySelectorAll(
    ".testimonials__item-title"
  );

  const testimonialsItemTexts = document.querySelectorAll(
    ".testimonials__item-text"
  );

  testimonialsItemTitles[0].innerHTML = testimonialsOneData[lang].title;
  testimonialsItemTexts[0].innerHTML = testimonialsOneData[lang].text;
  testimonialsItemTitles[1].innerHTML = testimonialsTwoData[lang].title;
  testimonialsItemTexts[1].innerHTML = testimonialsTwoData[lang].text;
  testimonialsItemTitles[2].innerHTML = testimonialsThreeData[lang].title;
  testimonialsItemTexts[2].innerHTML = testimonialsThreeData[lang].text;
  testimonialsItemTitles[3].innerHTML = testimonialsFourData[lang].title;
  testimonialsItemTexts[3].innerHTML = testimonialsFourData[lang].text;
  testimonialsItemTitles[4].innerHTML = testimonialsFiveData[lang].title;
  testimonialsItemTexts[4].innerHTML = testimonialsFiveData[lang].text;
  testimonialsItemTitles[5].innerHTML = testimonialsSixData[lang].title;
  testimonialsItemTexts[5].innerHTML = testimonialsSixData[lang].text;
  testimonialsItemTitles[6].innerHTML = testimonialsSevenData[lang].title;
  testimonialsItemTexts[6].innerHTML = testimonialsSevenData[lang].text;
  testimonialsItemTitles[7].innerHTML = testimonialsEightData[lang].title;
  testimonialsItemTexts[7].innerHTML = testimonialsEightData[lang].text;

  const contactTitleData = {
    uz: "Ariza qoldiring",
    ru: "Подать заявку",
    en: "Submit an application",
    arab: "تقديم الطلب",
  };

  const contactTextData = {
    uz: `
        Ariza qoldiring, biz esa siz bilan tezkor aloqaga chiqib, o‘quv
        jarayoni, dars jadvali va ta’lim metodikamiz haqida batafsil
        ma’lumot beramiz!
      `,
    ru: `
        Оставьте заявку и мы быстро свяжемся с вами
        Подробности о нашем процессе, расписании занятий и методике обучения
        мы сообщим вам!
      `,
    en: `
        Leave a request and we will contact you quickly
        We will inform you about the details of our process,
        class schedule and teaching methods!
      `,
    arab: `
        اترك طلبًا وسنتواصل معك بسرعة.
        سنُطلعك على تفاصيل عملية التسجيل، وجدول الحصص، وطرق التدريس!
      `,
  };

  const contactContentTitle = document.querySelector(".contact__content-title");

  const contactContentText = document.querySelector(".contact__content-text");

  contactContentTitle.innerHTML = contactTitleData[lang];
  contactContentText.innerHTML = contactTextData[lang];

  const contactInputs = document.querySelectorAll(".contact__form-input");
  const contactSubmit = document.querySelector(".contact__form-submit");

  const contactOneInputData = {
    uz: "Ismingizni kiriting",
    en: "Enter your name",
    ru: "Введите свое имя",
    arab: "أدخل اسمك",
  };

  const contactTwoInputData = {
    uz: "Raqamingizni yozing",
    en: "Write your phone number",
    ru: "Напишите свой номер",
    arab: "اكتب رقم هاتفك",
  };

  const contactBtnData = {
    uz: "Yuborish",
    ru: "Отправка",
    en: "Send",
    arab: "يرسل",
  };

  contactInputs[0].setAttribute("placeholder", contactOneInputData[lang]);
  contactInputs[1].setAttribute("placeholder", contactTwoInputData[lang]);
  contactSubmit.innerHTML = contactBtnData[lang];

  const footerItemLinks = document.querySelectorAll(".footer__item-link");

  const footerItemLinksData = {
    uz: ["Biz haqimizda", "Avzalliklar", "Kurslar", "Savollar"],
    ru: ["O нас", "Преимущества", "Курсы", "Вопросы"],
    en: ["About us", "Advantages", "Courses", "Questions"],
    arab: ["معلومات عنا", "المزايا", "الدورات", "أسئلة"],
  };

  footerItemLinks[0].innerHTML = footerItemLinksData[lang][0];
  footerItemLinks[1].innerHTML = footerItemLinksData[lang][1];
  footerItemLinks[2].innerHTML = footerItemLinksData[lang][2];
  footerItemLinks[3].innerHTML = footerItemLinksData[lang][3];

  const contactTitles = {
    uz: "Aloqa Ma’lumotlari:",
    ru: "Контактная информация:",
    en: "Contact information:",
    arab: "معلومات الاتصال:",
  };

  const footerTelegramContactTitle = document.querySelector(
    ".footer__telegram-contact-title"
  );

  footerTelegramContactTitle.innerHTML = `
    ${contactTitles[lang]}
      <a
        target="_blank"
        class="footer__telegram-contact-link"
        href="https://t.me/Shams_oquvmarkaz_Admin"
      >
        @Shams_oquvmarkaz_Admin
      </a>
    `;

  const footerBottomTextsData = {
    uz: [
      "©2025 Barcha huquqlar himoyalangan",
      "Maxfiylik siyosati",
      "Tez-tez beriladigan savollar",
    ],
    ru: [
      "«©2025 Все права защищены»",
      "Политика конфиденциальности",
      "«Часто задаваемые вопросы»",
    ],
    en: [
      "«©2025 All rights reserved»",
      "Privacy Policy",
      "«Frequently Asked Questions»",
    ],
    arab: [
      "«©2025 جميع الحقوق محفوظة»»،",
      "«سياسة الخصوصية»،",
      "«الأسئلة الشائعة»»،",
    ],
  };

  const footerBottomTexts = document.querySelectorAll(".footer__bottom-text");

  footerBottomTexts[0].innerHTML = footerBottomTextsData[lang][0];
  footerBottomTexts[1].innerHTML = footerBottomTextsData[lang][1];
  footerBottomTexts[2].innerHTML = footerBottomTextsData[lang][2];

  const navbarItemLinks = document.querySelectorAll(".navbar__item-link");

  const navbarLinksLanguages = {
    arab: ["معلومات عنا", "المزايا", "الدورات", "أسئلة", "اتصال"],
    ru: ["O нас", "Преимущества", "Курсы", "Вопросы", "Контакт"],
    en: ["Us about", "Advantages", "Courses", "Questions", "Contact"],
    uz: ["Biz haqimizda", "Avzalliklar", "Kurslar", "Savollar", "Aloqa"],
  };

  navbarItemLinks[0].innerHTML = navbarLinksLanguages[lang][0];
  navbarItemLinks[1].innerHTML = navbarLinksLanguages[lang][1];
  navbarItemLinks[2].innerHTML = navbarLinksLanguages[lang][2];
  navbarItemLinks[3].innerHTML = navbarLinksLanguages[lang][3];
  navbarItemLinks[4].innerHTML = navbarLinksLanguages[lang][4];
}

getLanguageData(language);
