// 引入mongoose第三方模块
let mongoose = require('mongoose');

// 创建文章集合规则
let commentSchema = new mongoose.Schema({
  // 文章id
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  },
  // 评论人用户id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // 评论时间
  time: {
    type: Date
  },
  // 评论内容
  content: {
    type: String
  }
});

// 创建文章集合
let Comment = mongoose.model('Comment', commentSchema);

// 导出集合
module.exports = {
  Comment
};