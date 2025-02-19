document.addEventListener('DOMContentLoaded', function () {
  class Carousel {
      constructor(carouselElement) {
          // 取得該 carousel 中的相關元素
          this.carouselElement = carouselElement;
          this.track = carouselElement.querySelector('.paintWrap');
          this.leftButton = carouselElement.querySelector('.paintButtonL');
          this.rightButton = carouselElement.querySelector('.paintButtonR');
          this.items = this.track.querySelectorAll('.paintItem');

          // 設定每個 item 的寬度與間距
          this.itemWidth = 392;
          this.gap = 32;
          this.shiftAmount = this.itemWidth + this.gap; // 每次移動的距離

          // 設定可視數量（假設顯示 3 個 item）
          this.visibleCount = 3;
          this.totalItems = this.items.length;
          this.maxIndex = this.totalItems - this.visibleCount;

          // 初始化狀態
          this.currentIndex = 0;
          this.updateTrack();
          this.updateButtons();

          // 綁定事件
          this.leftButton.addEventListener('click', this.onLeftClick.bind(this));
          this.rightButton.addEventListener('click', this.onRightClick.bind(this));
      }

      updateTrack() {
          const offset = this.currentIndex * this.shiftAmount;
          this.track.style.transform = `translateX(-${offset}px)`;
      }

      updateButtons() {
          // 當在最左邊時隱藏左按鈕
          this.leftButton.style.display = this.currentIndex <= 0 ? 'none' : 'block';
          // 當在最右邊時隱藏右按鈕
          this.rightButton.style.display = this.currentIndex >= this.maxIndex ? 'none' : 'block';
      }

      onLeftClick() {
          if (this.currentIndex > 0) {
              this.currentIndex--;
              this.updateTrack();
              this.updateButtons();
          }
      }

      onRightClick() {
          if (this.currentIndex < this.maxIndex) {
              this.currentIndex++;
              this.updateTrack();
              this.updateButtons();
          }
      }
  }

  // 取得所有 carousel 的容器（例如每個 carousel 的外層都給予 .carousel 類別）
  const carouselElements = document.querySelectorAll('.carousel');
  carouselElements.forEach(carouselElement => {
      new Carousel(carouselElement);
  });
});