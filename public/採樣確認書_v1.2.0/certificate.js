// const translations = {
    // zh: {
    //     title1: "採樣",
    //     title2: "確認書",
    //     subtitle: "Completion of Sampling Confirmation",
    //     sampleIdTitle: "採樣編號",
    //     sampleDateTitle: "採樣日期",
    //     workInfoTitle: "作品資料",
    //     fingerprintTitle: "數位指紋",
    //     sampleId: "TW-20240528",
    //     sampleDate: "2024/05/28 13:00",
    //     workInfo: {
    //         "leftPart": {
    //             "作品名稱":"自畫像",
    //             "尺寸": "91x59 cm",
    //             "委託單位": "家畫廊"
    //         },
    //         "rightPart": {
    //             "委託人與創作者關係": "收藏家",
    //             "創作媒材": "彩墨",
    //             "創作年代": "1933"
    //         }
    //     },
    //     moreInfo: "已由藝信採證人員，於桃園市蘆竹區新南路一段 125 號 B1 採樣完成。 作品特徵質將永久保存於區塊鏈當中，完成藝信專利技術之採樣服。委託人確定採樣人確實選取藝術品之數個採樣點，並採取數位指紋，完成該件作品之採樣服務。",
    //     name: "採樣人簽名：<br> 委託人簽名：",
    //     date: "中華民國113年05月28日",
    //     datesize: "1.5em",
    //     fingerprintimg: "../project/img/Y.N_part1.png",
    //     buttonText: "switchlanguage"
    // },
    // en: {
    //     title1: "採樣",
    //     title2: "確認書",
    //     subtitle: "Completion of Sampling Confirmation",
    //     sampleIdTitle: "Evidence Number",
    //     sampleDateTitle: "Sampling Date",
    //     workInfoTitle: "Artwork Information",
    //     fingerprintTitle: "Digital Fingerprint",
    //     sampleId: "TW-20240528",
    //     sampleDate: "2024/05/28 13:00",
    //     workInfo: {
    //         "leftPart": {
    //             "Artwork Title": "Self-Portrait",
    //             "Dimensions": "91 x 59 cm",
    //             "Commissioning Unit": "Jia Gallery"
    //         },
    //         "rightPart": {
    //             "Commissioner-Artist Relationship":"Collector",                
    //             "Medium": "Ink and Color on Paper",
    //             "Year of Creation": "1933"
    //         }
    //     },
//         moreInfo: "he evidence sampling was conducted by YiXin personnel at B1, No. 125, Section 1, Xinnan Road, Luzhu District, Taoyuan City. The distinctive characteristics of the artwork have been permanently recorded on the blockchain utilizing YiXin’s proprietary technology. The commissioner has verified that the sampling personnel precisely identified multiple sampling points on the artwork and successfully captured its digital fingerprint, thereby completing the sampling process for this piece.",
//         name: "Sampler's Signature: <br> Commissioner's Signature: ",
//         date: "May28,2024( Republic of China Year 113 )",
//         datesize: "4.5px",
//         fingerprintimg: "../project/img/Y.N_part1.png",
//         buttonText: "切換語言"
//     }
// };

// let currentLang = "zh";
// function switchLanguage() {
//     currentLang = currentLang === "zh" ? "zh" : "en";
//     document.getElementById("title1").textContent = translations[currentLang].title1;
//     document.getElementById("title2").textContent = translations[currentLang].title2;
//     document.getElementById("subtitle").textContent = translations[currentLang].subtitle;
//     document.getElementById("sample-id-title").textContent = translations[currentLang].sampleIdTitle;
//     document.getElementById("sample-date-title").textContent = translations[currentLang].sampleDateTitle;
//     document.getElementById("work-info-title").textContent = translations[currentLang].workInfoTitle;
//     document.getElementById("fingerprint-title").textContent = translations[currentLang].fingerprintTitle;
//     document.getElementById("id-content").textContent = translations[currentLang].sampleId;
//     document.getElementById("date-content").textContent = translations[currentLang].sampleDate;

//     const workInfo = translations[currentLang].workInfo;
//     document.getElementById("work-info").innerHTML = `
//         <div class="info-box-content">
//             <div class="left-part">
//                 ${Object.entries(workInfo.leftPart)
//                     .map(([key, value]) => `${key}: ${value}`)
//                     .join("<br>")}
//             </div>
//             <div class="right-part">
//                 ${Object.entries(workInfo.rightPart)
//                     .map(([key, value]) => `${key}: ${value}`)
//                     .join("<br>")}
//             </div>
//         </div>
//     `;
//     // document.getElementById("lang-btn").textContent = translations[currentLang].buttonText;
//     document.getElementById("moreinfo").innerHTML = translations[currentLang].moreInfo;
//     document.getElementById("name").innerHTML = translations[currentLang].name;
//     document.getElementById("YYYYMMDD").innerHTML = translations[currentLang].date;
//     document.getElementById("YYYYMMDD").style.letterSpacing = translations[currentLang].datesize;
    
//     document.getElementById("pic1").src = translations[currentLang].fingerprintimg;

//     // document.getElementById("pic2").innerHTML = translations[currentLang].fingerprintimg;
//     // document.getElementById("pic3").innerHTML = translations[currentLang].fingerprintimg;
//     // document.getElementById("pic4").innerHTML = translations[currentLang].fingerprintimg;
// }

// switchLanguage()


let sampleId="TW-20240528";
let currentLang = "zh";
// 透過 sampleId 取得證書資料
async function fetchCertificate(sampleId) {
    try {
        const response = await fetch(`/certi/certiSearch/${sampleId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        renderPage(data);
    } catch (error) {
        console.error("Error fetching certificate:", error);
    }
}

// 渲染畫面
function renderPage(data) {
    const translations = data[currentLang]; // 根據目前語言選擇對應的翻譯資料

    document.getElementById("title1").textContent = translations.title1;
    document.getElementById("title2").textContent = translations.title2;
    document.getElementById("subtitle").textContent = translations.subtitle;
    document.getElementById("sample-id-title").textContent = translations.sampleIdTitle;
    document.getElementById("sample-date-title").textContent = translations.sampleDateTitle;
    document.getElementById("work-info-title").textContent = translations.workInfoTitle;
    document.getElementById("fingerprint-title").textContent = translations.fingerprintTitle;
    document.getElementById("id-content").textContent = translations.sampleId;
    document.getElementById("date-content").textContent = translations.sampleDate;

    const workInfo = translations.workInfo;
    document.getElementById("work-info").innerHTML = `
        <div class="info-box-content">
            <div class="left-part">
                ${Object.entries(workInfo.leftPart)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join("<br>")}
            </div>
            <div class="right-part">
                ${Object.entries(workInfo.rightPart)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join("<br>")}
            </div>
        </div>
    `;
    document.getElementById("moreinfo").innerHTML = translations.moreInfo;
    document.getElementById("name").innerHTML = translations.name;
    document.getElementById("YYYYMMDD").innerHTML = translations.date;
    document.getElementById("YYYYMMDD").style.letterSpacing = translations.datesize;
    document.getElementById("pic1").src = translations.fingerprintimg;
}

// 切換語言
function switchLanguage() {
    currentLang = currentLang === "zh" ? "en" : "zh"; // 切換語言
    fetchCertificate(sampleId); // 重新載入資料
}

// 初始加載
fetchCertificate(sampleId);



const el = document.querySelector("#something");
html2canvas(el, [option])
  .then(canvas => { document.body.appendChild(canvas) });