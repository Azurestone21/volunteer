// 引用用户集合构造函数
let { User } = require('../../../model/user');
//
let bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
  // 接收客户端传过来的请求参数
  let { username, email, role, state, password} = req.body;
  // 即将要修改的信息
  let id = req.query.id;
  // 根据id在数据库中找到当前要修改用户
  let user = await User.findOne({_id: id});
  // 比对密码
  let isValid = await bcrypt.compare(password, user.password);
  // 比对成功
  if (isValid) {
    // 更新数据库
    await User.updateOne({_id: id}, {
      username: username,
      email: email,
      role: role,
      state: state,
    });
    // 将页面重定向到用户列表页面
    res.redirect('/admin/user');
  } else {
    // 密码比对失败
    let obj = {path: '/admin/user-edit', message: '密码验证失败，不能修改', id: id};
    next(JSON.stringify(obj));
  }

  // res.send(user);
};