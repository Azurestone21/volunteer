// 引用用户集合构造函数
let { User } = require('../../../model/user');

module.exports = async (req, res) => {
  // 标识 当前访问的是用户管理页面 用于左侧菜单栏切换
  req.app.locals.currentLink = 'user';

  // 接收客户端传递的当前页参数
  let page = req.query.page || 1;
  // 每页显示的数据条数
  let pageSize = 10;
  // 查询用户数据的总数
  let count = await User.countDocuments({});
  // 总页数
  let total = Math.ceil(count / pageSize);

  // 页码对应的数据查询开始位置
  let start = (page - 1) * pageSize;

  // 将用户信息从数据库中查询出来
  let users = await User.find({}).limit(pageSize).skip(start);
  // res.send(users);
  // 渲染用户列表
  res.render('admin/user', {
    users: users,
    page: page,
    total: total
  })
};