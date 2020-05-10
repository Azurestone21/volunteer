// 引用express框架
let express = require('express');
// 处理路径
let path = require('path');
// 引用body-parser
let bodyParser = require('body-parser');
// 导入express-session模块
let session = require('express-session');
// 导入art-template模块
let artTemplate = require('art-template');
// 导入dateformat 模块
let dateFormat = require('dateformat');
// 创建网站服务器
let app = express();
// 数据库连接
require('./model/connect');

// require('./model/user');

// 处理post请求参数
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({secret: 'secret key', saveUninitialized: false}));

// 当渲染后缀为art的模板时。所使用的的模板引擎是
app.engine('art', require('express-art-template'));
// 告诉express框架模板所在位置
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模板的默认后缀
app.set('view engine', 'art');
// 向模板内部导入dateFormat变量
artTemplate.defaults.imports.dateFormat = dateFormat;

// 开发静态资源文件
app.use(express.static(path.join(__dirname,'public')));

// 引入路由模块
let home = require('./route/home');
let admin = require('./route/admin');

// 必须放在路由之前
// 拦截请求 判断用户是否登录
app.use('/admin', require('./middleware/loginGuard'));

// 为路由匹配请求路径
app.use('/home',home);
app.use('/admin',admin);

// 错误处理，错误信息显示在url中
app.use((err, req, res, next) => {
  // JSON.parse() 将字符串类型转换为对象数据类型
  let result = JSON.parse(err);
  // {path: '/admin/user-edit', message: '密码比对失败', id: id}
  let params = [];
  for (let item in result) {
    if (item != 'path') {
      params.push(item + '=' + result[item]);
    }
  }
  res.redirect(`${result.path}?${params.join('&')}`);
  // res.redirect(`${result.path}?message=${result.message}`)
});

//监听端口
app.listen(3000);
console.log('网站服务器端启动');