var express = require("express");
var router = express.Router();
const multer = require("multer");
const AdminCtrl = require("../controllers/admin")



// router.get('/logout', function(req, res) {
//     // Xóa cookie 'user'
//     res.clearCookie('user');
//     // Chuyển hướng về trang chủ
//     res.redirect('/');
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage });

router.get("/",AdminCtrl.index);
router.get("/category",AdminCtrl.showCategory);
router.get("/addProduct",AdminCtrl.AddProduct);
router.get("/addCategory",AdminCtrl.AddCategory);
router.get("/editProduct/:id",AdminCtrl.editProduct);
router.get("/editCategory/:id",AdminCtrl.editCategory);
router.post("/addProduct", upload.single("image"), AdminCtrl.create);
router.post("/addCategory", AdminCtrl.createCategory);
router.put("/update", upload.single("image"), AdminCtrl.update);
router.put("/category/update", AdminCtrl.updateCategory);


module.exports = router;
