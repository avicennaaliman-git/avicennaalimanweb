// Minimalist Portfolio Interactive Script

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});


// Add fade-in class to CSS (but since we can't edit CSS here, assume it's added)
// In style.css, add: .fade-in { opacity: 1; transform: translateY(0); transition: opacity 0.6s, transform 0.6s; }
// And set initial: section { opacity: 0; transform: translateY(20px); }

// For project cards hover effect (already in CSS)

// Optional: Add a simple loading animation or other interactions if needed