 
//  const block = document.querySelector('.block');
//     const minWidth = 1000;
//     const maxWidth = 2440;

//     window.addEventListener('scroll', () => {
//       const rect = block.getBoundingClientRect();
//       const blockTop = rect.top;
//       const blockBottom = rect.bottom;
//       const blockHeight = rect.height;
//       const vh = window.innerHeight;

//       // 狀況 A: 若區塊整個都在視窗上方 (blockBottom < 0) 或視窗下方 (blockTop > vh)，
//       //         代表完全離開視窗，寬度回到最小。
//       if (blockBottom < 0 || blockTop > vh) {
//         block.style.width = `${minWidth}px`;
//         return;
//       }

//       // 狀況 B: 區塊有部分或全部在視窗內
//       //   1. 先求「可視高度」：可視範圍頂端是 max(blockTop, 0)，底端是 min(blockBottom, vh)
//       //   2. 再用「可視高度 / 區塊本身高度」做為 ratio (0~1)
//       //      => ratio = 0 時代表沒在視窗中 => 用最小寬度
//       //      => ratio = 1 時代表整個在視窗中 => 用最大寬度
//       //   3. 依照 ratio 在 minWidth 與 maxWidth 之間線性插值
//       const visibleHeight = Math.min(blockBottom, vh) - Math.max(blockTop, 0);
//       const ratio = visibleHeight / blockHeight;
//       const clampRatio = Math.max(0, Math.min(ratio, 1));
//       const finalWidth = minWidth + (maxWidth - minWidth) * clampRatio;

//       block.style.width = `${finalWidth}px`;
//     });