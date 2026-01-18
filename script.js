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

        btn_read_more: "READ MORE",

        index_header_bottom_title: "Where ideas grow into value.",
        index_header_bottom_description_1: "Yutu is a creative studio building thoughtful digital solutions.",
        index_header_bottom_description_2: "We focus on clarity, purpose, and long-term value.",
        index_header_bottom_latest_work: "OUT LATEST WORKS",
        index_header_bottom_viewall: "VIEW ALL",

        index_section1_highlight_text: "AT YUTU STUDIO",
        index_section1_normal_text: ", we nurture ideas and empower artists to turn imagination into visual storytelling. Our mission is to inspire creators to explore new worlds and share them with audiences everywhere.",
        index_section1_best: "THE BEST OF YUTU",
        index_section1_portfolio: "/PORTFOLIO",
        index_section1_download: "DOWNLOAD",

        index_section3_title: "A little joy of your daily life",
        index_section3_description: "Yutu Studio dreams of a world where both creators and users will find happiness.",
        index_section3_block_1_title: "Production & Distribution",
        index_section3_block_1_description: "Produce contents such as films, comics, webtoons, etc., and distribution on & offline.",
        index_section3_block_2_title: "Localization",
        index_section3_block_2_description: "Translate, digitalize, censor and marketing for films, comics, webtoons, and multimedia.",
        index_section3_block_3_title: "Cooperative Relationship",
        index_section3_block_3_description: "Maintain partnerships with IT and content-related companies for greater benefits.",

        index_section4_title: "WEBTOON SHOWCASE",
        index_section4_description: "Be with YUTU. You will turn imagination into visual storytelling and inspire creators to explore new worlds and share them with audiences everywhere.",
        project_name_gongja: "GONGJA",
        project_name_shingeom: "SHINGEOM: The Child of Godslayer",

        index_section5_title: "BUSINESS",
        index_section5_description: "Yutu Studio produces, distributes, and publishes contents like comics, webtoons, films, etc.",

        index_section6_title: "LATEST NEWS",
        index_section6_card_top_left: "COMPANY UPDATE",

        // Business page
        business_header_bottom_large_text_1: "STORIES",
        business_header_bottom_large_text_2: "BROUGHT TO LIFE",
        business_header_bottom_normal_text: "EXPLORE SELECTED WORKS WHERE IDEAS EVOLVE INTO VISUAL STORIES. CRAFTED WITH CARE, CLARITY, AND PURPOSE.",

        business_production_title: "PRODUCTION",
        business_production_step_1: "Pre-Production",
        business_production_step_1_content: "Concept development, storyline planning, character design, and visual direction are defined to ensure a strong narrative founda- tion before production begins.",
        business_production_step_2: "Production",
        business_production_step_2_content: "Artwork creation including sketching, line art, coloring, and panel composition, following a consistent style and production workflow.",
        business_production_step_3: "Post-Production",
        business_production_step_3_content: "Final polishing, editing, formatting, and quality control to ensure visual consistency and platform-ready delivery.",
        business_production_step_4: "Co-Production",
        business_production_step_4_content: "Collaborative production with partners or creators, integrating workflows and resourc- es to scale projects efficiently.",

        business_localization_title: "LOCALIZATION",
        business_localization_content_1: "Yutu Studio provides professional translation and localization services, adapting webtoons into multiple languages for global release.",
        business_localization_content_2: "With a production capacity of thousands of chapters per month, we ensure linguistic precision and cultural sensitivity, delivering works that resonate with international readers.",
        business_localization_content_3: "We have collaborated and continue to collaborate with leading platforms such as Naver, Kakao Page, and Lezhin, maintaining professional standards that meet each platform’s unique creative and technical requirements.",

        business_localization_process_title: "LOCALIZATION PROCESS",
        business_localization_process_step_1: "Content Analysis",
        business_localization_process_step_1_content: "Each story and character is carefully analyzed to capture its tone, context, and cultural essence. This step allows us to identify the best approach for adapting content to fit the linguistic and cultural nuances of the target market.",
        business_localization_process_step_2: "Translation & Adaptation",
        business_localization_process_step_2_content: "Our multilingual team of native translators—experienced in comics and storytelling—transforms the original script with cultural accuracy and narrative flow. Translation is blended with localization to maintain the emotional intent of each line.",
        business_localization_process_step_3: "Editorial Review",
        business_localization_process_step_3_content: "Experienced Korean editors and bilingual specialists refine the translated text, ensuring it reads naturally and aligns with both cultural tone and creator intent. This stage enhances consistency and authenticity across every chapter.",
        business_localization_process_step_4: "Digital Integration",
        business_localization_process_step_4_content: "Skilled graphic editors apply the localized text to original artwork, redesigning sound effects and onomatopoeia to match the visual mood and typography of the source material. We ensure seamless digital adaptation across all formats",
        business_localization_process_step_5: "Quality Assurance",
        business_localization_process_step_5_content: "A final review by native readers tests readability, pacing, and visual balance to confirm that the storytelling feels natural in the target language. Only after this step does a webtoon move to release or platform delivery.",

        business_partners_title: "PARTNERS",

        // We page
        we_header_bottom_normal_text_1: "AT YUTU STUDIO, WE NURTURE IDEAS AND EMPOWER ARTISTS TO TURN IMAGINATION INTO VISUAL STORYTELLING.",
        we_header_bottom_normal_text_2: "OUR MISSION IS TO INSPIRE CREATORS TO EXPLORE NEW WORLDS AND SHARE THEM WITH AUDIENCES EVERYWHERE.",
        we_header_bottom_large_text: "WE BELIEVE EVERY GREAT STORY BEGINS WITH A SPARK",
        we_header_bottom_medium_text: "FUELING INSPIRATION",
        we_section1_title: "DRIVEN BY PASSION",
        we_section1_content_1: "Since 2019, our team has collaborated with leading Korean studios like LICO and Ylab.",
        we_section1_content_2: "In 2023, we founded Yutu Studio to bring world-class webtoon production and localization to Vietnam.",
        we_section1_content_3: "Passion drives us to push storytelling boundaries and connect cul- tures through art.",
        we_section2_title: "OUR VISION",
        we_vision_label: "OUR",
        we_vision_subtitle_mission: "MISSION",
        we_vision_subtitle_vision: "VISION",
        we_vision_description_mission: "\"Becoming a reliable partner for customer, having a reputation in webtoon industry.\"",
        we_vision_description_vision: "\"Becoming the top comprehensive webtoon production studio in SEA.\"",

        // Join page
        join_header_bottom_medium_text: "JOIN YUTU STUDIO",
        join_header_bottom_large_text: "WHERE PASSION MEETS INNOVATION IN WEBTOON",
        join_section1_title: "Hiring: Line Art / Coloring / 3D / Editing",
        join_hiring_description_background_title: "Background:",
        join_hiring_description_qualifications_title: "Qualifications:",
        join_hiring_description_background: "We don't care about degrees, gender, or titles — only your skills and passion.",
        join_hiring_description_qualifications: "No restrictions on education, experience, or gender",
        join_hiring_section1_title: "What We're Looking For",
        join_hiring_section1_item1: "Comfortable with Photoshop or Clip Studio",
        join_hiring_section1_item2: "Love webtoons, comics, and storytelling",
        join_hiring_section1_item3: "Curious, responsible, and open to learning",
        join_hiring_section1_item4: "Positive energy and team-first mindset",
        join_hiring_section1_item5: "Looking for a place to grow long-term with Yutu",
        join_hiring_section2_title: "How We Work",
        join_hiring_section2_item1: "Working hours: 8:30 – 18:00",
        join_hiring_section2_item2: "Paid leave & public holidays",
        join_hiring_section2_item3: "Insurance & basic benefits",
        join_hiring_section2_item4: "A creative, supportive studio environment",
        join_hiring_section3_title: "What to Send",
        join_hiring_section3_item1: "Your portfolio",
        join_hiring_section3_item2: "A short application (tell us about yourself!)",
        join_hiring_section4_title: "Submit:",

        // Projects page
        projects_header_bottom_large_text: "PROJECT WE LOVE",
        projects_header_bottom_normal_text: "WE WORKED WITH OVER 10+ PARTNERS TO TURN IMAGINATION INTO VISUAL STORYTELLING AND INSPIRE CREATORS TO EXPLORE NEW WORLDS AND SHARE THEM WITH AUDIENCES EVERYWHERE.",

        // Footer
        footer_description: "Yutu Studio dreams of a bright world where both creators and users will be happy.",
        footer_apply_btn: "APPLY NOW!",
        footer_explore: "EXPLORE",
        footer_explore_we: "WE",
        footer_explore_projects: "PROJECTS",
        footer_explore_business: "BUSINESS",
        footer_explore_recruitement: "RECRUITEMENT",
        footer_follow: "FOLLOW US",
        footer_follow_ig: "INSTAGRAM",
        footer_follow_fb: "FACEBOOK",
        footer_follow_tt: "TIKTOK",
        footer_follow_yt: "YOUTUBE",
        footer_info: "OUR INFO",
        footer_info_addr_1: "S1.F15, No. 1 Tran Van Danh Street,",
        footer_info_addr_2: "Carillon 1 Building, Tan Binh Ward, Ho Chi Minh City",
        footer_info_phone: "Phone:",
        footer_info_email: "Email:",
        footer_title_part1: "JOIN",
        footer_title_part2: "OUR TEAM",
    },
    vi: {
        // Navigation
        nav_we: "Chúng tôi",
        nav_business: "Hợp tác",
        nav_project: "Dự án",
        nav_join: "Gia nhập",

        btn_read_more: "ĐỌC THÊM",

        index_header_bottom_title: "Nơi ý tưởng được nuôi dưỡng và trở thành giá trị.",
        index_header_bottom_description_1: "Yutu là studio sáng tạo, nơi những ý tưởng được phát triển một cách chỉn chu để tạo nên các giải pháp số có chiều sâu.",
        index_header_bottom_description_2: "Chúng tôi theo đuổi sự rõ ràng, mục đích và giá trị bền vững.",
        index_header_bottom_latest_work: "DỰ ÁN GẦN ĐÂY",
        index_header_bottom_viewall: "XEM TOÀN BỘ",

        index_section1_highlight_text: "Tại YUTU Studio",
        index_section1_normal_text: ", chúng tôi nuôi dưỡng ý tưởng và đồng hành cùng nghệ sĩ để biến trí tưởng tượng thành những câu chuyện bằng hình ảnh. Chúng tôi mong muốn truyền cảm hứng để các nhà sáng tạo khám phá những thế giới mới và chia sẻ chúng với khán giả ở khắp mọi nơi.",
        index_section1_best: "NHỮNG DỰ ÁN TIÊU BIỂU CỦA YUTU",
        index_section1_portfolio: "???",
        index_section1_download: "TẢI VỀ",

        index_section3_title: "Một chút niềm vui trong từng khoảnh khắc đời thường",
        index_section3_description: "Yutu Studio Chúng tôi tin vào một thế giới tươi sáng, nơi người sáng tạo và độc giả cùng tìm thấy niềm vui và sự đồng cảm qua từng câu chuyện.",
        index_section3_block_1_title: "Sản xuất & Phát hành",
        index_section3_block_1_description: "Sáng tạo và sản xuất các nội dung như phim, truyện tranh, webtoon… đồng thời phân phối linh hoạt trên cả nền tảng trực tuyến và ngoại tuyến.",
        index_section3_block_2_title: "Bản địa hóa nội dung",
        index_section3_block_2_description: "Chuyển ngữ, số hóa, biên tập nội dung phù hợp thị trường và triển khai marketing cho phim, truyện tranh, webtoon và các sản phẩm đa phương tiện.",
        index_section3_block_3_title: "Hợp tác & Đồng hành",
        index_section3_block_3_description: "Xây dựng và duy trì mối quan hệ bền vững với các đối tác công nghệ và nội dung, cùng nhau tạo ra giá trị lâu dài.",

        index_section4_title: "GIỚI THIỆU WEBTOON",
        index_section4_description: "Đồng hành cùng YUTU, nơi trí tưởng tượng hoá thành những câu chuyện hình ảnh sống động, kết nối nhà sáng tạo với độc giả trên khắp thế giới.",
        project_name_gongja: "???",
        project_name_shingeom: "???",

        index_section5_title: "HỢP TÁC CÙNG CHÚNG TÔI",
        index_section5_description: "Yutu Studio sản xuất, phân phối và xuất bản các nội dung như truyện tranh, webtoon, phim ảnh, v.v.",

        index_section6_title: "TIN TỨC MỚI NHẤT",
        index_section6_card_top_left: "???",

        // Business page
        business_header_bottom_large_text_1: "Những câu chuyện",
        business_header_bottom_large_text_2: "được thổi hồn",
        business_header_bottom_normal_text: "Khám phá những tác phẩm được chọn lọc — nơi ý tưởng dần hình thành câu chuyện hình ảnh, được tạo nên bằng sự chăm chút, rõ ràng và một mục đích nhất quán.",

        business_production_title: "???",
        business_production_step_1: "???",
        business_production_step_1_content: "Phát triển ý tưởng, xây dựng kịch bản, thiết kế nhân vật và định hướng hình ảnh để đặt nền móng vững chắc cho câu chuyện.",
        business_production_step_2: "???",
        business_production_step_2_content: "Thực hiện artwork từ phác thảo, lineart đến tô màu và bố cục khung truyện, giữ sự nhất quán trong phong cách và nhịp sản xuất.",
        business_production_step_3: "???",
        business_production_step_3_content: "Hoàn thiện, chỉnh sửa và kiểm soát chất lượng để mỗi tác phẩm đạt độ hoàn chỉnh và sẵn sàng đến với nền tảng phát hành.",
        business_production_step_4: "???",
        business_production_step_4_content: "Cùng hợp tác với đối tác và nhà sáng tạo, kết nối quy trình và nguồn lực để mở rộng quy mô dự án một cách hiệu quả.",

        business_localization_title: "BẢN ĐỊA HOÁ",
        business_localization_content_1: "Yutu Studio cung cấp dịch vụ dịch thuật và bản địa hoá chuyên nghiệp, chuyển thể webtoon sang nhiều ngôn ngữ để phát hành trên thị trường toàn cầu.",
        business_localization_content_2: "Với năng lực sản xuất hàng nghìn chương mỗi tháng, chúng tôi đảm bảo độ chính xác về ngôn ngữ và sự tinh tế trong văn hoá, giúp mỗi tác phẩm khi ra mắt đều có thể chạm đến độc giả quốc tế một cách tự nhiên và gần gũi.",
        business_localization_content_3: "Chúng tôi đã và đang hợp tác cùng các nền tảng hàng đầu như Naver, Kakao Page và Lezhin, luôn duy trì tiêu chuẩn làm việc chuyên nghiệp, đáp ứng những yêu cầu sáng tạo và kỹ thuật riêng biệt của từng nền tảng.",

        business_localization_process_title: "QUY TRÌNH BẢN ĐỊA HOÁ",
        business_localization_process_step_1: "Phân tích nội dung",
        business_localization_process_step_1_content: "Mỗi câu chuyện và từng nhân vật đều được phân tích kỹ lưỡng để nắm bắt giọng điệu, bối cảnh và tinh thần văn hoá cốt lõi, từ đó xác định cách tiếp cận phù hợp nhất khi chuyển thể nội dung sang ngôn ngữ và thị trường mục tiêu.",
        business_localization_process_step_2: "Dịch thuật & Chuyển thể",
        business_localization_process_step_2_content: "Đội ngũ biên dịch đa ngôn ngữ bản ngữ của Yutu Studio, giàu kinh nghiệm trong lĩnh vực truyện tranh và kể chuyện, chuyển hoá kịch bản gốc với độ chính xác văn hoá và mạch kể tự nhiên, đồng thời kết hợp dịch thuật và bản địa hoá để giữ trọn cảm xúc cũng như ý đồ của từng câu thoại.",
        business_localization_process_step_3: "Biên tập nội dung",
        business_localization_process_step_3_content: "Các biên tập viên Hàn Quốc cùng chuyên gia song ngữ tinh chỉnh bản dịch để câu chữ mượt mà, tự nhiên, nhất quán với giọng điệu văn hoá và ý đồ của tác giả, qua đó đảm bảo tính chân thực và đồng bộ xuyên suốt mọi chương truyện.",
        business_localization_process_step_4: "Tích hợp số",
        business_localization_process_step_4_content: "Đội ngũ thiết kế đồ hoạ ứng dụng nội dung đã bản địa hoá trực tiếp lên artwork gốc, điều chỉnh hiệu ứng âm thanh, chữ tượng thanh và bố cục chữ để phù hợp với cảm xúc thị giác và phong cách trình bày ban đầu, đồng thời đảm bảo khả năng hiển thị liền mạch trên mọi định dạng số.",
        business_localization_process_step_5: "Đảm bảo chất lượng",
        business_localization_process_step_5_content: "Bản dịch cuối cùng được kiểm tra bởi độc giả bản ngữ nhằm đánh giá độ dễ đọc, nhịp kể và sự cân bằng thị giác, đảm bảo trải nghiệm kể chuyện tự nhiên và trọn vẹn trong ngôn ngữ đích. Chỉ khi hoàn tất bước này, webtoon mới được chuyển sang giai đoạn phát hành hoặc bàn giao cho nền tảng.",

        business_partners_title: "ĐỐI TÁC",

        // We page
        we_header_bottom_normal_text_1: "Tại YUTU Studio, chúng tôi nuôi dưỡng ý tưởng và tiếp sức cho nghệ sĩ, biến trí tưởng tượng thành những câu chuyện hình ảnh đầy sức sống.",
        we_header_bottom_normal_text_2: "Sứ mệnh của chúng tôi là truyền cảm hứng để các nhà sáng tạo khám phá những thế giới mới và lan toả chúng đến độc giả khắp mọi nơi.",
        we_header_bottom_large_text: "Mọi câu chuyện đều bắt đầu từ một khoảnh khắc rung động",
        we_header_bottom_medium_text: "Nuôi dưỡng cảm hứng",
        we_section1_title: "ĐƯỢC DẪN DẮT BỞI ĐAM MÊ",
        we_section1_content_1: "Từ năm 2019, đội ngũ của chúng tôi đã đồng hành cùng nhiều studio hàng đầu Hàn Quốc như LICO và Ylab.",
        we_section1_content_2: "Đến năm 2023, Yutu Studio chính thức được thành lập với mong muốn mang tiêu chuẩn sản xuất và bản địa hóa webtoon đẳng cấp quốc tế đến Việt Nam.",
        we_section1_content_3: "Chính đam mê là động lực thôi thúc chúng tôi không ngừng mở rộng biên giới kể chuyện và kết nối những nền văn hóa khác nhau thông qua nghệ thuật.",
        we_section2_title: "TẦM NHÌN CỦA CHÚNG TÔI",
        we_vision_label: "OUR",
        we_vision_subtitle_mission: "SỨ MỆNH",
        we_vision_subtitle_vision: "TẦM NHÌN",
        we_vision_description_mission: "Trở thành người đồng hành đáng tin cậy, cùng đối tác tạo nên những tác phẩm webtoon chất lượng và xây dựng uy tín bền vững trong ngành.",
        we_vision_description_vision: "Hướng đến vị thế studio sản xuất webtoon toàn diện hàng đầu tại khu vực Đông Nam Á, nơi sáng tạo và giá trị lâu dài cùng phát triển.",

        // Join page
        join_header_bottom_medium_text: "THAM GIA CÙNG YUTU STUDIO",
        join_header_bottom_large_text: "Nơi đam mê sáng tạo tạo nên những webtoon khác biệt",
        join_section1_title: "Tuyển dụng: Line Art / Coloring / 3D / Editing",
        join_hiring_description_background_title: "Giới thiệu:",
        join_hiring_description_qualifications_title: "Yêu cầu:",
        join_hiring_description_background: "Chúng tôi không quan tâm đến bằng cấp, giới tính hay danh xưng — điều Yutu Studio tìm kiếm là kỹ năng, đam mê và tinh thần sáng tạo nghiêm túc với nghề.",
        join_hiring_description_qualifications: "Không giới hạn về trình độ học vấn, kinh nghiệm hay giới tính.",
        join_hiring_section1_title: "Chúng tôi tìm kiếm",
        join_hiring_section1_item1: "Thành thạo Photoshop hoặc Clip Studio",
        join_hiring_section1_item2: "Yêu thích webtoon, truyện tranh và kể chuyện bằng hình ảnh",
        join_hiring_section1_item3: "Chủ động, có trách nhiệm và sẵn sàng học hỏi",
        join_hiring_section1_item4: "Năng lượng tích cực, tinh thần làm việc nhóm",
        join_hiring_section1_item5: "Mong muốn gắn bó và phát triển lâu dài cùng Yutu Studio",
        join_hiring_section2_title: "Cách chúng tôi làm việc",
        join_hiring_section2_item1: "Thời gian làm việc: 8:30 – 18:00",
        join_hiring_section2_item2: "Nghỉ thứ Bảy, Chủ nhật và các ngày lễ theo quy định",
        join_hiring_section2_item3: "Đầy đủ bảo hiểm và phúc lợi cơ bản",
        join_hiring_section2_item4: "Môi trường studio sáng tạo, hỗ trợ và tôn trọng cá nhân",
        join_hiring_section3_title: "Hồ sơ cần gửi",
        join_hiring_section3_item1: "Portfolio cá nhân",
        join_hiring_section3_item2: "Thư ứng tuyển ngắn (giới thiệu về bản thân bạn)",
        join_hiring_section4_title: "Gửi về:",

        // Projects page
        projects_header_bottom_large_text: "Dự án tâm huyết của chúng tôi",
        projects_header_bottom_normal_text: "Chúng tôi đã hợp tác cùng hơn 10 đối tác để biến trí tưởng tượng thành những câu chuyện hình ảnh sống động, truyền cảm hứng cho người sáng tạo khám phá những thế giới mới và lan toả chúng đến độc giả khắp nơi.",

        // Footer
        footer_description: "Chúng tôi tin vào một thế giới tươi sáng, nơi người sáng tạo được truyền cảm hứng và người đọc tìm thấy niềm vui trong từng câu chuyện.",
        footer_apply_btn: "THAM GIA NGAY!",
        footer_explore: "KHÁM PHÁ",
        footer_explore_we: "Về YUTU",
        footer_explore_projects: "Dự án",
        footer_explore_business: "Hợp tác",
        footer_explore_recruitement: "Đồng hành",
        footer_follow: "THEO DÕI",
        footer_follow_ig: "Instagram",
        footer_follow_fb: "Facebook",
        footer_follow_tt: "TikTok",
        footer_follow_yt: "YouTube",
        footer_info: "THÔNG TIN LIÊN HỆ",
        footer_info_addr_1: "S1, F15, Số 1 Trần Văn Danh,",
        footer_info_addr_2: "Tòa nhà Carillon 1, P. Tân Bình, TP. Hồ Chí Minh",
        footer_info_phone: "Số điện thoại:",
        footer_info_email: "Địa chỉ email:",
        footer_title_part1: "CÙNG",
        footer_title_part2: "YUTU SÁNG TẠO",
    },
    ko: {
        // Navigation
        nav_we: "우리는",
        nav_business: "비즈니스",
        nav_project: "대표 작업",
        nav_join: "합류",

        btn_read_more: "더 보기",

        index_header_bottom_title: "아이디어가 가치로 성장하는 곳.",
        index_header_bottom_description_1: "Yutu는 사려 깊은 디지털 솔루션을 구축하는 크리에이티브 스튜디오입니다.",
        index_header_bottom_description_2: "우리는 명확성, 목적성, 그리고 장기적인 가치를 중시합니다.",
        index_header_bottom_latest_work: "최신 작업",
        index_header_bottom_viewall: "전체 보기",

        index_section1_highlight_text: "YUTU STUDIO는",
        index_section1_normal_text: "아이디어를 키우고 아티스트가 상상력을 시각적 스토리텔링으로 구현할 수 있도록 지원합니다. 우리의 미션은 창작자들이 새로운 세계를 탐험하고, 그 경험을 전 세계의 관객과 공유하도록 영감을 주는 것입니다.",
        index_section1_best: "YUTU의 베스트 작품",
        index_section1_portfolio: "/포트폴리오",
        index_section1_download: "다운로드",

        index_section3_title: "일상 속 작은 기쁨",
        index_section3_description: "Yutu Studio는 창작자와 사용자 모두가 행복을 발견할 수 있는 밝은 세상을 꿈꿉니다.",
        index_section3_block_1_title: "제작 및 유통",
        index_section3_block_1_description: "영화, 만화, 웹툰 등 다양한 콘텐츠를 제작해온·오프라인으로 선보입니다.",
        index_section3_block_2_title: "현지화",
        index_section3_block_2_description: "영화, 만화, 웹툰 및 멀티미디어 콘텐츠의번역, 디지털화, 검수, 마케팅을 제공합니다.",
        index_section3_block_3_title: "파트너십",
        index_section3_block_3_description: "IT 및 콘텐츠 기업과의 파트너십을 통해더 큰 시너지를 창출합니다.",

        index_section4_title: "웹툰 쇼케이스",
        index_section4_description: "YUTU와 함께하세요. 상상력을 시각적 스토리로 만들고, 창작자들에게 새로운 세계를 향한 영감을 전합니다.",
        project_name_gongja: "수상한 소공자는 천하십대고수",
        project_name_shingeom: "신검 : 신살의 아이",

        index_section5_title: "비즈니스",
        index_section5_description: "Yutu Studio는 만화, 웹툰, 영화 등 다양한 콘텐츠를 제작, 유통 및 퍼블리싱합니다.",

        index_section6_title: "최신 소식",
        index_section6_card_top_left: "스튜디오 소식",

        // Business page
        business_header_bottom_large_text_1: "이야기들에",
        business_header_bottom_large_text_2: "생명을 불어넣다.",
        business_header_bottom_normal_text: "아이디어가 시각적 스토리로 진화하는선별된 작품들을 만나보세요. 섬세함과 명확한 방향성, 목적을 담아 완성했습니다.",

        business_production_title: "제작",
        business_production_step_1: "사전제작",
        business_production_step_1_content: "제작 전 콘셉트, 스토리라인, 캐릭터, 비주얼 디렉션을 정립해탄탄한 서사 기반을 마련합니다.",
        business_production_step_2: "제작",
        business_production_step_2_content: "일관된 스타일과 워크플로우에 따라스케치, 선화, 채색, 컷 구성 등 아트워크를 제작합니다.",
        business_production_step_3: "후반제작",
        business_production_step_3_content: "시각적 완성도를 위해보정, 편집, 포맷팅 및 품질 관리를 진행합니다.",
        business_production_step_4: "공동제작",
        business_production_step_4_content: "파트너 및 창작자와 협업해리소스와 워크플로우를 통합하고 프로젝트를 확장합니다.",

        business_localization_title: "현지화",
        business_localization_content_1: "Yutu Studio는 웹툰을 다국어로 현지화하여 글로벌 시장에 선보이는전문 번역 및 로컬라이제이션 서비스를 제공합니다.",
        business_localization_content_2: "월 수천 화에 달하는 제작 역량을 기반으로, 언어적 정확성과 문화적 감수성을 모두 갖춘 콘텐츠를 제작하여전 세계 독자들에게 공감과 몰입을 선사합니다.",
        business_localization_content_3: "또한 네이버, 카카오페이지, 레진 등 주요 플랫폼과 협력해 왔으며, 각 플랫폼의 고유한 창의적·기술적 요구에 부합하는전문적인 품질 기준을 유지하고 있습니다.",

        business_localization_process_title: "로컬라이제이션 프로세스",
        business_localization_process_step_1: "콘텐츠 분석",
        business_localization_process_step_1_content: "각 스토리와 캐릭터의 톤, 맥락, 문화적 특성을 면밀히 분석합니다. 이 단계에서는 대상 시장의 언어적·문화적 뉘앙스에 맞춰 콘텐츠를 적절히 현지화할 최적의 접근법을 도출합니다.",
        business_localization_process_step_2: "번역 및 현지화",
        business_localization_process_step_2_content: "만화와 스토리텔링에 경험이 풍부한 다국어 원어민 번역팀이 원본 스크립트를 문화적 정확성과 이야기 흐름을 유지하며 변환합니다. 번역과 현지화를 결합하여 각 대사의 감정적 의도를 최대한 살립니다.",
        business_localization_process_step_3: "편집 검수",
        business_localization_process_step_3_content: "경험 많은 한국어 에디터와 이중언어 전문가가 번역문을 다듬어 자연스럽게 읽히고 문화적 톤과 창작자의 의도에 부합하도록 합니다. 이 단계는 모든 화의 일관성과 진정성을 높입니다.",
        business_localization_process_step_4: "디지털 적용",
        business_localization_process_step_4_content: "숙련된 그래픽 에디터가 현지화된 텍스트를 원본 아트워크에 적용하며, 효과음과 의성어를 원작의 시각적 분위기와 타이포그래피에 맞게 재디자인합니다. 모든 포맷에서 매끄러운 디지털 현지화를 보장합니다.",
        business_localization_process_step_5: "품질 보증",
        business_localization_process_step_5_content: "원어민 리뷰어가 최종 검수를 수행하여 가독성, 스토리 진행 속도, 시각적 균형을 확인합니다. 이 과정을 통과한 작품만이 플랫폼 출시 또는 배포 단계로 넘어갑니다.",

        business_partners_title: "파트너",

        // We page
        we_header_bottom_normal_text_1: "유투스튜디오는 아이디어를 키우고, 아티스트들이 상상력을 시각적 스토리텔링으로 구현할 수 있도록 돕습니다.",
        we_header_bottom_normal_text_2: "우리의 사명은 창작자들이 새로운 세계를 탐험하고, 그 세계를 전 세계의 관객과 나눌 수 있도록 영감을 주는 것입니다.",
        we_header_bottom_large_text: "모든 위대한 이야기는 작은 불꽃에서 시작된다고 믿습니다",
        we_header_bottom_medium_text: "영감을 점화하다",
        we_section1_title: "열정으로 나아가다",
        we_section1_content_1: "2019년부터 저희 팀은 LICO, YLAB 등 한국의 대표 스튜디오들과 협업해 왔습니다.",
        we_section1_content_2: "2023년에는 베트남에서 세계적인 수준의 웹툰 제작과 로컬라이제이션을 선보이기 위해 Yutu Studio를 설립했습니다.",
        we_section1_content_3: "우리의 열정은 스토리텔링의 경계를 넘어, 예술을 통해 문화를 연결하는 원동력입니다.",
        we_section2_title: "비전",
        we_vision_label: "OUR",
        we_vision_subtitle_mission: "미션",
        we_vision_subtitle_vision: "비전",
        we_vision_description_mission: "고객의 신뢰할 수 있는 파트너가 되고, 웹툰 업계에서 명성을 쌓다.",
        we_vision_description_vision: "동남아시아 최고 종합 웹툰 제작 스튜디오가 되다.",

        // Join page
        join_header_bottom_medium_text: "YUTU STUDIO에 합류하세요",
        join_header_bottom_large_text: "열정과 창의가 만나 웹툰의 새로운 가치를 만듭니다",
        join_section1_title: "채용: 선화 / 채색 / 3D / 편집",
        join_hiring_description_background_title: "???:",
        join_hiring_description_qualifications_title: "???:",
        join_hiring_description_background: "학력, 성별, 타이틀은 중요하지 않습니다. 우리는 오직 당신의 실력과 열정을 봅니다.",
        join_hiring_description_qualifications: "학력, 경력, 성별에 제한이 없습니다.",
        join_hiring_section1_title: "우리가 찾는 분",
        join_hiring_section1_item1: "Photoshop 또는 Clip Studio 사용에 익숙하신 분",
        join_hiring_section1_item2: "웹툰, 만화, 스토리텔링을 사랑하는 분",
        join_hiring_section1_item3: "호기심이 많고 책임감 있으며 배우는 데 열린 분",
        join_hiring_section1_item4: "긍정적인 에너지와 팀워크 마인드를 가진 분",
        join_hiring_section1_item5: "YUTU와 함께 장기적으로 성장하고 싶은 분",
        join_hiring_section2_title: "근무 환경",
        join_hiring_section2_item1: "근무 시간: 08:30 – 18:00",
        join_hiring_section2_item2: "유급 휴가 및 공휴일",
        join_hiring_section2_item3: "보험 및 기본 복지 제공",
        join_hiring_section2_item4: "창의적이고 서로를 지지하는 스튜디오 환경",
        join_hiring_section3_title: "제출 자료",
        join_hiring_section3_item1: "포트폴리오",
        join_hiring_section3_item2: "간단한 자기소개 (자유 형식)",
        join_hiring_section4_title: "지원 방법:",

        // Projects page
        projects_header_bottom_large_text: "우리가 사랑하는 작업",
        projects_header_bottom_normal_text: "10곳 이상의 파트너와 협업하며, 상상력을 시각적 스토리텔링으로 확장해 전 세계 관객과 새로운 세계를 공유합니다.",

        // Footer
        footer_description: "Yutu Studio는 창작자와 사용자가 함께 행복해지는 세상을 꿈꿉니다.",
        footer_apply_btn: "지금 지원하기!",
        footer_explore: "탐색",
        footer_explore_we: "우리 이야기",
        footer_explore_projects: "대표 작업",
        footer_explore_business: "비즈니스",
        footer_explore_recruitement: "채용",
        footer_follow: "팔로우하기",
        footer_follow_ig: "인스타그램",
        footer_follow_fb: "페이스북",
        footer_follow_tt: "틱톡",
        footer_follow_yt: "유튜브",
        footer_info: "회사 정보",
        footer_info_addr_1: "S1.F15, No. 1 Tran Van Danh Street,",
        footer_info_addr_2: "Carillon 1 Building, Tan Binh Ward, Ho Chi Minh City",
        footer_info_phone: "전화:",
        footer_info_email: "이메일:",
        footer_title_part1: "팀에",
        footer_title_part2: "합류하세요",
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

        // Handle special footer title styling for Korean
        const footerPart1 = document.getElementById('footer-title-part1');
        const footerPart2 = document.getElementById('footer-title-part2');

        if (footerPart1 && footerPart2) {
            if (lang === 'ko') {
                // Korean: first part highlighted, second part normal
                footerPart1.classList.add('highlight-text');
                footerPart2.classList.remove('highlight-text');
            } else {
                // English/Vietnamese: second part highlighted, first part normal
                footerPart1.classList.remove('highlight-text');
                footerPart2.classList.add('highlight-text');
            }
        }
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
