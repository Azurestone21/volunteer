// 引用用户集合构造函数
let { User } = require('../../../model/user');

module.exports = async (req, res) => {
  // 标识 标识当前访问的是用户管理页面
  req.app.locals.currentLink = 'user';

  let { message, id } = req.query;

  // 如果当前传递了id参数
  if (id) {
    // 修改操作
    let user = await User.findOne({_id: id});

    // 渲染用户编辑页面（修改）
    res.render('admin/user-edit', {
      message: message,
      user: user,
      // 区分提交地址
      link: '/admin/user-modify?id=' + id,
      button: '修改'
    })
  } else {
    // 添加操作
    res.render('admin/user-edit', {
      message: message,
      // 区分提交地址
      link: '/admin/user-edit',
      button: '添加'
    })
  }

};