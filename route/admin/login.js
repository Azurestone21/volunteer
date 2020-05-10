
// 导入用户集合构造函数
let {User} = require('../../model/user');
// 导入bcrypt
let bcrypt = require('bcryptjs');

let login = async  (req, res) => {
  // res.send(req.body);
  // 接收请求参数
  let {email, password} = req.body;
  // 如果用户没有输入邮箱
  if (email.trim().length == 0 || password.trim().length == 0) {
    // return res.status(400).send('<h4>邮箱地址或者密码错误</h4>');
    return res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
  }

  // 根据邮箱地址查询用户信息
  // 如果查询到用户，user变量为对象类型
  // 如果没有查询到用户，user变量为空
  let user = await User.findOne({email: email});
  // 查询到用户
  if (user) {
    // 将客户端传递过来的密码和用户信息中的密码进行比对
    // true 成功  false 失败
    let isValid = await bcrypt.compare(password, user.password);
    // 密码一致
    if (isValid) {
      // 将用户名存储在请求对象中
      // session自动生成sessionId，保存到cookie
      req.session.username = user.username;
      req.session.role = user.role;
      // res.send('登录成功');
      // app.locals全局可用
      req.app.locals.userInfo = user;
      // 对用户的角色进行判断
      if (user.role === 'admin') {
        // 重定向用户列表
        res.redirect('/admin/user');
      } else {
        // 重定向首页
        res.redirect('/home/');
      }

    } else {
      res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
    }
  } else {
    // 没有查询到用户
    res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'});
  }
};

module.exports = login;