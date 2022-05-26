const btn = document.querySelector('.btn-theme');
const handleThemeDark = () => {
    btn.classList.add('dark');
    document.body.style.setProperty('--main', '#1d1d1d');
    document.body.style.setProperty('--main-light', '#000');
    document.body.style.setProperty('--background', '#111');
    document.body.style.setProperty('--secondary-background', '#1d1d1d');
    document.body.style.setProperty('--grey-100', '#F8B917');
    document.body.style.setProperty('--grey-300', '#F8B917');
    document.body.style.setProperty('--grey-500', '#F8B917');
    document.body.style.setProperty('--secondary', '#F8B917');
    document.body.style.setProperty('--text', 'rgba(255, 255, 255, 0.8)');
    document.body.style.setProperty('--white', '#1d1d1d');
}
const handleThemeDefault = () => {
    btn.classList.remove('dark');
    document.body.style.setProperty('--main', '#FAA21C');
    document.body.style.setProperty('--main-light', '#F8B917');
    document.body.style.setProperty('--background', '#fafafa');
    document.body.style.setProperty('--secondary-background', '#26893A');
    document.body.style.setProperty('--grey-100', '#1d1d1d');
    document.body.style.setProperty('--grey-300', '#333');
    document.body.style.setProperty('--grey-500', '#555');
    document.body.style.setProperty('--secondary', '#26893A');
    document.body.style.setProperty('--text', '#555');
    document.body.style.setProperty('--white', '#fff');
}
const setTheme = () => {
    btn.classList.contains('dark') ? handleThemeDefault() : handleThemeDark();
}
window.addEventListener('load', () => {
    btn.addEventListener('click', setTheme);
})
