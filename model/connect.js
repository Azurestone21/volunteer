// 引入mongoose第三方模块
let mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://volunteer:123456@localhost:27017/volunteer',{ useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() =>  console.log('数据库连接失败'));