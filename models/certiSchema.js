// models/certi.js
const mongoose = require('mongoose');

// 定義 workInfo 子文件，這裡使用 Map 來儲存左右兩邊資料（各自可存入任意 key-value 資料）
const workInfoSchema = new mongoose.Schema({
  leftPart: { type: Map, of: String },
  rightPart: { type: Map, of: String }
}, { _id: false });

// 定義單一語系的 Schema
const languageSchema = new mongoose.Schema({
  // lang: { type: String, required: true }, // 例如 "zh" 或 "en"
  title1: { type: String, required: true },
  title2: { type: String, required: true },
  subtitle: { type: String },
  sampleIdTitle: { type: String },
  sampleDateTitle: { type: String },
  workInfoTitle: { type: String },
  fingerprintTitle: { type: String },
  sampleId: { type: String },
  sampleDate: { type: String },
  workInfo: workInfoSchema,
  moreInfo: { type: String },
  name: { type: String },
  date: { type: String },
  datesize: { type: String },
  fingerprintimg: { type: String },
  buttonText: { type: String },
  SamplerSignature:{ type: String },
  CommissionerSignature:{ type: String },
}, { _id: false });

// 定義最外層的 schema，分別儲存中文 (zh) 與英文 (en) 資料
const certiSchema = new mongoose.Schema({
    zh: languageSchema,
    en: languageSchema
  });
const certi =mongoose.model('certi', certiSchema,'certi');
// 匯出 Model，預設 collection 名稱為 "certis"
module.exports = certi


// {
//   "zh": {
//     "title1": "採樣",
//     "title2": "確認書",
//     "subtitle": "Completion of Sampling Confirmation",
//     "sampleIdTitle": "採樣編號",
//     "sampleDateTitle": "採樣日期",
//     "workInfoTitle": "作品資料",
//     "fingerprintTitle": "數位指紋",
//     "sampleId": "TW-20240528",
//     "sampleDate": "2024/05/28 13:00",
//     "workInfo": {
//       "leftPart": {
//         "作品名稱": "自畫像",
//         "尺寸": "91x59 cm",
//         "委託單位": "家畫廊"
//       },
//       "rightPart": {
//         "委託人與創作者關係": "收藏家",
//         "創作媒材": "彩墨",
//         "創作年代": "1933"
//       }
//     },
//     "moreInfo": "已由藝信採證人員採樣完成。",
//     "name": "採樣人簽名：<br> 委託人簽名：",
//     "date": "中華民國113年05月28日",
//     "datesize": "1.5em",
//     "fingerprintimg": "../project/img/Y.N_part1.png",
//     "buttonText": "switchlanguage"
//   },
//   "en": {
//     "title1": "採樣",
//     "title2": "確認書",
//     "subtitle": "Completion of Sampling Confirmation",
//     "sampleIdTitle": "Evidence Number",
//     "sampleDateTitle": "Sampling Date",
//     "workInfoTitle": "Artwork Information",
//     "fingerprintTitle": "Digital Fingerprint",
//     "sampleId": "TW-20240528",
//     "sampleDate": "2024/05/28 13:00",
//     "workInfo": {
//       "leftPart": {
//         "Artwork Title": "Self-Portrait",
//         "Dimensions": "91 x 59 cm",
//         "Commissioning Unit": "Jia Gallery"
//       },
//       "rightPart": {
//         "Commissioner-Artist Relationship": "Collector",
//         "Medium": "Ink and Color on Paper",
//         "Year of Creation": "1933"
//       }
//     },
//     "moreInfo": "The evidence sampling was conducted by YiXin personnel.",
//     "name": "Sampler's Signature: <br> Commissioner's Signature: ",
//     "date": "May28,2024 (ROC Year 113)",
//     "datesize": "4.5px",
//     "fingerprintimg": "../project/img/Y.N_part1.png",
//     "buttonText": "切換語言"
//   }
// }