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

// Language Translation Feature
const translations = {
    en: {
        // Navigation
        nav_we: "We",
        nav_business: "Business",
        nav_join: "Join",

        // Home page
        home_section1_title: "Section 1",
        home_section1_text: "Landing page content goes here",
        home_section2_title: "Section 2",
        home_section2_text: "Landing page content goes here",
        home_section3_title: "Section 3",
        home_section3_text: "Landing page content goes here",
        home_section4_title: "Section 4",
        home_section4_text: "Landing page content goes here",

        // We page
        we_section1_title: "Who We Are",
        we_section1_text: "Content about the team goes here",
        we_section2_title: "Our Mission",
        we_section2_text: "Mission statement content goes here",
        we_section3_title: "Our Values",
        we_section3_text: "Company values content goes here",

        // Business page
        business_section1_title: "Our Services",
        business_section1_text: "Business services content goes here",
        business_section2_title: "Solutions",
        business_section2_text: "Business solutions content goes here",
        business_section3_title: "Case Studies",
        business_section3_text: "Case studies content goes here",
        business_section4_title: "Get Started",
        business_section4_text: "Call to action content goes here",

        // Join page
        join_section1_title: "Join Our Team",
        join_section1_text: "Career opportunities content goes here",
        join_section2_title: "Open Positions",
        join_section2_text: "Job listings content goes here",
        join_section3_title: "Benefits",
        join_section3_text: "Employee benefits content goes here"
    },
    vi: {
        // Navigation
        nav_we: "Chúng Tôi",
        nav_business: "Doanh Nghiệp",
        nav_join: "Tham Gia",

        // Home page
        home_section1_title: "Phần 1",
        home_section1_text: "Nội dung trang chủ ở đây",
        home_section2_title: "Phần 2",
        home_section2_text: "Nội dung trang chủ ở đây",
        home_section3_title: "Phần 3",
        home_section3_text: "Nội dung trang chủ ở đây",
        home_section4_title: "Phần 4",
        home_section4_text: "Nội dung trang chủ ở đây",

        // We page
        we_section1_title: "Chúng Tôi Là Ai",
        we_section1_text: "Nội dung về đội ngũ ở đây",
        we_section2_title: "Sứ Mệnh Của Chúng Tôi",
        we_section2_text: "Nội dung tuyên bố sứ mệnh ở đây",
        we_section3_title: "Giá Trị Của Chúng Tôi",
        we_section3_text: "Nội dung giá trị công ty ở đây",

        // Business page
        business_section1_title: "Dịch Vụ Của Chúng Tôi",
        business_section1_text: "Nội dung dịch vụ doanh nghiệp ở đây",
        business_section2_title: "Giải Pháp",
        business_section2_text: "Nội dung giải pháp doanh nghiệp ở đây",
        business_section3_title: "Nghiên Cứu Điển Hình",
        business_section3_text: "Nội dung nghiên cứu điển hình ở đây",
        business_section4_title: "Bắt Đầu",
        business_section4_text: "Nội dung kêu gọi hành động ở đây",

        // Join page
        join_section1_title: "Tham Gia Đội Ngũ Của Chúng Tôi",
        join_section1_text: "Nội dung cơ hội nghề nghiệp ở đây",
        join_section2_title: "Vị Trí Tuyển Dụng",
        join_section2_text: "Nội dung danh sách công việc ở đây",
        join_section3_title: "Quyền Lợi",
        join_section3_text: "Nội dung quyền lợi nhân viên ở đây"
    },
    ko: {
        // Navigation
        nav_we: "우리",
        nav_business: "비즈니스",
        nav_join: "참여하기",

        // Home page
        home_section1_title: "섹션 1",
        home_section1_text: "랜딩 페이지 콘텐츠가 여기에 표시됩니다",
        home_section2_title: "섹션 2",
        home_section2_text: "랜딩 페이지 콘텐츠가 여기에 표시됩니다",
        home_section3_title: "섹션 3",
        home_section3_text: "랜딩 페이지 콘텐츠가 여기에 표시됩니다",
        home_section4_title: "섹션 4",
        home_section4_text: "랜딩 페이지 콘텐츠가 여기에 표시됩니다",

        // We page
        we_section1_title: "우리는 누구인가",
        we_section1_text: "팀에 대한 콘텐츠가 여기에 표시됩니다",
        we_section2_title: "우리의 미션",
        we_section2_text: "미션 선언문 콘텐츠가 여기에 표시됩니다",
        we_section3_title: "우리의 가치",
        we_section3_text: "회사 가치 콘텐츠가 여기에 표시됩니다",

        // Business page
        business_section1_title: "우리의 서비스",
        business_section1_text: "비즈니스 서비스 콘텐츠가 여기에 표시됩니다",
        business_section2_title: "솔루션",
        business_section2_text: "비즈니스 솔루션 콘텐츠가 여기에 표시됩니다",
        business_section3_title: "사례 연구",
        business_section3_text: "사례 연구 콘텐츠가 여기에 표시됩니다",
        business_section4_title: "시작하기",
        business_section4_text: "행동 촉구 콘텐츠가 여기에 표시됩니다",

        // Join page
        join_section1_title: "우리 팀에 합류하세요",
        join_section1_text: "채용 기회 콘텐츠가 여기에 표시됩니다",
        join_section2_title: "채용 공고",
        join_section2_text: "직무 목록 콘텐츠가 여기에 표시됩니다",
        join_section3_title: "혜택",
        join_section3_text: "직원 혜택 콘텐츠가 여기에 표시됩니다"
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
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to selected language button
        const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Update page language attribute
        document.documentElement.lang = lang;

        // Translate all elements with data-translate attribute
        translatePage(lang);
    }

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
});

