  // 取得元素
  const track = document.querySelector('.paintWrap');
  const btn = document.querySelector('.paintButtom');

  // 設定每個 item 的寬度與間距（單位：px）
  const itemWidth = 392;
  const gap = 32;
  // 每次移動的距離 = item 寬度 + gap = 392 + 32 = 424px
  const shiftAmount = itemWidth + gap;

  // 防止連續點擊造成動畫重疊
  let isMoving = false;

  btn.addEventListener('click', function () {
      if (isMoving) return;
      isMoving = true;
      // 使用 transition 動畫移動 track
      track.style.transition = 'transform 0.3s ease-in-out';
      track.style.transform = `translateX(-${shiftAmount}px)`;
  });

  // 當 transition 結束後，將第一個 item 移至最後並重置 transform
  track.addEventListener('transitionend', function () {
      // 移除 transition 避免重置 transform 時觸發動畫
      track.style.transition = 'none';
      // 將第一個 item 移到 track 的最後
      track.appendChild(track.firstElementChild);
      // 重置 transform，達到無縫循環效果
      track.style.transform = 'translateX(0)';
      isMoving = false;
  });