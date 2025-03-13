
 // 取得文章
 const articleContainer = document.getElementById("articleContainer");
// 模擬後端回傳「相關文章」資料
const relatedArticles = [
    {
        title: "藝術的影響力：解析現代油畫趨勢",
        date: "2024/01/15",
        imageUrl: "../img/relatedArticles1.png"
    },
    {
        title: "畫布上的夢想：當代藝術家的創作歷程",
        date: "2024/02/10",
        imageUrl: "../img/relatedArticles2.png"
    },
    {
        title: "色彩的魔法：解析水彩藝術的魅力",
        date: "2024/03/05",
        imageUrl: "../img/relatedArticles3.png"
    },
    {
        title: "抽象與現實：探索藝術的界限",
        date: "2024/03/20",
        imageUrl: "../img/relatedArticles1.png"
    },
    {
        title: "油畫技巧揭秘：如何掌握筆觸與色彩",
        date: "2024/04/02",
        imageUrl: "../img/relatedArticles2.png"
    }
];

// 動態生成展覽卡片
exhibitionData.forEach((exhibition) => {
    const exhibitionCard = document.createElement("div");
    exhibitionCard.classList.add("swiper-slide", "exhibition-card");
    exhibitionCard.innerHTML = `
            <img class="exhibition-image" src="${exhibition.imageUrl}" alt="${exhibition.title}">
            <div class="exhibition-info">
                <div class="exhibition-date">${exhibition.date}</div>
                <div class="exhibition-title">${exhibition.title}</div>
                <div class="exhibition-location">${exhibition.location}</div>
            </div>
        `;
    exhibitionContainer.appendChild(exhibitionCard);
});
