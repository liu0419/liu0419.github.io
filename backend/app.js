const express = require('express');
const app = express();
const connectDB = require('./mongo/db.js');
const certiRouter = require('./routes/certiRoutes.js');
const usersRouter = require('./routes/usersRoutes.js');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('frontend'));
connectDB()

app.use('/certi', certiRouter);
app.use('/user', usersRouter); 
// 定義路由：當訪問根目錄時回應 "Hello Node.js backend!"
app.get('/', (req, res) => {
    res.send('Hello is Node.js backend!');
  });
  
  // 啟動伺服器
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });