document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggleBtn.textContent = document.body.classList.contains('light-theme')
            ? '🌙 Dark Mode'
            : '☀️ Light Mode';
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navlist = document.querySelector('.navlist');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navlist.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.navlist a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navlist.classList.remove('active');
        });
    });

    // ScrollReveal Animations
    ScrollReveal({
        distance: '80px',
        duration: 1000,
        delay: 150,
        reset: true
    });

    ScrollReveal().reveal('.navbar', { origin: 'top' });
    ScrollReveal().reveal('.container h1', { origin: 'left' });
    ScrollReveal().reveal('.tagline', { origin: 'bottom' });
    ScrollReveal().reveal('.intro', { origin: 'left' });
    ScrollReveal().reveal('.buttons', { origin: 'bottom' });
    ScrollReveal().reveal('.about ul', { origin: 'left' });
    ScrollReveal().reveal('.skills-grid', { origin: 'top' });
    ScrollReveal().reveal('.project-box', { origin: 'bottom', interval: 150 });
    ScrollReveal().reveal('form', { origin: 'left' });
    ScrollReveal().reveal('.social-links', { origin: 'bottom' });

    // Smooth Scroll
    document.querySelectorAll('.navlist a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});