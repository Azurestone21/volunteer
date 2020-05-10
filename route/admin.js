// 引用express框架
let express = require('express');
// 创建博客展示页面路由
let admin = express.Router();

// 渲染登录页面
admin.get('/login', require('./admin/loginPage'));

// 接收登录页面信息
admin.post('/login', require('./admin/login'));

// 用户列表路由
admin.get('/user', require('./admin/user/userPage'));

// 实现退出功能
admin.get('/logout', require('./admin/logout'));

// 创建用户编辑路由
admin.get('/user-edit', require('./admin/user/userEdit'));

// 创建实现用户添加功能路由
admin.post('/user-edit', require('./admin/user/userEditFn'));

// 创建实现修改用户信息功能路由
admin.post('/user-modify', require('./admin/user/userModify'));

// 删除用户路由
admin.get('/user-delete', require('./admin/user/userDelete'));

// 文章列表路由
admin.get('/article', require('./admin/article/article'));

// 文章编辑路由
admin.get('/article-edit', require('./admin/article/article-edit'));

// 添加文章路由
admin.post('/article-add', require('./admin/article/article-add'));

// 修改文章路由
admin.post('/article-modify', require('./admin/article/article-modify'));

// 删除文章路由
admin.get('/article-delete', require('./admin/article/article-delete'));

// 导出模块
module.exports = admin;