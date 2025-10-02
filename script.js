// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'visible';
        
        // Start animations after loading
        initializeAnimations();
        startCounterAnimations();
    }, 1500);
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollTop > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Enhanced Parallax Effects
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    
    // Hero section parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroImage = hero.querySelector('.hero-bg-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
        }
    }
    
    // About section parallax
    const about = document.querySelector('.about');
    if (about && scrolled > about.offsetTop - window.innerHeight) {
        const aboutOffset = scrolled - (about.offsetTop - window.innerHeight);
        about.style.transform = `translateY(${aboutOffset * -0.05}px)`;
    }
    
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxUpdate);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Initialize animations
function initializeAnimations() {
    const animateElements = document.querySelectorAll('.feature, .testimonial-card, .faq-item, .section-header');
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Observe hero stats for counter animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Start counter animations (called after loading)
function startCounterAnimations() {
    // This will be triggered by intersection observer
}

// FAQ Toggle Functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Enhanced hover effects for buttons
document.querySelectorAll('.cta-button, .hero-cta').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Image hover effects
document.querySelectorAll('.about-image, .before-after').forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Form validation (for future forms)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        
        if (!value) {
            isValid = false;
            input.classList.add('error');
            showFieldError(input, 'This field is required');
        } else {
            input.classList.remove('error');
            hideFieldError(input);
            
            // Email validation
            if (input.type === 'email' && !isValidEmail(value)) {
                isValid = false;
                input.classList.add('error');
                showFieldError(input, 'Please enter a valid email address');
            }
            
            // Phone validation
            if (input.type === 'tel' && !isValidPhone(value)) {
                isValid = false;
                input.classList.add('error');
                showFieldError(input, 'Please enter a valid phone number');
            }
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function showFieldError(field, message) {
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

function hideFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 tracking would go here
    console.log('Event tracked:', eventName, eventData);
    
    // Example: gtag('event', eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('a[href*="calendly"], a[href*="forms"], .cta-button').forEach(link => {
    link.addEventListener('click', function() {
        const linkText = this.textContent.trim();
        const linkHref = this.href;
        
        trackEvent('cta_click', {
            link_text: linkText,
            link_url: linkHref,
            page_location: window.location.href
        });
    });
});

// Track section views
const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionName = entry.target.id || entry.target.className;
            trackEvent('section_view', {
                section_name: sectionName,
                page_location: window.location.href
            });
        }
    });
}, { threshold: 0.5 });

// Observe main sections
document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
    
    // Space or Enter on FAQ questions
    if ((e.key === ' ' || e.key === 'Enter') && e.target.classList.contains('faq-question')) {
        e.preventDefault();
        toggleFAQ(e.target);
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler for performance
const debouncedScrollHandler = debounce(() => {
    // Additional scroll-based functionality can go here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add dynamic year to copyright
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-legal p');
    copyrightElements.forEach(el => {
        if (el.textContent.includes('2024')) {
            el.textContent = el.textContent.replace('2024', currentYear);
        }
    });
});

// Progressive Web App features (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker registration would go here
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Error tracking would go here
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Error tracking would go here
});

// Gallery Modal Functionality
const galleryImages = [
    {
        src: 'images/IMG_4693.png',
        title: 'Early Transformation',
        description: 'The beginning of the journey - building discipline and structure'
    },
    {
        src: 'images/IMG_4834.png',
        title: 'Progress Phase',
        description: 'Consistent training and nutrition paying off'
    },
    {
        src: 'images/IMG_4380.jpg',
        title: 'Breakthrough Moment',
        description: 'When everything clicked - mindset and physique aligned'
    },
    {
        src: 'images/IMG_6041.png',
        title: 'Continued Growth',
        description: 'Pushing beyond limits and setting new standards'
    },
    {
        src: 'images/98CA2511-0A9C-45BB-B085-6EF0C478482E.jpg',
        title: 'Current State',
        description: 'The result of 3 years of relentless progress and ownership'
    }
];

let currentImageIndex = 0;

function openGallery(startIndex = 0) {
    currentImageIndex = startIndex;
    const modal = document.getElementById('gallery-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    showImage(currentImageIndex);
    
    // Track gallery open event
    trackEvent('gallery_opened', {
        start_image: startIndex,
        page_location: window.location.href
    });
}

function closeGallery() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'visible';
    
    // Track gallery close event
    trackEvent('gallery_closed', {
        final_image: currentImageIndex,
        page_location: window.location.href
    });
}

function showImage(index) {
    if (index < 0 || index >= galleryImages.length) return;
    
    currentImageIndex = index;
    const mainImage = document.getElementById('gallery-main-image');
    const title = document.getElementById('gallery-title');
    const description = document.getElementById('gallery-description');
    
    // Update main image
    mainImage.src = galleryImages[index].src;
    mainImage.alt = galleryImages[index].title;
    
    // Update info
    title.textContent = galleryImages[index].title;
    description.textContent = galleryImages[index].description;
    
    // Update thumbnails
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Track image view
    trackEvent('gallery_image_viewed', {
        image_index: index,
        image_title: galleryImages[index].title
    });
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(nextIndex);
}

function previousImage() {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(prevIndex);
}

// Keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('gallery-modal');
    if (!modal.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeGallery();
            break;
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
});

// Touch/swipe support for mobile gallery
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('gallery-modal').addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('gallery-modal').addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextImage(); // Swipe left - next image
        } else {
            previousImage(); // Swipe right - previous image
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('The Blueprint Coaching website loaded successfully');
    
    // Add any additional initialization here
    initializeAnimations();
    
    // Preload critical images
    const criticalImages = [
        'images/IMG_4380.jpg',
        'images/IMG_4693.png',
        'images/IMG_4834.png',
        'images/IMG_6041.png',
        'images/98CA2511-0A9C-45BB-B085-6EF0C478482E.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Initialize gallery thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => showImage(index));
    });
});