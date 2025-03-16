 
//  const block = document.querySelector('.block');

//  window.addEventListener('scroll', () => {
//      const rect = block.getBoundingClientRect();
//      const blockTop = rect.top;
//      const blockBottom = rect.bottom;
//      const vh = window.innerHeight;
 
//      // 設定相對寬度範圍
//      const minWidth = 90; // 最小寬度 90vw
//      const maxWidth = 100; // 最大寬度 100vw
 
//      // 狀況 A: 完全離開視窗，寬度回到最小
//      if (blockBottom < 0 || blockTop > vh) {
//          block.style.width = `${minWidth}vw`;
//          return;
//      }
 
//      // 計算可視範圍高度
//      const visibleHeight = Math.min(blockBottom, vh) - Math.max(blockTop, 0);
//      const ratio = visibleHeight / vh; // 用視窗高度當分母，避免 blockHeight 影響
//      const clampRatio = Math.max(0, Math.min(ratio, 1)); // 限制比例 0~1
 
//      // 計算新的寬度（線性插值）
//      const finalWidth = minWidth + (maxWidth - minWidth) * clampRatio;
 
//      // 套用新的樣式
//      block.style.width = `${finalWidth}vw`;
//  });

