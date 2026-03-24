const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let header = document.getElementById('header');

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

menuHamburguer.addEventListener('click', () => {
  nav.classList.toggle('active');
});

links.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('active');
  })
})

window.addEventListener('resize', () => {
  swiper.params.slidesPerView = handleWidth();
  swiper.update();
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    header.style.background = '#191919'
  } else {
    header.style.background = 'transparent'
  }

});
