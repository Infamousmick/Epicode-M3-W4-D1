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

// Classe .nav-link.active
const navLinkList = document.querySelectorAll("header .nav-link");
navLinkList.forEach((link) => {
  link.addEventListener("click", () => {
    const oldNavLinkActive = document.querySelector("header .nav-link.active");
    switchActive(oldNavLinkActive, link);
  });
});

// Elemento Icon nella classe .topTitle .right-container
const topTitleIconList = document.querySelectorAll(
  ".topTitle .right-container i",
);
topTitleIconList.forEach((icon) => {
  icon.addEventListener("click", () => {
    const oldtopTitleIcon = document.querySelector(
      ".topTitle .right-container i.active",
    );
    switchActive(oldtopTitleIcon, icon);
  });
});

function switchActive(oldEl, newEl) {
  newEl.classList.add("active");
  oldEl.classList.remove("active");
}

// Extra: Allo scroll anima le righe
const elementList = document.querySelectorAll(
  "#trending .container-fluid, #new .container-fluid, #again .container-fluid",
);

window.addEventListener("scroll", (e) => {
  elementList.forEach((element) => {
    let pos = getPosition(element);

    if (window.scrollY >= pos.yTop && window.scrollY <= pos.yBottom) {
      element.classList.add("section-fade");
    } else {
      // if (element.classList.contains("section-fade")) {
      //   element.classList.remove("section-fade");
      //   element.classList.add("section-fade-reverse");
      // }
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
