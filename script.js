const openNavButton = document.getElementById('open-nav');
const closeNavButton = document.getElementById('close-nav');
const nav = document.getElementById('nav-screen');

openNavButton.addEventListener('click', () => {
    nav.style.display = 'flex';
});

closeNavButton.addEventListener('click', () => {
    nav.style.display = 'none';
});

function updateTextBasedOnResolution() {
    const heroDesc = document.getElementById('hero-description');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
        heroDesc.innerText = "PLAN B webpage is a project designed to highlight a non-profit aiding individuals deprived of their liberty. The site features a vibrant, edgy urban design that enhances their image and attracts more donors, emphasizing their impactful work. Its sustainable and enduring design ensures long-term viability, efficient resource use.";
    } else {
        heroDesc.innerText = "The Branch is not for profit and not for sale. We’re not here to get you to buy anything, generate clicks, or to convert to a party. We’re here to be your flashlight for the dark corners of the Internet as we help make sense of the world. So, if you want to silence the echo chambers and restore your faith in good faith, join us.";
    }
}

// Call the function on window resize and when the page loads
window.addEventListener('resize', updateTextBasedOnResolution);
window.addEventListener('load', updateTextBasedOnResolution);