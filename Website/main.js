const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const mockups = document.querySelector('.mockups');

hamburger.setAttribute('aria-expanded', 'false');

hamburger.addEventListener('click', () => {
    const isOpened = hamburger.getAttribute('aria-expanded');

    if (isOpened === 'false') {
        hamburger.setAttribute('aria-expanded', 'true');
        overlay.style.zIndex = '2';
        overlay.style.opacity = '1';
    } else {
        hamburger.setAttribute('aria-expanded', 'false');
        overlay.style.zIndex = '-1';
        overlay.style.opacity = '0';
    }
});


if (window.screen.width >= 900) {
    mockups.classList.remove('slide-in-top');
    mockups.classList.add('slide-in-right');
}