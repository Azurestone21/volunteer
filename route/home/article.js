let { Article } = require('../../model/article');
let { Comment } = require('../../model/comment');

module.exports = async (req, res) => {
  // 标识 当前访问的是用户管理页面 用于左侧菜单栏切换
  req.app.locals.currentLink = 'article';

  // 接收客户端传递过来的文章id
  let id = req.query.id;
  // 查询文章详细信息
  let article = await Article.findOne({_id: id}).populate('author');
  // 查询当前文章的评论
  let comments = await Comment.find({aid: id}).populate('uid');

  // res.send(article);

  res.render('home/article', {
    article: article,
    comments: comments
  });
};