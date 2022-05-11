let btn = document.getElementById('btn-menu');
let menu = document.querySelector('.menu-aside');

const showMenuAside = () => {
    btn.classList.contains('show') ? btn.classList.remove('show') : btn.classList.add('show');
    menu.classList.contains('show') ? menu.classList.remove('show') : menu.classList.add('show');
};
const run = () => btn.addEventListener('click', showMenuAside);
window.addEventListener('load', run);

