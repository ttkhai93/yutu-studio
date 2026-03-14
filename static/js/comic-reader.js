// Comic Reader JavaScript
// Data structure for organizing comic chapters and pages

const comicData = {
    title: "Demo Comic",
    chapters: [
        {
            id: 1,
            title: "Chapter 1: The Beginning",
            pages: [
                "static/images/COMICS/chapter1/page1.png",
                "static/images/COMICS/chapter1/page2.png",
                "static/images/COMICS/chapter1/page3.png",
                "static/images/COMICS/chapter1/page4.png"
            ]
        },
        {
            id: 2,
            title: "Chapter 2: The Journey",
            pages: [
                "static/images/COMICS/chapter2/page1.png",
                "static/images/COMICS/chapter2/page2.png",
                "static/images/COMICS/chapter2/page3.png"
            ]
        },
        {
            id: 3,
            title: "Chapter 3: The Revelation",
            pages: [
                "static/images/COMICS/chapter3/page1.png",
                "static/images/COMICS/chapter3/page2.png",
                "static/images/COMICS/chapter3/page3.png",
                "static/images/COMICS/chapter3/page4.png",
                "static/images/COMICS/chapter3/page5.png"
            ]
        }
    ]
};

class ComicReader {
    constructor(data) {
        this.data = data;
        this.currentChapter = 0;
        this.currentPage = 0;

        // DOM elements
        this.chapterSelect = document.getElementById('chapter-select');
        this.pageSelect = document.getElementById('page-select');
        this.comicPage = document.getElementById('comic-page');
        this.loading = document.getElementById('loading');
        this.pageInfo = document.getElementById('page-info');

        // Buttons
        this.prevPageBtn = document.getElementById('prev-page');
        this.nextPageBtn = document.getElementById('next-page');
        this.prevChapterBtn = document.getElementById('prev-chapter');
        this.nextChapterBtn = document.getElementById('next-chapter');

        this.init();
    }

    init() {
        // Populate chapter dropdown
        this.populateChapterSelect();

        // Set up event listeners
        this.setupEventListeners();

        // Load first page
        this.loadPage(0, 0);
    }

    populateChapterSelect() {
        this.chapterSelect.innerHTML = '';
        this.data.chapters.forEach((chapter, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = chapter.title;
            this.chapterSelect.appendChild(option);
        });
    }

    populatePageSelect() {
        this.pageSelect.innerHTML = '';
        const currentChapter = this.data.chapters[this.currentChapter];
        currentChapter.pages.forEach((page, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `Page ${index + 1}`;
            this.pageSelect.appendChild(option);
        });
        this.pageSelect.value = this.currentPage;
    }

    setupEventListeners() {
        // Chapter selection
        this.chapterSelect.addEventListener('change', (e) => {
            this.loadPage(parseInt(e.target.value), 0);
        });

        // Page selection
        this.pageSelect.addEventListener('change', (e) => {
            this.loadPage(this.currentChapter, parseInt(e.target.value));
        });

        // Navigation buttons
        this.prevPageBtn.addEventListener('click', () => this.previousPage());
        this.nextPageBtn.addEventListener('click', () => this.nextPage());
        this.prevChapterBtn.addEventListener('click', () => this.previousChapter());
        this.nextChapterBtn.addEventListener('click', () => this.nextChapter());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.previousPage();
                    break;
                case 'ArrowRight':
                    this.nextPage();
                    break;
                case '[':
                    this.previousChapter();
                    break;
                case ']':
                    this.nextChapter();
                    break;
            }
        });

        // Image load event
        this.comicPage.addEventListener('load', () => {
            this.loading.style.display = 'none';
            this.comicPage.style.display = 'block';
        });

        // Image error event
        this.comicPage.addEventListener('error', () => {
            this.loading.textContent = 'Failed to load image';
            this.comicPage.style.display = 'none';
        });
    }

    loadPage(chapterIndex, pageIndex) {
        // Validate indices
        if (chapterIndex < 0 || chapterIndex >= this.data.chapters.length) {
            return;
        }

        const chapter = this.data.chapters[chapterIndex];
        if (pageIndex < 0 || pageIndex >= chapter.pages.length) {
            return;
        }

        // Update current position
        this.currentChapter = chapterIndex;
        this.currentPage = pageIndex;

        // Show loading
        this.loading.style.display = 'block';
        this.loading.textContent = 'Loading...';
        this.comicPage.style.display = 'none';

        // Update dropdowns
        this.chapterSelect.value = chapterIndex;
        this.populatePageSelect();

        // Load image
        this.comicPage.src = chapter.pages[pageIndex];

        // Update page info
        this.updatePageInfo();

        // Update button states
        this.updateButtonStates();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updatePageInfo() {
        const chapter = this.data.chapters[this.currentChapter];
        this.pageInfo.textContent = `${chapter.title} - Page ${this.currentPage + 1} of ${chapter.pages.length}`;
    }

    updateButtonStates() {
        // Previous page button
        this.prevPageBtn.disabled = (this.currentChapter === 0 && this.currentPage === 0);

        // Next page button
        const lastChapter = this.data.chapters.length - 1;
        const lastPage = this.data.chapters[lastChapter].pages.length - 1;
        this.nextPageBtn.disabled = (this.currentChapter === lastChapter && this.currentPage === lastPage);

        // Previous chapter button
        this.prevChapterBtn.disabled = (this.currentChapter === 0);

        // Next chapter button
        this.nextChapterBtn.disabled = (this.currentChapter === this.data.chapters.length - 1);
    }

    nextPage() {
        const currentChapter = this.data.chapters[this.currentChapter];

        if (this.currentPage < currentChapter.pages.length - 1) {
            // Next page in current chapter
            this.loadPage(this.currentChapter, this.currentPage + 1);
        } else if (this.currentChapter < this.data.chapters.length - 1) {
            // First page of next chapter
            this.loadPage(this.currentChapter + 1, 0);
        }
    }

    previousPage() {
        if (this.currentPage > 0) {
            // Previous page in current chapter
            this.loadPage(this.currentChapter, this.currentPage - 1);
        } else if (this.currentChapter > 0) {
            // Last page of previous chapter
            const prevChapter = this.data.chapters[this.currentChapter - 1];
            this.loadPage(this.currentChapter - 1, prevChapter.pages.length - 1);
        }
    }

    nextChapter() {
        if (this.currentChapter < this.data.chapters.length - 1) {
            this.loadPage(this.currentChapter + 1, 0);
        }
    }

    previousChapter() {
        if (this.currentChapter > 0) {
            this.loadPage(this.currentChapter - 1, 0);
        }
    }
}

// Initialize comic reader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const reader = new ComicReader(comicData);
});
