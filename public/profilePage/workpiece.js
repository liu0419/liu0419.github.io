document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.paintWrapContainer').forEach(carousel => {
        const carouselItems = carousel.querySelector('.paintWrap');
        const prevButton = carousel.querySelector('#prevBtn');
        const nextButton = carousel.querySelector('#nextBtn');
        const items = carouselItems.querySelectorAll('.paintItem');
        const itemsPerPage = 3; // 每次移動 3 個 item
        const itemWidth = window.innerWidth * 0.845; // 單次移動距離 84.5vw
        let currentPage = 0;
        const totalPages = Math.ceil(items.length / itemsPerPage);

        function updateCarousel() {
            const offset = currentPage * itemWidth;
            items.forEach(item => {
                item.style.transform = `translateX(-${offset}px)`;
                item.style.transition = 'transform 0.5s ease-in-out';
            });
            carouselItems.style.transition = 'transform 0.5s ease-in-out';
            updateButtons();
        }

        function updateButtons() {
            prevButton.style.visibility = currentPage === 0 ? 'hidden' : 'visible';
            nextButton.style.visibility = currentPage === totalPages - 1 ? 'hidden' : 'visible';
        }

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
        });
    });
});
