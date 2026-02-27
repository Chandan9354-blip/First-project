// simple interactivity: mobile menu toggle and dark mode
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const darkToggle = document.getElementById('dark-toggle');

hamburger && hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

darkToggle && darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
