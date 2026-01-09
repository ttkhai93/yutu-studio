// Mobile functionality for Yutu Studio website

document.addEventListener('DOMContentLoaded', function () {
    // Create mobile menu overlay if it doesn't exist
    if (!document.querySelector('.mobile-menu-overlay')) {
        createMobileMenuOverlay();
    }

    // Initialize mobile menu functionality
    initializeMobileMenu();
});

function createMobileMenuOverlay() {
    // Create the mobile menu overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    overlay.innerHTML = `
        <button class="mobile-menu-close">Close</button>
        <div class="mobile-menu-content">
            <div class="mobile-menu-section mobile-nav-section">
                <nav class="mobile-nav">
                    <a href="we.html" data-translate="nav_we">We</a>
                    <a href="business.html" data-translate="nav_business">Business</a>
                    <a href="projects.html" data-translate="nav_project">Project</a>
                    <a href="join.html" data-translate="nav_join">Join</a>
                </nav>
            </div>
            <div class="mobile-menu-border"></div>
            <div class="mobile-menu-section mobile-contact-section">
                <div class="mobile-contact">
                    <span>S1.F15, No. 1 Tran Van Danh Street,</span>
                    <span class="address-link">
                        Carillon 1 Building, Tan Binh Ward, Ho Chi Minh City
                    </span>
                    <div class="mobile-contact-details">
                        <div class="contact-item">
                            <span>Phone</span> <a href="tel:+84964348068">+84 964 348 068</a>
                        </div>
                        <div class="contact-item">
                            <span>Email</span><a href="mailto:biz@yutuvn.com">biz@yutuvn.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu-border"></div>
            <div class="mobile-menu-section mobile-language-section">
                <div class="mobile-language-selector">
                    <button class="lang-btn active" data-lang="en">ENLISH</button>
                    <button class="lang-btn" data-lang="ko">KOREAN</button>
                    <button class="lang-btn" data-lang="vi">VIETNAMESE</button>
                </div>
            </div>
        </div>
    `;

    // Append to body
    document.body.appendChild(overlay);
}

function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileClose = document.querySelector('.mobile-menu-close');
    const mobileLangButtons = document.querySelectorAll('.mobile-language-selector .lang-btn');

    // Toggle mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function (e) {
            e.preventDefault();
            openMobileMenu();
        });
    }

    // Close mobile menu
    if (mobileClose) {
        mobileClose.addEventListener('click', function (e) {
            e.preventDefault();
            closeMobileMenu();
        });
    }

    // Close menu when clicking on overlay background
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function (e) {
            if (e.target === mobileOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Handle mobile language selection
    mobileLangButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all mobile language buttons
            mobileLangButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Also update desktop language selector if it exists
            const desktopLangButtons = document.querySelectorAll('.header .language-selector .lang-btn');
            const selectedLang = this.getAttribute('data-lang');

            desktopLangButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-lang') === selectedLang) {
                    btn.classList.add('active');
                }
            });

            // Update data-translate elements in mobile menu
            updateMobileMenuTranslations(selectedLang);

            // Trigger language change event if there's a global language handler
            if (typeof window.changeLanguage === 'function') {
                window.changeLanguage(selectedLang);
            }
        });
    });

    // Close mobile menu with escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        // Close mobile menu if window becomes larger
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Prevent body scroll when menu is open
    function preventBodyScroll(prevent) {
        if (prevent) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
        }
    }

    // Store reference to prevent scroll function for use in other functions
    window.preventBodyScroll = preventBodyScroll;
}

function openMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileToggle) {
        mobileToggle.classList.add('active');
    }

    if (mobileOverlay) {
        mobileOverlay.classList.add('active');
    }

    // Prevent body scroll
    if (window.preventBodyScroll) {
        window.preventBodyScroll(true);
    }

    // Add aria attributes for accessibility
    if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'true');
    }
}

function closeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileToggle) {
        mobileToggle.classList.remove('active');
    }

    if (mobileOverlay) {
        mobileOverlay.classList.remove('active');
    }

    // Allow body scroll
    if (window.preventBodyScroll) {
        window.preventBodyScroll(false);
    }

    // Add aria attributes for accessibility
    if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
    }
}

// Function to update mobile menu translations
function updateMobileMenuTranslations(lang) {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a[data-translate]');

    const translations = {
        'en': {
            'nav_we': 'We',
            'nav_business': 'Business',
            'nav_project': 'Project',
            'nav_join': 'Join'
        },
        'ko': {
            'nav_we': '우리',
            'nav_business': '사업',
            'nav_project': '프로젝트',
            'nav_join': '채용'
        },
        'vi': {
            'nav_we': 'Chúng tôi',
            'nav_business': 'Kinh doanh',
            'nav_project': 'Dự án',
            'nav_join': 'Tham gia'
        }
    };

    mobileNavLinks.forEach(link => {
        const key = link.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });
}

// Expose functions globally if needed
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.updateMobileMenuTranslations = updateMobileMenuTranslations;

// Handle orientation change for mobile devices
window.addEventListener('orientationchange', function () {
    // Small delay to ensure proper rendering after orientation change
    setTimeout(function () {
        // Close mobile menu on orientation change
        closeMobileMenu();
    }, 100);
});

// Touch gesture handling for better mobile UX
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    const swipeThreshold = 100;
    const swipeDistance = touchEndX - touchStartX;

    // Swipe right to open menu (when closed)
    if (swipeDistance > swipeThreshold && !document.querySelector('.mobile-menu-overlay.active')) {
        openMobileMenu();
    }

    // Swipe left to close menu (when open)
    if (swipeDistance < -swipeThreshold && document.querySelector('.mobile-menu-overlay.active')) {
        closeMobileMenu();
    }
}