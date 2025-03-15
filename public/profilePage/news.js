import { artists } from './artistData.js';
document.addEventListener("DOMContentLoaded", function () {
    // 1. 找到 "林福全" 的展覽資料
    const artist = artists.find(a => a.name === "林福全");

    if (!artist) {
        console.error("找不到該畫家的展覽資訊");
        return;
    }

    const exhibitionData = artist.exhibitionData; // 取得該畫家的展覽資訊

    // 取得作品容器
    const exhibiNews = document.getElementById("exhibiNews");
    // 使用 DocumentFragment 來提高效能
    const fragment = document.createDocumentFragment();

    exhibitionData.forEach((exhibition) => {
        const carouselitem = document.createElement("div");
        carouselitem.classList.add("carousel-item");

        const newsPicBox = document.createElement("div");
        newsPicBox.classList.add("newsPicBox");

        const newsPic = document.createElement("img");
        newsPic.classList.add("newsPic");
        newsPic.src = exhibition.imageUrl;

        const carouselItemHeader = document.createElement("div");
        carouselItemHeader.classList.add("carousel-item-header");

        const newsAgency = document.createElement("span");
        newsAgency.classList.add("news", "agency");
        newsAgency.textContent = exhibition.location + " ";

        const news = document.createElement("span");
        news.classList.add("news");
        news.textContent = "| " + exhibition.date;

        const newsTopic = document.createElement("div");
        newsTopic.classList.add("newsTopic");
        newsTopic.textContent = exhibition.title;

        const newsC = document.createElement("div");
        newsC.classList.add("newsC");
        newsC.textContent = exhibition.newsC;

        newsPicBox.appendChild(newsPic);
        carouselItemHeader.appendChild(newsAgency);
        carouselItemHeader.appendChild(news);

        carouselitem.appendChild(newsPicBox);
        carouselitem.appendChild(carouselItemHeader);
        carouselitem.appendChild(newsTopic);
        carouselitem.appendChild(newsC);

        fragment.appendChild(carouselitem);
    })
    exhibiNews.appendChild(fragment);
});


//相關文章畫面渲染
document.addEventListener("DOMContentLoaded", function () {
    const artist = artists.find(a => a.name === "林福全");

    if (!artist) {
        console.error("找不到該畫家的相關文章");
        return;
    }

    const relatedArticles = artist.relatedArticles; // 取得該畫家的相關文章


    const relatedNews = document.getElementById("relatedNews");
    // 使用 DocumentFragment 來提高效能
    const fragment = document.createDocumentFragment();

    relatedArticles.forEach((article) => {
        const carouselitem = document.createElement("div");
        carouselitem.classList.add("carousel-item");

        const newsPicBox = document.createElement("div");
        newsPicBox.classList.add("newsPicBox");

        const newsPic = document.createElement("img");
        newsPic.classList.add("newsPic");
        newsPic.src = article.imageUrl;

        const carouselItemHeader = document.createElement("div");
        carouselItemHeader.classList.add("carousel-item-header");

        const newsAgency = document.createElement("span");
        newsAgency.classList.add("news", "agency");
        newsAgency.textContent = article.agency + " ";

        const news = document.createElement("span");
        news.classList.add("news");
        news.textContent = "| " + article.date;

        const newsTopic = document.createElement("div");
        newsTopic.classList.add("newsTopic");
        newsTopic.textContent = article.title;

        const newsC = document.createElement("div");
        newsC.classList.add("newsC");
        newsC.textContent = article.newsC;

        newsPicBox.appendChild(newsPic);
        carouselItemHeader.appendChild(newsAgency);
        carouselItemHeader.appendChild(news);

        carouselitem.appendChild(newsPicBox);
        carouselitem.appendChild(carouselItemHeader);
        carouselitem.appendChild(newsTopic);
        carouselitem.appendChild(newsC);

        fragment.appendChild(carouselitem);
    })
    relatedNews.appendChild(fragment);
});








document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const carouselItems = carousel.querySelector('.carousel-items');
        const prevButton = carousel.querySelector('.arrow.prev');
        const nextButton = carousel.querySelector('.arrow.next');
        const items = carousel.querySelectorAll('.carousel-item');
        const itemsPerPage = 3;  // 每頁顯示 3 個新聞 item
        let currentPage = 0;
        const totalPages = Math.ceil(items.length / itemsPerPage);

        function updateCarousel() {
            // 每頁寬度固定為 container 的寬度：1240px
            const offset = currentPage * window.innerWidth * 0.865;
            carouselItems.style.transform = `translateX(-${offset}px)`;
            updateButtons();
        }

        function updateButtons() {
            prevButton.style.display = currentPage === 0 ? 'none' : 'block';
            nextButton.style.display = currentPage === totalPages - 1 ? 'none' : 'block';
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


