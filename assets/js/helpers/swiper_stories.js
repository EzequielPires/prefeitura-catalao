import Swiper from 'swiper';
import '../../styles/swiper_stories.css';
import '../../styles/swiper_notices_wall.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper-stories', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiper_notices_all = new Swiper('.swiper-notices-wall', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});