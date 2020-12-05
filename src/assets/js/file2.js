import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);
var mySwiper = new Swiper('.swiper-container', {
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
