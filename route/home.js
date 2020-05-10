// 引用express框架
let express = require('express');
// 创建博客展示页面路由
let home = express.Router();

// 实现退出功能
home.get('/logout', require('./admin/logout'));

// 前台 首页 路由
home.get('/', require('./home/index'));

// 前台 活动项目 路由
home.get('/activity', require('./home/activity'));

// 前台 活动风采 路由
home.get('/demeanor', require('./home/demeanor'));

// 前台 在线教学资源 路由
home.get('/onlineResources', require('./home/onlineResources'));

// 前台 政策 路由
home.get('/policy', require('./home/policy'));

// 前台 个人中心 路由
home.get('/personalInfo', require('./home/personalInfo'));

// 前台 文章 路由
home.get('/article', require('./home/article'));

// 前台 个人中心 路由
home.post('/comment', require('./home/comment'));

module.exports = home;