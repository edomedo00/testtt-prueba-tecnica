const openNavButton = document.getElementById('open-nav');
const closeNavButton = document.getElementById('close-nav');
const openNavButtonMobile = document.getElementById('open-nav-mobile');
const closeNavButtonMobile = document.getElementById('close-nav-mobile');
const nav = document.getElementById('nav-screen');
const navMobile = document.getElementById('nav-screen-mobile');

openNavButton.addEventListener('click', () => {
    nav.style.display = 'flex';
});

closeNavButton.addEventListener('click', () => {
    nav.style.display = 'none';
});

openNavButtonMobile.addEventListener('click', () => {
    navMobile.style.display = 'flex';
});

closeNavButtonMobile.addEventListener('click', () => {
    navMobile.style.display = 'none';
});
