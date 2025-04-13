new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    567: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
});
