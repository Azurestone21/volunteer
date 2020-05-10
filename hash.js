// 导入bcrypt
let bcrypt = require('bcryptjs');
// 生成随机字符串
/*
  genSalt方法接收一个数值作为参数
  数据越大，生成的随机字符串越复杂
  数值越小，生成的随机字符串越简单
  默认 10
  返回生成的随机字符串
 */
async function run() {
  let salt = await bcrypt.genSalt(10);
  // 加密
  // 1. 明文
  // 2. 随机字符串
  let result = await bcrypt.hash('123456', salt);
  console.log(result);
  console.log(salt);
}
run();