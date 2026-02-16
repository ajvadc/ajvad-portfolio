// ============================================
// Ajvad Cheniyath - Portfolio JavaScript
// ============================================

// ============ SMOOTH SCROLL BEHAVIOR ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeIn 0.8s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============ NAVBAR SCROLL EFFECT ============
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 10) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    }
    
    lastScrollTop = scrollTop;
});

// ============ ACTIVE NAV LINK ============
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ============ CARD HOVER EFFECTS ============
const cards = document.querySelectorAll('.project-card, .education-card, .cert-card, .experience-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

// ============ SKILL TAGS ANIMATION ============
const skillTags = document.querySelectorAll('.skill-tag, .tech-tag, .skill-item');

skillTags.forEach((tag, index) => {
    tag.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
    
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============ BUTTON RIPPLE EFFECT ============
const buttons = document.querySelectorAll('.btn, .contact-btn, .project-link');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
    });
});

// ============ COUNTER ANIMATION ============
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', () => {
    // Animate hero content
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        heroTitle.style.animation = 'slideInLeft 0.8s ease-out 0.3s both';
    }
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'slideInRight 0.8s ease-out 0.4s both';
    }
    if (heroDescription) {
        heroDescription.style.animation = 'fadeIn 0.8s ease-out 0.5s both';
    }
    if (heroButtons) {
        heroButtons.style.animation = 'scaleUp 0.8s ease-out 0.6s both';
    }
});

// ============ MOBILE MENU (Future Enhancement) ============
const handleMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
    }
};

window.addEventListener('resize', handleMobileMenu);

// ============ PARALLAX EFFECT ============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroElement = document.querySelector('.hero::before');
    if (heroElement) {
        // Subtle parallax effect
    }
});

// ============ CONSOLE GREETING ============
console.log('%c Welcome to Ajvad\'s Portfolio! ', 'background: #667eea; color: white; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 14px;');
console.log('%c Feel free to check out the code and reach out for collaborations! ', 'color: #667eea; font-size: 12px;');
console.log('%c LinkedIn: https://linkedin.com/in/ajvadc ', 'color: #764ba2; font-size: 12px;');

// ============ INTERSECTION OBSERVER FOR ELEMENTS ============
const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            elementObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card, .skill-category, .cert-card').forEach(el => {
    elementObserver.observe(el);
});

// ============ SKELETON LOADING ============
function hideSkeletonLoaders() {
    // Hide all skeleton loaders and show content
    ['hero', 'projects', 'skills', 'certifications'].forEach(section => {
        const skeleton = document.getElementById(`${section}-skeleton`);
        const content = document.getElementById(`${section}-content`);
        
        if (skeleton) {
            skeleton.classList.add('hidden');
            setTimeout(() => {
                skeleton.style.display = 'none';
            }, 300);
        }
        
        if (content) {
            content.classList.add('visible');
        }
    });
}

// Load skeleton for 1.5 seconds, then show content
window.addEventListener('load', () => {
    // Small delay to show skeleton effect
    setTimeout(hideSkeletonLoaders, 1500);
});

// Also hide on DOMContentLoaded if already loaded
document.addEventListener('DOMContentLoaded', () => {
    // If content is already loaded, hide skeleton immediately
    if (document.readyState === 'complete') {
        hideSkeletonLoaders();
    }
});

// ============ CAROUSEL FUNCTIONALITY ============
const carouselState = {
    projects: 0,
    skills: 0,
    certifications: 0
};

function initializeCarousels() {
    ['projects', 'skills', 'certifications'].forEach(type => {
        const carousel = document.getElementById(`${type}-carousel`);
        const indicatorsContainer = document.getElementById(`${type}-indicators`);
        
        if (carousel) {
            const items = carousel.children.length;
            
            // Create indicators
            for (let i = 0; i < items; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(type, i));
                indicatorsContainer.appendChild(dot);
            }
        }
    });
}

function slideCarousel(type, direction) {
    const carousel = document.getElementById(`${type}-carousel`);
    const items = carousel.children.length;
    
    carouselState[type] += direction;
    
    // Loop around
    if (carouselState[type] >= items) {
        carouselState[type] = 0;
    } else if (carouselState[type] < 0) {
        carouselState[type] = items - 1;
    }
    
    updateCarousel(type);
}

function goToSlide(type, index) {
    carouselState[type] = index;
    updateCarousel(type);
}

function updateCarousel(type) {
    const carousel = document.getElementById(`${type}-carousel`);
    const offset = -carouselState[type] * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    document.querySelectorAll(`#${type}-indicators .carousel-dot`).forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === carouselState[type]) {
            dot.classList.add('active');
        }
    });
}

// Initialize carousels when page loads
document.addEventListener('DOMContentLoaded', initializeCarousels);

// ============ SHOW MORE CERTIFICATIONS (REMOVED - Now using Carousel) ============
