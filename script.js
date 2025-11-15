// Enhanced JavaScript for Professional Portfolio

// Form submission handling with validation and Formspree integration
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.querySelector('#contact-form input[type="email"]');
    const messageInput = document.querySelector('#contact-form textarea');

    // Validate name
    if (nameInput) {
        const nameValue = nameInput.value.trim();
        const nameValid = /^[A-Za-z ]+$/.test(nameValue);
        if (!nameValid) {
            e.preventDefault();
            nameInput.setCustomValidity('Please enter your name using letters (A–Z) and spaces only.');
            nameInput.reportValidity();
            nameInput.focus();
            setTimeout(() => nameInput.setCustomValidity(''), 3000);
            return;
        }
    }

    // Validate email with custom regex for better validation
    if (emailInput) {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            e.preventDefault();
            emailInput.setCustomValidity('Please enter a valid email address (e.g., user@example.com)');
            emailInput.reportValidity();
            emailInput.focus();
            setTimeout(() => emailInput.setCustomValidity(''), 3000);
            return;
        }
    }

    // Validate message
    if (messageInput && messageInput.value.trim().length < 10) {
        e.preventDefault();
        messageInput.setCustomValidity('Please enter a message with at least 10 characters.');
        messageInput.reportValidity();
        setTimeout(() => messageInput.setCustomValidity(''), 3000);
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('#contact-form button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    e.preventDefault();

    // Prepare form data for Formspree
    const formData = new FormData(this);

    // Submit to Formspree via AJAX
    fetch('https://formspree.io/f/myzljprn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Mobile navigation toggle
const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.classList.remove('show');
    } else {
        // Scrolling up
        nav.classList.add('show');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Profile image click event removed - no zoom or rotation effect

// Skill-dots generator: creates 5 dots for each .tech-badge based on data-level
document.addEventListener('DOMContentLoaded', function() {
    const badges = document.querySelectorAll('.tech-badge');
    badges.forEach(badge => {
        const levelAttr = badge.getAttribute('data-level') || '0';
        const level = parseFloat(levelAttr);
        const dotsContainer = badge.querySelector('.skill-dots');
        if (!dotsContainer) return;

        // Clear any existing
        dotsContainer.innerHTML = '';

        for (let i = 1; i <= 5; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');

            const diff = level - (i - 1);
            if (diff >= 1) {
                dot.classList.add('filled');
            } else if (diff >= 0.5) {
                dot.classList.add('half');
            }

            dot.setAttribute('aria-hidden', 'true');
            dotsContainer.appendChild(dot);
        }

        // For accessibility, expose current rating on focus via aria-describedby
        const ratingText = `${levelAttr} out of 5`;
        badge.setAttribute('aria-describedby', 'rating-' + badge.textContent.trim());
        const sr = document.createElement('span');
        sr.id = 'rating-' + badge.textContent.trim();
        sr.style.position = 'absolute';
        sr.style.left = '-9999px';
        sr.style.width = '1px';
        sr.style.height = '1px';
        sr.style.overflow = 'hidden';
        sr.textContent = ratingText;
        badge.appendChild(sr);
    });

    // Name input sanitization and paste handling
    const nameInput = document.getElementById('name-input');
    if (nameInput) {
        // Prevent typing invalid characters by sanitizing on input
        nameInput.addEventListener('input', (e) => {
            const cursorPos = e.target.selectionStart;
            const cleaned = e.target.value.replace(/[^A-Za-z ]+/g, '');
            if (cleaned !== e.target.value) {
                e.target.value = cleaned;
                // try to restore cursor position
                e.target.setSelectionRange(cursorPos - 1, cursorPos - 1);
            }
            // Clear any previous custom validity when user types
            e.target.setCustomValidity('');
        });

        // Handle paste: remove invalid chars from pasted text
        nameInput.addEventListener('paste', (e) => {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const cleaned = paste.replace(/[^A-Za-z ]+/g, '');
            // Insert cleaned text at cursor position
            const start = nameInput.selectionStart;
            const end = nameInput.selectionEnd;
            const value = nameInput.value;
            nameInput.value = value.slice(0, start) + cleaned + value.slice(end);
            const newPos = start + cleaned.length;
            nameInput.setSelectionRange(newPos, newPos);
        });
    }
});