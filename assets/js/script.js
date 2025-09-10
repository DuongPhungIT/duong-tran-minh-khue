// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const statNumbers = document.querySelectorAll('.stat-number');

// Mobile Navigation Toggle
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger clicked!'); // Debug log
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle body scroll
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Add touch support for mobile
hamburger.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log('Hamburger touched!'); // Debug log
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Animated counter for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            
            // Animate statistics when they come into view
            if (entry.target.classList.contains('hero-stats')) {
                entry.target.querySelectorAll('.stat-number').forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('[data-aos], .hero-stats').forEach(el => {
    observer.observe(el);
});

// Gallery rendering functions
function renderGallery(category = 'all') {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) {
        console.error('Không tìm thấy phần tử gallery-grid');
        return;
    }

    if (typeof window.getImagesByCategory !== 'function') {
        console.error('getImagesByCategory không khả dụng. Kiểm tra assets/js/gallery-data.js đã được load đúng thứ tự.');
        galleryGrid.innerHTML = '<div style="text-align:center;padding:2rem;">Không tải được dữ liệu thư viện. Vui lòng tải lại trang.</div>';
        return;
    }

    const images = getImagesByCategory(category) || [];
    console.log('🔎 renderGallery:', category, '→', images.length, 'ảnh');
    
    galleryGrid.innerHTML = '';

    if (!Array.isArray(images) || images.length === 0) {
        galleryGrid.innerHTML = '<div style="text-align:center;padding:2rem;">Chưa có ảnh trong danh mục này.</div>';
        updateGalleryItemsReference();
        updateGalleryStats();
        return;
    }
    
    images.forEach(image => {
        // Use thumbnail for local images to speed up grid loading
        const isLocalImage = typeof image.src === 'string' && image.src.startsWith('assets/images/');
        const thumbSrc = isLocalImage
            ? image.src.replace('assets/images/', 'assets/thumbs/')
            : image.src;

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', image.category);
        galleryItem.setAttribute('data-id', image.id);
        
        galleryItem.innerHTML = `
            <img src="${thumbSrc}" alt="${image.alt}" loading="lazy" data-full-src="${image.src}">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
                <i class="${image.icon}"></i>
            </div>
        `;
        
        // Add click event for lightbox using full image
        galleryItem.addEventListener('click', () => {
            const imgEl = galleryItem.querySelector('img');
            const fullSrc = imgEl?.getAttribute('data-full-src') || image.src;
            openLightbox({ ...image, src: fullSrc });
        });
        
        galleryGrid.appendChild(galleryItem);
    });
    
    // Update gallery items reference
    updateGalleryItemsReference();

    // Ensure loading animation applies to newly added images
    try { addImageLoadingAnimation(); } catch (_) {}
}

function openLightbox(image) {
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightboxCaption.innerHTML = `<h3>${image.title}</h3><p>${image.description}</p>`;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateGalleryItemsReference() {
    // Update global galleryItems reference
    window.galleryItems = document.querySelectorAll('.gallery-item');
}

function updateGalleryStats() {
    const stats = getImageStats();
    
    document.getElementById('total-images').textContent = stats.total;
    document.getElementById('birth-count').textContent = stats.birth || 0;
    document.getElementById('monthly-count').textContent = stats.monthly || 0;
    document.getElementById('activities-count').textContent = stats.activities || 0;
    document.getElementById('thoi-noi-count').textContent = stats['thoi-noi'] || 0;
    document.getElementById('family-count').textContent = stats.family || 0;
}

// Gallery filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderGallery(filter);
    });
});

// Lightbox functionality
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Parallax effect for hero section - completely disabled for mobile
window.addEventListener('scroll', () => {
    // Completely disable parallax on mobile devices for better performance
    if (window.innerWidth <= 768 || /Android/i.test(navigator.userAgent) || isMobile()) {
        return;
    }
    
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.2; // Further reduced intensity
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Timeline animation on scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transition = 'all 0.8s ease';
    
    if (item.classList.contains('timeline-item:nth-child(odd)') || 
        item.classList.contains('timeline-item:nth-child(even)')) {
        item.style.transform = 'translateX(-50px)';
    } else {
        item.style.transform = 'translateX(50px)';
    }
    
    timelineObserver.observe(item);
});

