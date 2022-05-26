import Swiper, {Autoplay, EffectCube, EffectFade, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const story_view = new Swiper(".story-view", {
    modules: [Navigation, Pagination, EffectCube],
    effect: "cube",
    grabCursor: true,
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
    on: {
        reachEnd: function () {
            setTimeout(() => {
                story_view.slideNext(300);
            }, 2500)
        },
        slideChange: function () {
            let story_view_active = story_view.activeIndex;
            let story_view_list = story_view.slides;
            console.log(story_view_active)
            story_view_list[story_view_active].contains(this.el) ?
            setTimeout(() => {
                this.slideNext(300);
            }, 2500) : null;
        },
        afterInit: function () {
            let story_view_active = story_view.activeIndex;
            let story_view_list = story_view.slides;
            story_view_list[story_view_active].contains(this.el) ?
            setTimeout(() => {
                this.slideNext(300);
            }, 2500) : null;
        }
    }
});
