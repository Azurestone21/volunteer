// 引入mongoose第三方模块
let mongoose = require('mongoose');

// 创建文章集合规则
let articleSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 20,
    minLength: 4,
    required: [true, '请填写文章标题']
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '请传递作者']
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  cover: {
    type: String,
    default: null
  },
  content: {
    type: String
  }
});

// 创建文章集合
let Article = mongoose.model('Article', articleSchema);

// 导出集合
module.exports = {
  Article
};