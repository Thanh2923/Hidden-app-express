var express = require("express");
var router = express.Router();
const UsersController = require("../controllers/users_controller");
const Product = require("../controllers/Product");
const Category = require("../controllers/Category");




router.get('/logout', function(req, res) {
    // Xóa cookie 'user'
    res.clearCookie('user');
    // Chuyển hướng về trang chủ
    res.redirect('/');
});

router.get("/",Product.index);
router.delete("/product/product/:id", Product.destroy);
router.delete("/category/category/:id", Category.destroy);
router.get("/product",Product.product);
router.post("/product/product", Product.productApi);
router.get("/category/category", Category.categoryApi);
router.get("/product/product",Product.productApi);
router.get("/product/product/:id",Product.show);
router.get("/category/category/:id",Category.show);
router.get("/chitietsanpham/:id",Product.ctsp);
router.get("/register" ,UsersController.register);

router.post("/register", UsersController.create);
router.get("/login",UsersController.login);
router.post("/login", UsersController.createSession);

module.exports = router;
