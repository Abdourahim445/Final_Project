// Smooth scrolling navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});

// Custom cursor animation
document.body.style.cursor = 'url(custom-cursor.png), auto';

// Dynamic theme switching
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Typing effect for headlines
function typingEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const headline = document.getElementById('typing-effect');
typingEffect(headline, headline.textContent, 100);

// Loading animations
window.addEventListener('load', () => {
    document.querySelector('body').classList.add('loaded');
});
