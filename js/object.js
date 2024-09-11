const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

closeMenu.addEventListener('click', function() {
    navLinks.classList.remove('active');
});