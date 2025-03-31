const navbar = document.querySelector(".navbar");
const faBars = document.querySelector(".fa-bars");

const navbarLinks = document.querySelectorAll(".navbar__item-link");
const headerContactBtn = document.querySelector(".header-contact-btn");

headerContactBtn.addEventListener("click", function () {
  if (this.children[0].getAttribute("class") === "fa fa-bars") {
    navbar.classList.add("navbar--open");
    this.children[0].setAttribute("class", "fa fa-times");
  } else {
    navbar.classList.remove("navbar--open");
    this.children[0].setAttribute("class", "fa fa-bars");
  }
});

for (const navbarLink of navbarLinks) {
  navbarLink.addEventListener("click", () => {
    navbar.classList.remove("navbar--open");
    headerContactBtn.children[0].setAttribute("class", "fa fa-bars");
  });
}
