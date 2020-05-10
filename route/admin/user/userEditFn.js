// 加密模块
let bcrypt = require('bcryptjs');
// 引用用户集合构造函数
let { User,validateUser } = require('../../../model/user');

module.exports = async (req, res, next) => {
  try {
    await validateUser(req.body);
  } catch (e) {
    // 验证没有通过
    // 重定向到用户添加页面
    // return res.redirect(`/admin/user-edit?message=${e.message}`)

    // JSON.stringify() 将对象数据类型转换为字符串类型
    return next(JSON.stringify({path: '/admin/user-edit', message: e.message}));
  }

  // 根据邮箱地址查询用户是否存在
  let user = await User.findOne({email: req.body.email});
  // 添加邮箱已存在
  if(user) {
    // return res.redirect(`/admin/user-edit?message=邮箱地址已被占用`)
    return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱地址已被占用'}));
  }

  // 邮箱不存在，对密码进行加密
  // 生成随机字符串
  let salt = await bcrypt.genSalt(10);
  // 加密
  let password = await bcrypt.hash(req.body.password, salt);
  // 替换密码
  req.body.password = password;
  // 将用户信息添加到数据库中
  await User.create(req.body);
  // 将页面重定向到用户列表页面
  res.redirect('/admin/user');
};