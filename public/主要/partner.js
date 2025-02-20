 // 取得所有 tab 與內容區塊
 const partners = document.querySelectorAll('.partnerBox');
 const contents = document.querySelectorAll('.partnerContent');

 // 監聽每個 tab 的點擊事件
 partners.forEach(partner => {
     partner.addEventListener('click', () => {
         // 先移除所有 tab 的 active 狀態
         partners.forEach(t => t.classList.remove('active'));
         // 移除所有內容區塊的 active 狀態
         contents.forEach(c => c.classList.remove('active'));

         // 為點選的 tab 加上 active 狀態
         partner.classList.add('active');
         // 根據 tab 上的 data-tab 取得對應內容區塊並顯示
         const tabId = partner.getAttribute('data-tab');
         const activeContent = document.querySelector(`.partnerContent[data-tab="${tabId}"]`);
         activeContent.classList.add('active');


     })
 })