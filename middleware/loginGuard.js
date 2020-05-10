let guard = (req, res, next) => {
  // 判断访问的是否是登录页面
  // 判断登录状态
  if (req.url != '/login' && !req.session.username) {
    res.redirect('/admin/login');
  } else {
    // 如果用户已经登录 并且是普通用户
    if (req.session.role  === 'normal') {
      // 跳转到博客首页
      return res.redirect('/home/');
    }
    next()
  }
};

module.exports = guard;