// routes/certi.js
const express = require('express');
const path = require('path');
const router = express.Router();
const Certi = require('../models/certiSchema.js'); // 加入這行引入 Certi 模型

// // 定義 /certi.html 路由，回傳 HTML 檔案
// router.get('/certi.html', (req, res) => {
//     const id = req.query.id;
//     res.sendFile(path.join(__dirname, '..', 'public', '採樣確認書_v1.2.0', '採樣確認書.html'));
// });

http://localhost:3000/採樣確認書_v1.2.0/採樣確認書.html

router.post('/postdata', async (req, res) => {
  try {
    const certiData = req.body;
    const newCerti = new Certi(certiData);
    const savedCerti = await newCerti.save();
    res.status(201).json(savedCerti);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API：根據 sampleId 查詢證書資料
router.get("/certiSearch/:sampleId", async (req, res) => {
  try {
      const { sampleId } = req.params;
      const certificate = await Certi.findOne({ "zh.sampleId": sampleId });

      if (!certificate) {
          return res.status(404).json({ message: "Certificate not found" });
      }

      res.json(certificate);
  } catch (error) {
      res.status(500).json({ message: "Server Error", error });
  }
});


router.put("/certiUpdate/:sampleId", async (req, res) => {
  try {
    const { sampleId } = req.params;
    const updateData = req.body;

    // ✅ 確保 `sampleId` 存在
    if (!sampleId) {
      return res.status(400).json({ message: "Missing sampleId in request" });
    }

    // ✅ 確保 `updateData` 不是空的
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    // ✅ 遍歷 `updateData`，確保 `$set` 只更新內部欄位
    let formattedUpdateData = {};
    for (let key in updateData) {
      for (let subKey in updateData[key]) {
        formattedUpdateData[`${key}.${subKey}`] = updateData[key][subKey];
      }
    }

    console.log("Formatted Update Data:", formattedUpdateData);

    // ✅ 只更新提供的欄位，避免覆蓋整個 `zh` 或 `en`
    const updatedCertificate = await Certi.findOneAndUpdate(
      { "zh.sampleId": sampleId }, 
      { $set: formattedUpdateData }, // ✅ 只更新提供的欄位
      { new: true, runValidators: true } 
    );

    // ✅ 如果 `sampleId` 不存在，回傳 `404`
    if (!updatedCertificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.json({ message: "Certificate updated successfully", data: updatedCertificate });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.delete("/certiDelete/:sampleId", async (req, res) => {
  try {
    const { sampleId } = req.params;

    const deletedCertificate = await Certi.findOneAndDelete({ "zh.sampleId": sampleId });

    if (!deletedCertificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.json({ message: "Certificate deleted successfully", data: deletedCertificate });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;