const openNavButton = document.getElementById('open-nav');
const closeNavButton = document.getElementById('close-nav');
const nav = document.getElementById('nav-screen');

openNavButton.addEventListener('click', () => {
    nav.style.display = 'flex';
});

closeNavButton.addEventListener('click', () => {
    nav.style.display = 'none';
});
