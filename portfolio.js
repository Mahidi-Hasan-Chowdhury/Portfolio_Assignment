// Typing Animation
const typingText = document.querySelector('.typing-text');
const text = 'Full Stack Web Developer';
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// Start typing when page loads
window.addEventListener('load', () => {
    setTimeout(type, 500);
});

// Simple fade-in on page load
window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100); 
    });
});



// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});