// 引用用户集合构造函数
let { Article } = require('../../../model/article');

module.exports = async (req, res, next) => {
  // 标识 当前访问的是用户管理页面 用于左侧菜单栏切换
  req.app.locals.currentLink = 'article';

  // 获取传过来的文章id
  let { message, id } = req.query;

  // 如果当前传递了id
  if (id) {
    // 修改操作
    let article = await Article.findOne({_id: id});

    // 渲染用户编辑页面(修改)
    res.render('admin/article-edit', {
      message: message,
      article: article,
      link: '/admin/article-modify?id=' + id,
      button: '修改'
    });

  } else {
    // 添加操作
    res.render('admin/article-edit', {
      message: message,
      link: '/admin/article-add',
      button: '添加'
    });

  }
  // res.render('admin/article-edit')
};
