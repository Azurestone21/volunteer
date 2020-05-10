// 引用用户集合构造函数
let { User } = require('../../../model/user');

module.exports = async (req, res) => {
  // 获取删除用户的id
  // res.send(req.query.id);
  // 根据id删除用户
  await User.findOneAndDelete({_id: req.query.id});
  // 重定向回user页面
  res.redirect('/admin/user');
};