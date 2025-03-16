document.addEventListener("DOMContentLoaded", function () {
    const artistContainer = document.getElementById("artistConatiner");

    if (!artistContainer) {
        console.error("Error: #artistContainer element not found.");
        return;
    }

    const artistInfo = [
        {
            imgUrl: "../img/nnn.png",
            name: "龐銚 老師",
            intro: "1973年生於北京，成長於香港與台北，畢業於臺灣藝術專科學校及美國國立芳邦大學藝術創作碩士。來自藝術世家，作品風格以黑白灰金屬色為主調，探索具象與非具象之間的純粹本質。曾獲台灣南瀛獎等多項榮譽，作品被多地典藏，並跨界主持榮獲金鐘獎，展現藝術生活的多元可能。",
            artworkData: [
                { title: "秋分 (2021)", material: "複合媒材", size: "70.0 x 70.0 cm", date: "2024/12/01", imageUrl: "../img/art3.png" },
                { title: "小丘 (2021)", material: "複合媒材", size: "48.0 x 74.0 cm", date: "2024/12/01", imageUrl: "../img/image.png" },
                { title: "晨曦 (2021)", material: "水彩", size: "50.0 × 40.0", date: "2024/12/01", imageUrl: "../img/art3.png" },
            ]
        },
        {
            imgUrl: "../img/Profile Image.jpg",
            name: "謝明錩 老師",
            intro: "以水彩細膩描繪生活角落，題材涵蓋花卉、鮮果、農家與自然景色，結合寫實與詩意，畫作洋溢陽光溫暖氣息。他以創新技法與深厚情感注入，強調「意念帶來技巧，技巧形成風格」，展現當代藝術的人文之美，讓觀者沉浸於詩意與故事交織的水彩世界。",
            artworkData: [
                { title: "小漁村 (2021)", material: "油畫", size: "22.5 × 15.5", date: "2024/12/01", imageUrl: "../img/art1.png" },
                { title: "秋分 (2021)", material: "複合媒材", size: "70.0 × 70.0", date: "2024/12/01", imageUrl: "../img/art2.png" },
                { title: "晨曦 (2021)", material: "水彩", size: "50.0 × 40.0", date: "2024/12/01", imageUrl: "../img/art3.png" }
            ]
        },
        {
            imgUrl: "../img/片頭-照片1-1.jpg",
            name: "成耆仁 老師",
            intro: "國立歷史博物館藝術史博士，現任國立臺灣藝術大學造型藝術研究所副教授，精通瓷器收藏與中國器物鑑賞研究，對亞洲藝術文化深具造詣。曾多次策劃國際研討會與展覽，並發表數十篇學術論文與專著，致力推廣陶瓷藝術與文化遺產研究。",
            artworkData: [
                {
                    title: "小漁村 (2021)",
                    material: "油畫",
                    size: "22.5 × 15.5",
                    date: "2024/12/01",
                    imageUrl: "../img/art1.png"
                },
                {
                    title: "秋分 (2021)",
                    material: "複合媒材",
                    size: "70.0 × 70.0",
                    date: "2024/12/01",
                    imageUrl: "../img/art2.png"
                },
                {
                    title: "晨曦 (2021)",
                    material: "水彩",
                    size: "50.0 × 40.0",
                    date: "2024/12/01",
                    imageUrl: "../img/art3.png"
                },
                {
                    title: "晨曦 (2021)",
                    material: "水彩",
                    size: "50.0 × 40.0",
                    date: "2024/12/01",
                    imageUrl: "../img/art3.png"
                },
            ]
        },
        
    ];

    const fragment = document.createDocumentFragment();

    artistInfo.forEach((artist, index) => {
        const isRight = index % 2 !== 0 ? " right" : "";

        const artistDiv = document.createElement("div");
        artistDiv.className = `artistC${isRight}`;

        // 圖片區
        const photoDiv = document.createElement("div");
        photoDiv.className = `artistPhoto${isRight}`;
        const img = document.createElement("img");
        img.src = artist.imgUrl;
        photoDiv.appendChild(img);

        // 文字介紹
        const wordDiv = document.createElement("div");
        wordDiv.className = `artistCWord${isRight}`;
        wordDiv.innerHTML = `<div class="artistN">${artist.name}</div>
                             <div class="artistIntro">${artist.intro}</div>`;

        // 輪播區
        const carouselWrapper = document.createElement("div");
        carouselWrapper.className = `carousel-wrapper-1${isRight}`;

        const prevButton = document.createElement("button");
        prevButton.className = "carousel-btn left hidden prevBtn";
        prevButton.innerHTML = `<img src="../img/btn (1).png">`;

        const carouselContainer = document.createElement("div");
        carouselContainer.className = "carousel-container-1";

        const carouselWrap = document.createElement("div");
        carouselWrap.className = "carousel-wrap";
        carouselWrap.id = `carouselWrap-${index}`;

        // 作品區 (自動生成所有作品)
        artist.artworkData.forEach(art => {
            const paintItem = document.createElement("div");
            paintItem.className = "paintItem";

            const paintPhoto = document.createElement("div");
            paintPhoto.className = "paintPhoto";
            const paintImg = document.createElement("img");
            paintImg.src = art.imageUrl;
            paintImg.alt = art.title;
            paintPhoto.appendChild(paintImg);

            const paintName = document.createElement("div");
            paintName.className = "paintName";
            paintName.textContent = art.title;

            const paintMedium = document.createElement("div");
            paintMedium.className = "paintMedium";
            paintMedium.textContent = art.material;

            const paintDetail = document.createElement("div");
            paintDetail.className = "paintDetail";
            paintDetail.innerHTML = `<span>尺寸 : ${art.size}<br>採證日期 : ${art.date}</span>`;

            paintName.appendChild(paintMedium);
            paintName.appendChild(paintDetail);
            paintItem.appendChild(paintPhoto);
            paintItem.appendChild(paintName);
            carouselWrap.appendChild(paintItem);
        });

        carouselContainer.appendChild(carouselWrap);

        const nextButton = document.createElement("button");
        nextButton.className = "carousel-btn right nextBtn";
        nextButton.innerHTML = `<img src="../img/btn.png">`;

        carouselWrapper.appendChild(prevButton);
        carouselWrapper.appendChild(carouselContainer);
        carouselWrapper.appendChild(nextButton);

        // 組合畫家區塊
        artistDiv.appendChild(photoDiv);
        artistDiv.appendChild(wordDiv);
        artistDiv.appendChild(carouselWrapper);

        // 添加到 DocumentFragment
        fragment.appendChild(artistDiv);
    });

    // 一次性插入 DOM，提高效能
    artistContainer.appendChild(fragment);

    // 🚀 **確保畫家區塊載入後再執行輪播功能**
    setTimeout(initCarousel, 100);
});






// ✅ **正確初始化輪播功能**
function initCarousel() {
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
}