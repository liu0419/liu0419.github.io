import { artists } from './artistData.js';

async function loadProfileData() {
      // 1. 查找 "林福全" 的 `data`
      const artist = artists.find(a => a.name === "林福全");

      if (!artist) {
          console.error("找不到畫家資料");
          return;
      }
  
      const data = artist.data;
  
    document.getElementById('profileImage').src = data.userImageUrl;
    document.getElementById('name').textContent = data.name;
    document.getElementById('region').textContent = data.region;
    document.getElementById('year').textContent = data.year;
    document.getElementById('description').innerHTML = data.description;
    document.getElementById('description1').innerHTML = data.description1;
  
    const timelineContainer = document.getElementById('timelineContainer');
    timelineContainer.innerHTML = ''; // 先清空，避免重複渲染
    data.timeline.forEach((item, index) => {
  
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
  
        // 生成HTML
        const descriptionsHtml = item.descriptionList.map(desc => {
            return `
            <div class="timeline-year timeline-date ${index % 2 === 0 ? 'emerald text-right' : 'purple text-left'}">
                ${desc.year ? `<strong>${desc.year}</strong>` : ''}
            </div>
            <br>
            <div class="timeline-text">
                ${desc.description}
            </div>
            `;
        }).join('');
  
        let detailButtonHtml = item.showDetail ? `<a href="#" class="see-detail-btn">SEE DETAIL</a>` : '';
        timelineItem.innerHTML = `
            
            <div class="timeline-dot ${index % 2 === 0 ? 'emerald' : 'purple'}"></div>
            <div class="timeline-line"></div>
            <div class="timeline-line-horizontal ${index % 2 === 0 ? 'emerald' : 'purple'}"></div>
            <div class="timeline-content">
                <div class="timeline-title">${item.title}</div>
                ${descriptionsHtml}
                ${detailButtonHtml}
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
      loadProfileData();
  });

 