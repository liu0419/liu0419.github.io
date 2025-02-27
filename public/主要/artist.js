document.querySelectorAll(".carousel-wrapper-1").forEach((carousel) => {
    const carouselWrap = carousel.querySelector(".carousel-wrap");
    const prevBtn = carousel.querySelector(".prevBtn");
    const nextBtn = carousel.querySelector(".nextBtn");
    function getItemWidth() {
        return Math.round(window.innerWidth * 0.296); // 計算 itemWidth = 螢幕寬度 * 31%
    }
    let currentIndex = 0;
    const itemWidth = getItemWidth();
    const totalItems = carouselWrap.querySelectorAll(".paintItem").length;
    const maxIndex = Math.ceil(totalItems / 2) - 1; // 每次移動 2 個 item

    function updateCarousel() {
        carouselWrap.style.transform = `translateX(${-currentIndex * itemWidth * 2}px)`;

        // 控制按鈕顯示/隱藏
        prevBtn.classList.toggle("hidden", currentIndex === 0);
        nextBtn.classList.toggle("hidden", currentIndex >= maxIndex);
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel(); // 初始化狀態
});