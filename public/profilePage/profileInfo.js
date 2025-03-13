async function loadProfileData() {
  const data = {
      userImageUrl: '../img/59A1BC40-1971-4522-95DA-74E24BE8B8B3 1.png',
      name: '林福全',
      region: '台灣',
      year: '1963 -',
      description: `擁有國立臺灣師範大學美術系藝術學博士學位，現任該校美術系兼任助理教授。他曾在新竹師院（現國立新竹教育大學）及臺北市立大學任教，參與數十次國內外聯展，獲得包括全國版畫展第一名和全國油畫展金牌在內的多項殊榮。目前擔任中華民國跨世紀油畫研究會及臺灣今日畫家協會的理事。`,
      description1:
          '其創作理念是「體察生活，真心體悟」，他認為藝術是人類生命中最真摯且重要的紀錄形式。對他而言，藝術創作不僅是情感的表達，更是個人價值觀、生命經驗、處世態度及審美品味的綜合展現。因此，他將生活中對人事物的細膩觀察與真摯感悟融入作品中，賦予藝術創作深刻的意義。',
      timeline: [
          {
              title: '學歷',
              descriptionList: [
                  {
                      description: '國立臺灣師範大學藝術學博士',
                      year: ''
                  }
              ],
              showDetail: false
          },
          {
              title: '經歷',
              descriptionList: [
                  {
                      description: '國立臺灣師範大學美術系兼任助理教授<br>臺灣今日畫家協會理事長<br>中華民國油畫協會理事<br>中華民國跨世紀油畫研究會理事',
                      year: ''
                  }
              ],
              showDetail: false
          },
          {
              title: '個展',
              descriptionList: [
                  { description: '吉光片羽林福油畫個展 | 台北絢彩藝術中心', year: '2025' },
                  { description: '「因為，愛」林福全油畫個展 | 國父紀念館逸仙藝廊', year: '2019' },
                  { description: '「人間關懷」林福全個展 | 新竹縣文化局美術館', year: '2018' },
                  { description: '「人間關懷」林福全個展 | 高雄文化中心', year: '2017' },
                  { description: '行旅中的吉光片羽林福全油畫個展 | 吉林藝廊「𨑨迌」', year: '2017' },
                  { description: '林福全「人間關懷」油畫個展，師大德群藝廊', year: '2016' }
              ],
              showDetail: false
          },
          {
              title: '聯展',
              descriptionList: [
                  { description: '天地情懷-自然的意象油畫展 | 新竹縣影藝術中心', year: '2024' },
                  { description: '亞洲國際美展', year: '2001-2006' },
                  { description: '臺灣今日畫家協會聯展', year: '2008-2024' },
                  { description: '台北市藝術家聯展', year: '1999-2024' },
                  { description: '中華民國跨世紀油畫研究會聯展', year: '1999-2024' },
              ],
              showDetail: false
          },
          {
              title: '獲獎',
              descriptionList: [
                  { description: '第十屆中華人民共和國全國美展優秀作品獎', year: '2004' },
                  { description: '第五屆大墩美展油畫第二名', year: '1999' },
                  { description: '第二十三屆全國油畫展優選', year: '1999' },
                  { description: '第十三屆南美油畫展成績第二名', year: '1996' },
                  { description: '第十四屆日展版畫第一名', year: '1995' }
              ],
              showDetail: true
          },
          {
              title: '出版品',
              descriptionList: [
                  { description: '《破象·像·批判》— 藝術論述與人文社會對話專刊', year: '2013' },
                  { description: '林福全2001個展創作集', year: '2001' },
                  { description: '林福全2000年油畫作品集', year: '2000' },
                  { description: '林福全自選畫集', year: '1998' }
              ],
              showDetail: false
          },
          {
              title: '典藏',
              descriptionList: [
                  { description: '國立國父紀念館典藏', year: '' },
                  { description: '臺中市文化局典藏', year: '' },
                  { description: '文化部花蓮美術館典藏', year: '' },
                  { description: '高雄市立美術館典藏', year: '' }
              ],
              showDetail: false
          },
      ]
  };

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

