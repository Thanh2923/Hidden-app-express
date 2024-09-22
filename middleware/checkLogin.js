function checkLogin(req, res, next) {
  // Kiểm tra xem cookie 'user' có tồn tại không
  if (req.cookies.user) {
    // Nếu cookie tồn tại, lưu email từ cookie vào biến email
    const email = req.cookies.user;
    // Gán email vào biến locals để truyền vào template
    res.locals.email = email;
  } else{
  // Tiếp tục thực hiện các middleware tiếp theo
  next();
  }
}

module.exports = checkLogin;
