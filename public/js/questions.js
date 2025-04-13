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

  localStorage.setItem("lang", icons[i].getAttribute("data-lang"));

  getLanguageData(icons[i].getAttribute("data-lang"));

  headerTopText.innerHTML = icons[i].children[0].innerHTML;
};

hideIcon();

const returnLang = (lang) => {
  if (lang === "uz") {
    return 0;
  } else if (lang === "en") {
    return 1;
  } else if (lang === "ru") {
    return 2;
  } else {
    return 3;
  }
};

showIcon(returnLang(language));

icons.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    hideIcon();
    showIcon(i);

    openLanguages();
  });
});

const playText = {
  uz: "Video Ko'rish Qo'llanma",
  ru: "Руководство по просмотру видео",
  en: "Video Watch Guide",
  arab: "دليل مشاهدة الفيديو",
};

const renderPlayText = (lang) => {
  const newText = playText[lang]
    .split("")
    .map((char, i) => {
      return `<span style="transform:rotate(${i * 15}deg)">${char}</span>`;
    })
    .join("");

  text.innerHTML = newText;
};

renderPlayText(language);

const observer = new MutationObserver((mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      const lang = mutation.target.innerHTML.trim();

      console.log(lang);

      if (lang === "English") {
        renderPlayText("en");
      }
      if (lang === "O'zbek") {
        renderPlayText("uz");
      }
      if (lang === "Arab") {
        renderPlayText("arab");
      }
      if (lang === "Русский") {
        renderPlayText("ru");
      }
    }
  }
});

observer.observe(headerTopText, {
  childList: true,
  subtree: true,
});
