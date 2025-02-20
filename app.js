const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
const port = 3000;
const certiRouter = require('./routes/certi');
app.use('/certi', certiRouter);
// 定義路由：當訪問根目錄時回應 "Hello Node.js backend!"
app.get('/', (req, res) => {
    res.send('Hello is Node.js backend!');
  });
  
  // 啟動伺服器
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });