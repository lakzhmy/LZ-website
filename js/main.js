/**
 * Portfolio Theme Switcher & Main JavaScript
 * Handles light/dark theme toggle with localStorage persistence
 */

// ===========================
// THEME MANAGEMENT
// ===========================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Get theme from localStorage or default to light
const getStoredTheme = () => localStorage.getItem('theme') || 'light';
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

// Apply theme to document
const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    setStoredTheme(theme);
};

// Toggle between light and dark themes
const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
};

// Initialize theme on page load
const initTheme = () => {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);
};

// Event Listeners
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initTheme);

// ===========================
// SMOOTH SCROLL FOR NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for anchor links (not just "#")
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===========================
// LAZY LOADING IMAGES (Performance optimization)
// ===========================

const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
}

// ===========================
// HEADER SCROLL EFFECT (Optional enhancement)
// ===========================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow to header when scrolled
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===========================
// MOBILE MENU TOGGLE (For future enhancement)
// ===========================

// Placeholder for mobile menu functionality if needed
const initMobileMenu = () => {
    // Can be expanded later if hamburger menu is needed
    console.log('Mobile menu initialized');
};

// ===========================
// PROJECT GRID ANIMATIONS (Optional)
// ===========================

const animateProjectCards = () => {
    const cards = document.querySelectorAll('.project-card');

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });
};

// Initialize animations on load
if ('IntersectionObserver' in window) {
    window.addEventListener('load', animateProjectCards);
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Log current theme for debugging
const logCurrentTheme = () => {
    console.log('Current theme:', htmlElement.getAttribute('data-theme'));
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleTheme, getStoredTheme, applyTheme };
}
