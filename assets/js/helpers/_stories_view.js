import Swiper, {Autoplay, EffectCube, EffectFade, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
let story = document.querySelector('.story');
let stories_buttons = document.querySelectorAll('.story-item');
let btn_close = document.querySelector('.story-close');

const story_view = new Swiper(".story-view", {
    modules: [Navigation, Pagination, EffectCube],
    effect: "cube",
    navigation: {
        nextEl: ".swiper-button-next-story",
        prevEl: ".swiper-button-prev-story",
    },
});
const story_view_gallery = new Swiper(".story-view-gallery", {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    effect: "fade",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
window.addEventListener('load', ()  => {
    btn_close.addEventListener('click', () => {
        story.classList.remove('show');
    })
    stories_buttons.forEach(item => {
        item.addEventListener('click', () => {
            story.classList.add('show');
        })
    })
})
