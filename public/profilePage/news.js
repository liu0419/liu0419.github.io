document.addEventListener("DOMContentLoaded", function () {
    // 模擬後端回傳「展覽資訊」資料
    const exhibitionData = [
        {
            title: "吉光片羽林福油畫個展",
            date: "2025.02.06- 2025.03.10",
            location: "台北",
            imageUrl: "../img/exhibition1.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            title: "現代藝術展：探索未來",
            date: "2024/06/01 - 2024/06/30",
            location: "高雄美術館",
            imageUrl: "../img/exhibition2.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"

        },
        {
            title: "抽象與現實：當代藝術的對話",
            date: "2024/07/15 - 2024/07/25",
            location: "台中藝術中心",
            imageUrl: "../img/exhibition3.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            title: "水墨畫國際交流展",
            date: "2024/08/05 - 2024/08/20",
            location: "國立故宮博物院",
            imageUrl: "../img/exhibition1.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        }
    ];

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
    const relatedArticles = [
        {
            agency:"CNN",
            title: "藝術的影響力：解析現代油畫趨勢",
            date: "2024/01/15",
            imageUrl: "../img/relatedArticles1.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            agency:"CNN",
            title: "畫布上的夢想：當代藝術家的創作歷程",
            date: "2024/02/10",
            imageUrl: "../img/relatedArticles2.png",
            newsC: "「吉光片羽」，意指美好的事物稍縱即逝。這與展出的畫作中捕捉到的瞬間光影變幻、自然景致的短暫美感是相呼應的，突出了作品的核心主題和藝術特色，不管作品的具象與否解渴引發觀者對作品中蘊含的詩意與情感的聯想和思考，並促進了更深度的文化與藝術交流，邀請觀眾探索生命的珍貴與美好。"
        },
        {
            agency:"CNN",
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


