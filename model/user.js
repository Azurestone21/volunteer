// 引入mongoose第三方模块
let mongoose = require('mongoose');
// 导入bcrypt
let bcrypt = require('bcryptjs');
// 引入joi模块
let joi = require('joi');

// 创建用户集合规则
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // admin 超级管理员
  // normal 普通用户
  role: {
    type: String,
    required: true,
  },
  // 0 启动
  // 1 禁用
  state: {
    type: Number,
    required: true,
  }
});

// 创建集合
let User = mongoose.model('User', userSchema);

async function createUser() {
  let salt = await bcrypt.genSalt(10);
  let pass = await bcrypt.hash('123456', salt);
  let user = await User.create({
    username: 'zhangsan',
    email: 'zhansan123@163.com',
    password: pass,
    role: 'admin',
    state: '0'
  })
}
// createUser();

// 验证用户信息
let validateUser = user => {
  // 定义对象的验证规则
  let schema = {
    username: joi.string().min(2).max(12).required().error(new Error('用户名格式不符合要求')),
    email: joi.string().email().required().error(new Error('邮箱格式不符合要求')),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
    role: joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
    state: joi.number().valid('0', '1').required().error(new Error('状态值非法')),
  };
  // 验证
  return joi.validate(user, schema);
};

// 将用户集合作为模块成员进行导出
module.exports = {
  User,
  validateUser
};