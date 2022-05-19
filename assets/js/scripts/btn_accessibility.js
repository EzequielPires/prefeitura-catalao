let btn_acessibility = document.querySelector('.btn-acessibility');
let modal = document.querySelector('.modal-accessibility');

const showModal = () => {

}

window.addEventListener('load', () => {
    btn_acessibility.addEventListener('mouseover', () => {
        modal.classList.contains('show') ? null : modal.classList.add('show');
    });
    btn_acessibility.addEventListener('mouseleave', () => {
        modal.classList.contains('show') ? modal.classList.remove('show') : null;
    })
})