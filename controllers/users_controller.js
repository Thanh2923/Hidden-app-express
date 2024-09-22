const db = require("../models/index");
const { DataTypes } = require("sequelize");
const createUser = require("../models/user");
const User = createUser(db.sequelize, DataTypes);
const checkLogin = require("../middleware/checkLogin");


const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

class UsersController {
  static register(req, res, next) {
    let email=req.cookies.user ;
    res.render("register",{email});
    
  }
  static async create(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    const hash = bcrypt.hashSync(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password:hash,
    });

    res.redirect("/login");
  }

  static login(req, res, next) {
    let email=req.cookies.user ;

    res.render("login",{email});
  }
  static async createSession(req, res, next) {
    const { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if (user) {
        let checkPass = bcrypt.compareSync(password, user.password);
        if (checkPass) {
           
            res.cookie('user', user.email, { maxAge: 900000, httpOnly: true });
            res.redirect('/');
        } else {
            
            res.render("login", { error: "Invalid email or password" });
        }
    } else {
        // Không tìm thấy người dùng, hiển thị lại trang đăng nhập với thông báo lỗi
        res.render("login", { error: "User not found" });
    }
}
   
      
    
    static logout(){
      res.clearCookie('user');
      res.redirect("/");
    }

}

module.exports = UsersController;
