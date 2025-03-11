// 初始狀態設定為中文版
let isChinese = true;
    
// 定義對應的內容設定
const content = {
  chinese: {
    img: "../img/Property 1=中文.jpg",
    title: "獨一無二的智慧身份",
    text: "多功能整合：一份證書，完整檔案！",
    btnText: "查看英文版"
  },
  english: {
    img: "../img/Property 1=英文.jpg",
    title: "獨一無二的智慧身份",
    text: "多功能整合：一份證書，完整檔案！",
    btnText: "查看中文版"
  }
};

// 取得 DOM 元素
const certiImage = document.getElementById("certiImage");
const certiTitle = document.getElementById("certiTitle");
const certiText = document.getElementById("certiText");
const certiBtn = document.getElementById("certiBtn");

// 按鈕點擊事件
certiBtn.addEventListener("click", () => {
  if (isChinese) {
    // 切換到英文版
    certiImage.src = content.english.img;
    certiTitle.textContent = content.english.title;
    certiText.textContent = content.english.text;
    certiBtn.textContent = content.english.btnText;
  } else {
    // 切換回中文版
    certiImage.src = content.chinese.img;
    certiTitle.textContent = content.chinese.title;
    certiText.textContent = content.chinese.text;
    certiBtn.textContent = content.chinese.btnText;
  }
  isChinese = !isChinese;
});