
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('profile-img');
    img.style.transition = 'opacity 0.3s';

    function switchImage(src) {
        img.style.opacity = '0.3';
        setTimeout(() => {
            img.src = src;
            img.style.opacity = '1';
        }, 150);
    }

    img.addEventListener('mouseenter', function() {
        switchImage('img/profilrl.png');
    });
    img.addEventListener('mouseleave', function() {
        switchImage('img/profilanim.png');
    });
});

// Intersection Observer untuk transisi section
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            // Hanya trigger sekali
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Terapkan observer ke semua section dengan class section-transition
document.querySelectorAll('.section-transition').forEach(section => {
    sectionObserver.observe(section);
});