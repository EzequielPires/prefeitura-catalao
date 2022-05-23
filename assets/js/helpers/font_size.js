let body = document.querySelector('body');
let increase = document.querySelector('.increase-font');
let decrease = document.querySelector('.decrease-font');
let reset = document.querySelector('.reset-font');
let fontSize = 100;
let increaseDecrease = 6.25;

const changeFontSize = (type) => {
    type === 'increase' ? fontSize = fontSize + increaseDecrease : null;
    type === 'decrease' ? fontSize = fontSize - increaseDecrease : null;

    type === 'increase' ? body.style.fontSize = fontSize + '%' : null;
    type === 'decrease' ? body.style.fontSize = fontSize + '%' : null;
    type === 'reset' ? body.style.fontSize = '100%' : null;
}

window.addEventListener('load', () => {
    body.style.fontSize = '1rem';
    increase.addEventListener('click', () => changeFontSize('increase'));
    decrease.addEventListener('click', () => changeFontSize('decrease'));
    reset.addEventListener('click', () => changeFontSize('reset'));
})