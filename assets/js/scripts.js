const menuHamburguer = document.querySelector(".menu-hamburguer");
const nav = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar-links li a");
const overlay = document.querySelector(".menu-overlay");

let header = document.getElementById("header");

let swiper = createSwiper(
  ".mySwiper",
  ".swiper-pagination",
  ".swiper-button-next",
  ".swiper-button-prev"
);

function createSwiper(container, pagination, nextButton, prevButton) {
  return new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,

    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,

    pagination: {
      el: pagination,
      clickable: true,
    },

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
  });
}

function handleWidth() {
  let width = window.innerWidth;

  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
}

window.addEventListener("resize", () => {
  swiper.params.slidesPerView = handleWidth();
  swiper.update();
});

menuHamburguer.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");
});

links.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
});

document.addEventListener("click", (event) => {
  const isInsideMenu = nav.contains(event.target);
  const isButton = menuHamburguer.contains(event.target);

  if (!isInsideMenu && !isButton && nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    header.style.background = "#191919";
  } else {
    header.style.background = "transparent";
  }
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active-link"));

    link.classList.add("active-link");

    const target = link.getAttribute("href");

    setTimeout(() => {
      nav.classList.remove("active");

      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });

    }, 300);
  });
});