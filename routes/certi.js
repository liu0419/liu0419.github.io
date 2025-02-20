// routes/certi.js
const express = require('express');
const path = require('path');
const router = express.Router();

// 定義 /sidindex 的路由，渲染 public/sidindex.html
router.get('/certi.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', '採樣確認書_v1.2.0', '採樣確認書.html'));
});

module.exports = router;
