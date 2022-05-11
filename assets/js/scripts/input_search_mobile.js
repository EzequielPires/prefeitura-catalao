let btn = document.querySelector('.btn-search');
let btn_cancel = document.querySelector('.btn-cancel');
let btn_menu = document.getElementById('btn-menu');
let menu = document.querySelector('.menu-aside');
let input = document.querySelector('.input-search-mobile');

const showMenuAside = () => {
    btn.classList.contains('show') ? btn.classList.remove('show') : btn.classList.add('show');
    input.classList.contains('show') ? input.classList.remove('show') : input.classList.add('show');
    menu.classList.contains('show') && menu.classList.remove('show');
    btn_menu.classList.contains('show') && btn_menu.classList.remove('show');
};
const run = () => {
    btn.addEventListener('click', showMenuAside);
    btn_cancel.addEventListener('click', showMenuAside);
    input.addEventListener('submit', (e) => e.preventDefault())
};
window.addEventListener('load', run);