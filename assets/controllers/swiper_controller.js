import {Controller} from "@hotwired/stimulus";
import 'swiper/css/bundle';
import Swiper, {Navigation, Pagination, EffectCube, EffectFade, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, EffectCube, EffectFade, Autoplay]);


export default class extends Controller {
    _swiper = null;

    connect() {
        console.log(this.element)
        const _run = () => this._init(this.element);
        _run();
    }

    _init = (element) => {
        let options = {
            slidesPerView: element.dataset.perview ?? 'auto',
            spaceBetween: Number(element.dataset.between ?? 10),
            slidesPerGroup: Number(element.dataset.pergroup ?? 1),
            centeredSlides: element.dataset.centered ?? false,
        };

        const navigation = () => {
            options['navigation'] = {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }
        const cubeEffect = () => {
            options['effect'] = 'cube';
            options['grabCursor'] = true;
            options['cubeEffect'] = {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }
        }

        const pagination = () => {
            options['pagination'] = {
                el: ".swiper-pagination",
                clickable: true,
            }
        }

        const autoplay = () => {
            options['autoplay'] = {
                delay: 2500,
                    disableOnInteraction: false,
            }
        }

        const observer = () => {
            options['observer'] = true;
            options['observeParents'] = true;
        }
        element.dataset.effect ? cubeEffect() : false;
        element.dataset.navigation ? navigation() : false;
        element.dataset.pagination ? pagination() : false;
        element.dataset.observer ? observer() : false;
        element.dataset.autoplay ? autoplay() : false;


        this._start(element, options);
    }

    _start = (element, options) => {
        console.log(options);
        this._swiper = new Swiper(element, options);
    }
}