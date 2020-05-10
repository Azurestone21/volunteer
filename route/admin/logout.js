module.exports = async (req, res) => {
  // 删除session
  await req.session.destroy(function () {
    // 删除cookie
    res.clearCookie('connect.sid');
    // 退出登录，清除用户信息
    req.app.locals.userInfo = null;
    // 重定向到用户登录页面
    res.redirect('/admin/login');
  })
};