document.addEventListener("DOMContentLoaded", function () {
    const newsContent = [
        {
            agency:"CNN",
            title: "藝術的影響力：解析現代油畫趨勢",
            date: "2024/01/15",
            imageUrl: "../img/relatedArticles1.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            agency:"公民新聞",
            title: "畫布上的夢想：當代藝術家的創作歷程",
            date: "2024/02/10",
            imageUrl: "../img/relatedArticles2.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            agency:"自由時報",
            title: "色彩的魔法：解析水彩藝術的魅力",
            date: "2024/03/05",
            imageUrl: "../img/relatedArticles3.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            agency:"CNN",
            title: "抽象與現實：探索藝術的界限",
            date: "2024/03/20",
            imageUrl: "../img/relatedArticles1.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            agency:"CNN",
            title: "油畫技巧揭秘：如何掌握筆觸與色彩",
            date: "2024/04/02",
            imageUrl: "../img/relatedArticles2.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        }
    ];

    const newsItem = document.getElementById("newsItem");
    // 使用 DocumentFragment 來提高效能
    const fragment = document.createDocumentFragment();

    newsContent.forEach((news) => {
        const carouselitem = document.createElement("div");
        carouselitem.classList.add("carousel-item");

        const newsPicBox = document.createElement("div");
        newsPicBox.classList.add("newsPicBox");

        const newsPic = document.createElement("img");
        newsPic.classList.add("newsPic");
        newsPic.src = news.imageUrl;

        const carouselItemHeader = document.createElement("div");
        carouselItemHeader.classList.add("carousel-item-header");

        const newsAgency = document.createElement("span");
        newsAgency.classList.add("news", "agency");
        newsAgency.textContent = news.agency + " ";

        const news1 = document.createElement("span");
        news1.classList.add("news");
        news1.textContent = "| " + news.date;

        const newsTopic = document.createElement("div");
        newsTopic.classList.add("newsTopic");
        newsTopic.textContent = news.title;

        const newsC = document.createElement("div");
        newsC.classList.add("newsC");
        newsC.textContent = news.newsC;

        newsPicBox.appendChild(newsPic);
        carouselItemHeader.appendChild(newsAgency);
        carouselItemHeader.appendChild(news1);

        carouselitem.appendChild(newsPicBox);
        carouselitem.appendChild(carouselItemHeader);
        carouselitem.appendChild(newsTopic);
        carouselitem.appendChild(newsC);

        fragment.appendChild(carouselitem);
    })
    newsItem.appendChild(fragment);
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