// Memory cards hover effect
const memoryCards = document.querySelectorAll('.memory-card');
memoryCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Image stack hover effect
const imageStack = document.querySelector('.image-stack');
if (imageStack) {
    imageStack.addEventListener('mouseenter', () => {
        const images = imageStack.querySelectorAll('.stacked-image');
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.transform = 'rotate(0deg) scale(1.05)';
            }, index * 100);
        });
    });
    
    imageStack.addEventListener('mouseleave', () => {
        const images = imageStack.querySelectorAll('.stacked-image');
        images.forEach((img, index) => {
            setTimeout(() => {
                if (index === 0) img.style.transform = 'rotate(-5deg)';
                else if (index === 1) img.style.transform = 'rotate(3deg)';
                else img.style.transform = 'rotate(-2deg)';
            }, index * 100);
        });
    });
}

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
});

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.8s ease-out;
    }
    
    .slide-in-left {
        animation: slideInFromLeft 0.8s ease-out;
    }
    
    .slide-in-right {
        animation: slideInFromRight 0.8s ease-out;
    }
    
    .zoom-in {
        animation: zoomIn 0.8s ease-out;
    }
`;

document.head.appendChild(style);

// Performance optimization: Enhanced throttle for mobile
function throttle(func, limit) {
    let inThrottle;
    let lastCall = 0;
    return function() {
        const now = Date.now();
        const args = arguments;
        const context = this;
        
        if (now - lastCall >= limit) {
            func.apply(context, args);
            lastCall = now;
        }
    }
}

// Mobile-optimized scroll throttling
const scrollThrottleLimit = isAndroid() ? 100 : 32; // Higher limit for Android

// Apply throttling to scroll events - optimized for mobile
window.addEventListener('scroll', throttle(() => {
    // Skip scroll animations on mobile/Android for better performance
    if (window.innerWidth <= 768 || /Android/i.test(navigator.userAgent)) {
        return;
    }
    
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.3; // Reduced speed
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, scrollThrottleLimit));

// Additional scroll optimization for Android
if (isAndroid()) {
    let scrollTimeout;
    let lastScrollTop = 0;
    let scrollDirection = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset;
        
        // Determine scroll direction
        if (currentScrollTop > lastScrollTop) {
            scrollDirection = 1; // Scrolling down
        } else {
            scrollDirection = -1; // Scrolling up
        }
        
        lastScrollTop = currentScrollTop;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Debounced scroll end handler for Android
            document.body.classList.remove('scrolling');
            scrollDirection = 0;
        }, 150);
        
        document.body.classList.add('scrolling');
    }, { passive: true });
    
    // Add momentum control for Android
    let momentumTimeout;
    document.addEventListener('touchmove', (e) => {
        clearTimeout(momentumTimeout);
        momentumTimeout = setTimeout(() => {
            // Reduce momentum after touch ends
            document.body.style.overflowY = 'auto';
        }, 100);
    }, { passive: true });
    
    // Prevent momentum scrolling on Android
    document.addEventListener('touchstart', () => {
        document.body.style.overflowY = 'auto';
    }, { passive: true });
}

// Initialize tooltips for gallery items
function initTooltips() {
    galleryItems.forEach(item => {
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        
        item.setAttribute('title', `${title}: ${description}`);
    });
}

// Prevent horizontal scrolling
function preventHorizontalScroll() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // If horizontal movement is greater than vertical, prevent it
        if (diffX > diffY && diffX > 10) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Android detection and optimization
function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isMobile() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function optimizeForAndroid() {
    if (isAndroid() || isMobile()) {
        // Disable smooth scrolling on Android and mobile
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        
        // Disable CSS smooth scrolling globally and disable all animations/transforms
        const style = document.createElement('style');
        style.textContent = `
            html {
                scroll-behavior: auto !important;
            }
            * {
                scroll-behavior: auto !important;
                transition-duration: 0.2s !important;
                animation-duration: 0.3s !important;
            }
            .floating-card {
                animation: none !important;
                transform: none !important;
            }
            .hero-content {
                transform: none !important;
            }
            .scroll-indicator {
                animation: none !important;
            }
            .cta-button::before {
                transition: none !important;
            }
            .parallax {
                transform: none !important;
            }
            .hero::before {
                animation: none !important;
            }
            .gallery-item:hover {
                transform: none !important;
            }
            .memory-card:hover {
                transform: none !important;
            }
            .stacked-image:hover {
                transform: none !important;
            }
        `;
        document.head.appendChild(style);
        
        // Override smooth scrolling in scrollToSection function
        window.scrollToSection = function(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'auto' // Force auto behavior on mobile
                });
            }
        };
        
        console.log('🤖 Mobile/Android detected - scroll optimizations applied');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Prevent horizontal scrolling
    preventHorizontalScroll();
    
    // Apply Android optimizations first
    optimizeForAndroid();
    
    initTooltips();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize first section as visible
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.style.opacity = '1';
        firstSection.style.transform = 'translateY(0)';
    }
    
    // Initialize gallery
    renderGallery('all');
    updateGalleryStats();
    
    // Log gallery information
    console.log('🖼️ Gallery đã được khởi tạo với', getImageStats().total, 'ảnh');
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
        console.error('Không tìm thấy scroll progress bar element');
        return;
    }
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();
console.log('📊 Scroll progress bar đã được khởi tạo');

// Add back to top button
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-medium);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 8px 40px rgba(255, 107, 107, 0.3)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = 'var(--shadow-medium)';
    });
}

// Initialize back to top button
createBackToTop();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Arrow keys for navigation
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const nextSection = currentSection.nextElementSibling;
        if (nextSection && nextSection.tagName === 'SECTION') {
            scrollToSection(nextSection.id);
        }
    }
    
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const prevSection = currentSection.previousElementSibling;
        if (prevSection && prevSection.tagName === 'SECTION') {
            scrollToSection(prevSection.id);
        }
    }
});

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let currentSection = sections[0];
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
        }
    });
    
    return currentSection;
}

// Add touch support for mobile devices - optimized for Android
let touchStartY = 0;
let touchEndY = 0;
let touchStartTime = 0;
let isScrolling = false;
let lastTouchY = 0;
let touchVelocity = 0;
let touchMomentum = 0;

// Enhanced touch handling for Android
document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
    lastTouchY = touchStartY;
    touchStartTime = Date.now();
    isScrolling = false;
    touchVelocity = 0;
    touchMomentum = 0;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    const currentY = e.changedTouches[0].screenY;
    const deltaY = currentY - lastTouchY;
    const deltaTime = Date.now() - touchStartTime;
    
    // Calculate velocity to detect fast scrolling
    if (deltaTime > 0) {
        touchVelocity = Math.abs(deltaY) / deltaTime;
    }
    
    // Mark as scrolling to prevent swipe gestures during scroll
    isScrolling = true;
    lastTouchY = currentY;
    
    // Prevent excessive momentum on Android
    if (isAndroid() && touchVelocity > 2) {
        // Reduce scroll momentum by adding resistance
        e.preventDefault();
        return false;
    }
}, { passive: false });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    const touchDuration = Date.now() - touchStartTime;
    
    // Only handle swipe if it was a quick gesture (not scrolling)
    if (!isScrolling && touchDuration < 300 && touchVelocity < 1) {
        handleSwipe();
    }
    
    // Reset touch state
    touchVelocity = 0;
    touchMomentum = 0;
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 150; // Increased threshold for Android
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - go to next section
            const currentSection = getCurrentSection();
            const nextSection = currentSection.nextElementSibling;
            if (nextSection && nextSection.tagName === 'SECTION') {
                scrollToSection(nextSection.id);
            }
        } else {
            // Swipe down - go to previous section
            const currentSection = getCurrentSection();
            const prevSection = currentSection.previousElementSibling;
            if (prevSection && prevSection.tagName === 'SECTION') {
                scrollToSection(prevSection.id);
            }
        }
    }
}

// Add loading animation for images
function addImageLoadingAnimation() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        const onLoaded = () => { img.style.opacity = '1'; img.style.filter = 'none'; };
        img.addEventListener('load', onLoaded, { once: true });
        
        img.addEventListener('error', () => {
            // Fallback: if thumbnail missing, swap to full-size image once
            const fullSrc = img.getAttribute('data-full-src');
            if (fullSrc && img.src !== fullSrc) {
                img.src = fullSrc;
                return;
            }
            // Show the image area without forcing grayscale; log for debugging
            img.style.opacity = '1';
            img.style.filter = 'none';
            try {
                console.warn('Không tải được ảnh:', img.src);
            } catch (e) {}
        });

        // If the image was already loaded before listeners attached
        if (img.complete && img.naturalWidth > 0) {
            onLoaded();
        }
    });
}

// Initialize image loading
addImageLoadingAnimation();

console.log('🌸 Album Bé Khuê đã được khởi tạo thành công! 🌸');
console.log('💖 Chúc mừng ba Dương Anh Phụng và mẹ Trần Thị Thu Nhiên có một album đẹp để lưu giữ những kỷ niệm quý giá của bé gái Dương Trần Minh Khuê! 💖');
console.log('🎀 Sinh nhật: 11-09-2024 🎀');
console.log('🌟 Chúc bé Khuê luôn xinh đẹp, thông minh và hạnh phúc! 🌟');
