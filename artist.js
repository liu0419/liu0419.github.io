document.addEventListener('DOMContentLoaded', function () {
    // 取得 carousel 容器與左右按鈕
    const track = document.querySelector('.paintWrap');
    const leftButton = document.querySelector('.paintButtonL');
    const rightButton = document.querySelector('.paintButtonR');
  
    // 每個 item 的寬度與間距（單位：px）
    const itemWidth = 392;
    const gap = 32;
    // 每次移動的距離 = item 寬度 + gap = 392 + 32 = 424px
    const shiftAmount = itemWidth + gap;
  
    // 取得所有項目（請確保每個項目都有 .paintItem 類別）
    const items = track.querySelectorAll('.paintItem');
    const totalItems = items.length;
  
    // 假設同時可視的項目數（此範例以 1240px 寬度容器顯示 3 個 item 為例）
    const visibleCount = 3;
    // 最大可移動的次數 = 總項目數 - 可視項目數
    const maxIndex = totalItems - visibleCount;
  
    // 記錄目前的 carousel 索引（初始為 0）
    let currentIndex = 0;
  
    // 根據 currentIndex 設定 track 的移動距離
    function updateTrack() {
      const offset = currentIndex * shiftAmount;
      track.style.transform = `translateX(-${offset}px)`;
    }
  
    // 根據目前索引更新左右按鈕的顯示狀態
    function updateButtons() {
      // 最左邊隱藏左側按鈕
      if (currentIndex <= 0) {
        leftButton.style.display = 'none';
      } else {
        leftButton.style.display = 'block';
      }
  
      // 最右邊隱藏右側按鈕
      if (currentIndex >= maxIndex) {
        rightButton.style.display = 'none';
      } else {
        rightButton.style.display = 'block';
      }
    }
  
    // 初始化更新
    updateTrack();
    updateButtons();
  
    // 右側按鈕點擊事件
    rightButton.addEventListener('click', function () {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateTrack();
        updateButtons();
      }
    });
  
    // 左側按鈕點擊事件
    leftButton.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateTrack();
        updateButtons();
      }
    });
  });