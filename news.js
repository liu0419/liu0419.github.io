document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.arrow.prev');
    const nextButton = document.querySelector('.arrow.next');
    const items = document.querySelectorAll('.carousel-item');
    const itemsPerPage = 3;  // 每頁顯示 3 個新聞 item
    let currentPage = 0;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function updateCarousel() {
        // 每頁寬度固定為 container 的寬度：1240px
        const offset = currentPage * 1240;
        carouselItems.style.transform = `translateX(-${offset}px)`;
        updateButtons();
    }

    // 根據 currentPage 更新箭頭按鈕的顯示狀態
    function updateButtons() {
        if (currentPage === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (currentPage === totalPages - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }

    // 初始載入時更新按鈕狀態
    updateButtons();

    prevButton.addEventListener('click', function () {
        if (currentPage > 0) {
            currentPage--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateCarousel();
        }
    })
});