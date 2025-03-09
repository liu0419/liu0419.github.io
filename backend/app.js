const express = require('express');
const fs = require("fs"); // ✅ 確保這行存在
const app = express();
const connectDB = require('./mongo/db.js');
const certiRouter = require('./routes/certiRoutes.js');
const usersRouter = require("./routes/usersRoutes.js");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('../frontend'));
connectDB()

// ✅ 測試 Heroku 是否讀取 `routes` 資料夾內的檔案
console.log("🔍 檢查 routes 資料夾內的檔案：");
console.log(fs.readdirSync("./routes"));

app.use('/certi', certiRouter);
app.use('/user', usersRouter); 
// 定義路由：當訪問根目錄時回應 "Hello Node.js backend!"
app.get('/', (req, res) => {
    res.send('Hello is Node.js backend!');
  });
  
  // 啟動伺服器
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log("Available Routes:");
    console.log(app._router.stack.filter(r => r.route).map(r => r.route.path));
  });

  app.post('/signup', async (req, res) => {
    const { email, password, username } = req.body;
    console.log(email, password, username);
  
    if (users[email]) {
      return res.status(400).send({ error: '用戶已存在'})
    }
  
    // 1-1 加密密碼
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(`加密密碼：${hashPassword}`);
  
    // 1-2 資料儲存
    users[email] = {
      password: hashPassword,
      username
    };
  
    // 1-3 回應
    res.status(201).send({
      message: '註冊成功'
    })
  
  })
