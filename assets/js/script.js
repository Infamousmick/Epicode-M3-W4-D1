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

// Extra: Allo scroll anima le righe
const elementList = document.querySelectorAll(
  "#trending .swiper, #new .swiper, #again .swiper",
);

window.addEventListener("scroll", (e) => {
  elementList.forEach((element) => {
    let pos = getPosition(element);

    if (window.scrollY >= pos.yTop && window.scrollY <= pos.yBottom) {
      element.classList.add("section-fade");
    } else {
      element.classList.remove("section-fade");
    }
  });
});

function getPosition(element) {
  let rect = element.getBoundingClientRect();
  return {
    yTop: rect.top,
    yBottom: rect.bottom,
  };
}
