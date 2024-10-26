document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add parallax effect to profile image
    const profileImage = document.querySelector('.profile-image');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        profileImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });

    // Add hover effect to cake layers
    const cakeLayers = document.querySelectorAll('.cake-layer');
    cakeLayers.forEach(layer => {
        layer.addEventListener('mouseover', () => {
            layer.style.transform = 'scale(1.1)';
        });
        layer.addEventListener('mouseout', () => {
            layer.style.transform = 'scale(1)';
        });
    });
});