
// 引入 formidable 模块 处理上传文件信息
let formidable = require('formidable');
let path = require('path');

// 导入文章集合
let { Article } = require('../../../model/article');

module.exports = (req, res) => {
  // 创建表单解析对象
  let form = new formidable.IncomingForm();
  // 配置上传文件额存放路径
  form.uploadDir = path.join(__dirname, '../','../','public','uploads');
  // 保留上传文件后缀
  form.keepExtensions = true;
  // 解析表单
  form.parse(req, async (err, fields, files) => {
    // err 错误对象 表单解析失败，存储错误信息， 成功 为空
    // fields 对象类型 保存普通表单数据
    // files 对象类型 保存上传文件相关数据
    // res.send(files.cover.path.split('public')[1])

    await Article.create({
      title: fields.title,
      author: fields.author,
      publishDate: fields.publishDate,
      cover: files.cover.path.split('public')[1],
      content: fields.content
    });

    // 重定向到文章列表
    res.redirect('/admin/article')
  });
  // res.send('ok')
};