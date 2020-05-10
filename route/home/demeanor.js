let { Article } = require('../../model/article');

// 导入分页模块
let mongooseSexPage = require('mongoose-sex-page');

module.exports = async (req, res) => {
  // 获取页码
  let page = req.query.page;

  // 标识 当前访问的是用户管理页面 用于左侧菜单栏切换
  req.app.locals.currentLink = 'demeanor';

  let result = await mongooseSexPage(Article).page(page).size(6).display(5).find().populate('author').exec();

  // res.send('article');
  // 渲染模板
  res.render('home/demeanor', {
    result: result
  });
};