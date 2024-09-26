const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.navKeys');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('toggle');
});
