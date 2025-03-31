const navbar = document.querySelector(".navbar");
const faBars = document.querySelector(".fa-bars");

const navbarLinks = document.querySelectorAll(".navbar__item-link");
const headerContactBtn = document.querySelector(".header-contact-btn");

const closeNavbar = () => {
  navbar.classList.remove("navbar--open");
  headerContactBtn.children[0].setAttribute("class", "fa fa-bars");
};

headerContactBtn.addEventListener("click", function () {
  if (this.children[0].getAttribute("class") === "fa fa-bars") {
    navbar.classList.add("navbar--open");
    this.children[0].setAttribute("class", "fa fa-times");
  } else {
    closeNavbar();
  }
});

for (const navbarLink of navbarLinks) {
  navbarLink.addEventListener("click", () => {
    closeNavbar();
  });
}

navbar.addEventListener("click", (e) => {
  if (e.target.classList.contains("navbar--open")) {
    closeNavbar();
  }
});
