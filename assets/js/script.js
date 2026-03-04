// Inizializzo SlideJS
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".trending-swiper", {
    loop: true,
    watchSlidesProgress: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 5,
        allowTouchMove: true,
      },

      768: {
        slidesPerView: 4.2,
        spaceBetween: 5,
        allowTouchMove: true,
      },
      992: {
        slidesPerView: 6.2,
        spaceBetween: 5,
        allowTouchMove: false,
      },
    },
  });
});