// Update Card Slider Functionality - Show 4 cards at a time
document.addEventListener('DOMContentLoaded', function () {
    const updateCards = document.querySelectorAll('.update-card');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const totalCards = updateCards.length;
    const cardsToShow = 4;
    let currentSlide = 0;

    function showSlide(slideIndex) {
        // Calculate which cards to show
        const startIndex = slideIndex;
        const endIndex = Math.min(startIndex + cardsToShow, totalCards);

        // Smooth transition: hide cards that shouldn't be visible, show cards that should be
        updateCards.forEach((card, index) => {
            const shouldBeVisible = (index >= startIndex && index < endIndex);
            const isCurrentlyVisible = card.classList.contains('visible');

            if (shouldBeVisible && !isCurrentlyVisible) {
                // Show card that needs to be visible
                setTimeout(() => {
                    card.classList.add('visible');
                }, (index - startIndex) * 30); // Smooth stagger
            } else if (!shouldBeVisible && isCurrentlyVisible) {
                // Hide card that shouldn't be visible  
                card.classList.remove('visible', 'active');
                const footer = card.querySelector('.card-footer');
                if (footer) {
                    footer.classList.remove('active');
                }
                card.style.backgroundImage = '';
            }
        });

        currentSlide = slideIndex;
    }

    function activateCard(cardIndex, dotIndex) {
        // Remove active from all cards
        updateCards.forEach((card, index) => {
            card.classList.remove('active');
            const footer = card.querySelector('.card-footer');
            if (footer) {
                footer.classList.remove('active');
            }
            card.style.backgroundImage = '';
        });

        // Remove active from all dots
        sliderDots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Activate the specified card
        if (updateCards[cardIndex]) {
            updateCards[cardIndex].classList.add('active');
            const footer = updateCards[cardIndex].querySelector('.card-footer');
            if (footer) {
                footer.classList.add('active');
            }
            updateCards[cardIndex].style.backgroundImage = "url('static/images/HOME/1-13.png')";
        }

        // Activate the corresponding dot
        if (sliderDots[dotIndex]) {
            sliderDots[dotIndex].classList.add('active');
        }
    }

    // Initialize - show first 4 cards and activate first card
    showSlide(0);
    setTimeout(() => {
        activateCard(0, 0);
    }, 150);

    // Card click handlers - activate clicked card within visible set
    updateCards.forEach((card, index) => {
        card.addEventListener('click', function () {
            if (this.classList.contains('visible')) {
                // Determine which dot should be active based on current slide and card index
                let dotIndex;
                if (currentSlide === 0) {
                    // In first slide (showing cards 1-4), dot index matches card index
                    dotIndex = index;
                } else {
                    // In second slide (showing cards 3-6), map card index to dot index
                    if (index >= 4) {
                        dotIndex = index; // Cards 5-6 map to dots 5-6
                    } else {
                        dotIndex = index + 2; // Cards 3-4 map to dots 3-4
                    }
                }

                activateCard(index, dotIndex);
            }
        });

        // Add hover effect for visible cards
        card.addEventListener('mouseenter', function () {
            if (this.classList.contains('visible') && !this.classList.contains('active')) {
                this.style.transform = 'translateY(-5px) translateX(0)';
            }
        });

        card.addEventListener('mouseleave', function () {
            if (this.classList.contains('visible') && !this.classList.contains('active')) {
                this.style.transform = 'translateY(0) translateX(0)';
            }
        });
    });

    // Slider dot click handlers - dots 1-4 activate cards, dots 5-6 slide view
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            if (index <= 3) {
                // Dots 1-4: Only activate the corresponding card within current view (cards 1-4)
                if (currentSlide === 0) {
                    // We're showing cards 1-4, just activate the card at this index
                    activateCard(index, index);
                } else {
                    // If we're in a different slide, go back to first slide and activate the card
                    showSlide(0);
                    setTimeout(() => {
                        activateCard(index, index);
                    }, 150);
                }
            } else {
                // Dots 5-6: Slide to show the last 4 cards (cards 3-6)
                const slideIndex = totalCards - cardsToShow; // This will show cards 3-6 (indices 2-5)
                showSlide(slideIndex);
                setTimeout(() => {
                    // Activate the corresponding card: dot 5 -> card 5 (index 4), dot 6 -> card 6 (index 5)
                    activateCard(index, index);
                }, 150);
            }
        });
    });
});

// Process Block Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const processToggles = document.querySelectorAll('.process-toggle');

    processToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const blockGroup = this.parentElement;
            const subBlock = blockGroup.querySelector('.process-sub-block');

            if (subBlock) {
                // Toggle active state on the process block
                this.classList.toggle('active');
                this.classList.toggle('process-block-with-bg');

                // Toggle show state on the sub block
                subBlock.classList.toggle('show');

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
