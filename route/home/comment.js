let { Comment } = require('../../model/comment');

module.exports = async (req, res) => {
  // 标识 当前访问的是用户管理页面 用于左侧菜单栏切换
  req.app.locals.currentLink = 'article';

  let { content, uid, aid } = req.body;

  // 将评论信息存储到评论集合中
  await Comment.create({
    content: content,
    uid: uid,
    aid: aid,
    time: new Date()
  });

  // 重定向回文章页面
  res.redirect('/home/article?id=' + aid);


  // 渲染模板
  // res.render('home/demeanor', {
  //   result: result
  // });
};