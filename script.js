// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top when clicked
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (mobileMenuToggle && navbar) {
        mobileMenuToggle.addEventListener('click', function () {
            // Toggle active class on button for animation
            this.classList.toggle('active');

            // Toggle active class on navbar to show/hide menu
            navbar.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navbar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideNav = navbar.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
});

// Download portfolio file
document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('download-portfolio');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function (e) {
            e.preventDefault();

            // Create download link for the PDF file
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = 'static/documents/Yutu.Stu_Portfolio_E_2025.pdf';
            a.download = 'Yutu.Stu_Portfolio_E_2025.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }
});

// Smooth scroll for anchor links (if needed in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Global Language Translation Feature
window.translations = {
    en: {
        // Navigation
        nav_we: "We",
        nav_business: "Business",
        nav_project: "Project",
        nav_join: "Join",
        translate_test: "STORIES"
    },
    vi: {
        // Navigation
        nav_we: "Chúng Tôi",
        nav_business: "Doanh Nghiệp",
        nav_project: "Dự án",
        nav_join: "Tham Gia",
        translate_test: "CÂU CHUYỆN"
    },
    ko: {
        // Navigation
        nav_we: "우리",
        nav_business: "비즈니스",
        nav_project: "프로젝트",
        nav_join: "참여하기",
        translate_test: "이야기들"
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Load saved language preference
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    setActiveLanguage(savedLang);

    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            setActiveLanguage(lang);
            localStorage.setItem('selectedLanguage', lang);
        });
    });

    function setActiveLanguage(lang) {
        // Remove active class from all buttons (both desktop and mobile)
        const allLangButtons = document.querySelectorAll('.lang-btn');
        allLangButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to selected language buttons (both desktop and mobile)
        const activeBtns = document.querySelectorAll(`[data-lang="${lang}"]`);
        activeBtns.forEach(btn => btn.classList.add('active'));

        // Update page language attribute
        document.documentElement.lang = lang;

        // Translate all elements with data-translate attribute
        translatePage(lang);
    }

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (window.translations[lang] && window.translations[lang][key]) {
                element.textContent = window.translations[lang][key];
            }
        });
    }

    // Make functions globally available
    window.setActiveLanguage = setActiveLanguage;
    window.translatePage = translatePage;
    window.changeLanguage = setActiveLanguage; // Alias for mobile compatibility
});

// Process Block Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const processToggles = document.querySelectorAll('.process-toggle');

    processToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const blockGroup = this.parentElement;
            const subBlock = blockGroup.querySelector('.process-sub-block');
            const downloadBtn = this.querySelector('.process-download-btn img');
            const processNumber = this.querySelector('.process-number');

            if (subBlock) {
                // First, close all other process toggles
                processToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        const otherBlockGroup = otherToggle.parentElement;
                        const otherSubBlock = otherBlockGroup.querySelector('.process-sub-block');
                        const otherDownloadBtn = otherToggle.querySelector('.process-download-btn img');
                        const otherProcessNumber = otherToggle.querySelector('.process-number');

                        // Remove active states
                        otherToggle.classList.remove('active', 'process-block-with-bg');

                        // Hide sub block
                        if (otherSubBlock) {
                            otherSubBlock.classList.remove('show');
                        }

                        // Reset button image and process number color
                        if (otherDownloadBtn) {
                            otherDownloadBtn.src = 'static/images/BUSINESS/1-27.png';
                        }
                        if (otherProcessNumber) {
                            otherProcessNumber.style.color = '';
                        }
                    }
                });

                // Toggle active state on the process block
                this.classList.toggle('active');
                this.classList.toggle('process-block-with-bg');

                // Toggle show state on the sub block
                subBlock.classList.toggle('show');

                // Change button image and process number color based on active state
                if (this.classList.contains('active')) {
                    // Block is now active - change to active image and color
                    if (downloadBtn) {
                        downloadBtn.src = 'static/images/BUSINESS/1-26.png';
                    }
                    if (processNumber) {
                        processNumber.style.color = '#F05A22';
                    }
                } else {
                    // Block is now inactive - change back to original image and color
                    if (downloadBtn) {
                        downloadBtn.src = 'static/images/BUSINESS/1-27.png';
                    }
                    if (processNumber) {
                        processNumber.style.color = '';
                    }
                }

                // If showing, scroll into view smoothly
                if (subBlock.classList.contains('show')) {
                    setTimeout(() => {
                        subBlock.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 200);
                }
            }
        });
    });
});
