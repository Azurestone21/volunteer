// 引入joi模块
let joi = require('joi');

// 定义对象的验证规则
let schema = {
  username: joi.string().min(2).max(5).required().error(new Error('username没有通过验证'))
};

async function run() {
  try {
    // 验证
    await joi.validate({username: 'ab'}, schema);
  } catch (e) {
    console.log(e.message);
    return;
  }
  console.log('通过');
}

run();