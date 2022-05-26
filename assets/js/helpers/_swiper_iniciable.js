import Swiper, {EffectCube, Navigation, Pagination} from 'swiper';
import '../../styles/swiper_stories.css';
import '../../styles/swiper_notices_wall.css';
import '../../styles/swiper_city_gallery.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper-stories', {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiper_notices_all = new Swiper('.swiper-notices-wall', {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiper_city_gallery = new Swiper('.swiper-city-gallery', {
    modules: [Navigation, Pagination],
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
