const menuBtn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('#mainNav');

menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    nav.hidden = expanded;
});
