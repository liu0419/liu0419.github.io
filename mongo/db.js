const mongoose = require('mongoose');
require('dotenv').config();

// 設定連線字串
const uri = process.env.MONGODB_INFO;

// MongoDB 連線函式
const connectDB = async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB successfully!');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1); // 終止應用程式
    }
  };
  
  module.exports = connectDB;