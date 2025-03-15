import { artists } from './artistData.js';

//展覽畫面渲染
document.addEventListener("DOMContentLoaded", function () {

    const artist = artists.find(a => a.name === "張維玲");

    if (!artist) {
        console.error("找不到該畫家的作品資料");
        return;
    }

    const artworkData = artist.artworkData; // 從 `artistData.js` 取得作品資料


    // 取得作品容器
    const artworkContainer = document.getElementById("artworkContainer");

    // 使用 DocumentFragment 來提高效能
    const fragment = document.createDocumentFragment();

    // 動態生成作品卡片
    artworkData.forEach((art) => {
        // 創建 paintItem
        const paintItem = document.createElement("div");
        paintItem.classList.add("paintItem");

        // 創建 paintPhoto
        const paintPhoto = document.createElement("div");
        paintPhoto.classList.add("paintPhoto");

        const img = document.createElement("img");
        img.src = art.imageUrl;
        img.alt = art.title;
        paintPhoto.appendChild(img);

        // 創建 paintName
        const paintName = document.createElement("div");
        paintName.classList.add("paintName");
        paintName.textContent = art.title;

        // 創建 paintMedium
        const paintMedium = document.createElement("div");
        paintMedium.classList.add("paintMedium");
        paintMedium.textContent = art.material;

        // 創建 paintDetail
        const paintDetail = document.createElement("div");
        paintDetail.classList.add("paintDetail");

        const detailText = document.createElement("span");
        detailText.innerHTML = `尺寸: ${art.size} cm<br>採證日期: ${art.date}`;
        paintDetail.appendChild(detailText);

        // 組合結構
        paintName.appendChild(paintMedium);
        paintName.appendChild(paintDetail);

        paintItem.appendChild(paintPhoto);
        paintItem.appendChild(paintName);

        // 加入 fragment
        fragment.appendChild(paintItem);
    });

    // 一次性將所有元素加入 DOM
    artworkContainer.appendChild(fragment);
});




document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.paintWrapContainer').forEach(carousel => {
        const carouselItems = carousel.querySelector('.paintWrap');
        const prevButton = carousel.querySelector('#prevBtn');
        const nextButton = carousel.querySelector('#nextBtn');
        const items = carouselItems.querySelectorAll('.paintItem');
        const itemsPerPage = 3; // 每次移動 3 個 item
        const itemWidth = window.innerWidth * 0.855; // 單次移動距離 84.5vw
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
