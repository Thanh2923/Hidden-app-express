const db = require("../models/index");
const { DataTypes } = require("sequelize");
const createPost = require("../models/product");
const createCategory = require("../models/category");


const Post = createPost(db.sequelize, DataTypes);
const Category = createCategory(db.sequelize, DataTypes);
const checkLogin = require("../middleware/checkLogin");
const { Op } = require("sequelize");

class Admin{
    static async index(req,res){
            try {
              const products = await Post.findAll({ paranoid: false });
              let message;
              if (products) {
                message = "Get Data By ID Successfully!";
              } else {
                post = {};
                message = "Cant not find ID!";
              }
              res.render("admin/index",{products});
            } catch (error) {
              next(error);
            }
          
    
    }


    
    static async showCategory(req,res){
      try {
        const category = await Category.findAll();
        let message;
        if (category) {
          message = "Get Data By ID Successfully!";
        } else {
          post = {};
          message = "Cant not find ID!";
        }
        res.render("admin/category",{category});
      } catch (error) {
        next(error);
      }
    

}

    static async AddProduct (req, res, next) {
        res.render("admin/AddProduct")
    }
    static async AddCategory (req, res, next) {
      res.render("admin/addCategory")
  }

    static async create(req, res, next) {
      
        try {
          let { title, description,name,price,idCategory} = req.body
          let image = req.file.filename;
          let product = { title, description, image ,name,price,idCategory};
          if (product.title && product.description && product.image && product.name && product.price && product.idCategory) {
            let result = await Post.create(product);

          res.redirect("/admin")
          }
        } catch (error) {
          next(error);
        }
      }

      static async destroy(req, res, next) {
        try {
          let id = req.params.id;
          let message;
          let result = await Post.destroy({
            where: {
              id: id,
            },
          });
          if (result) {
            message = "Delete Data Successfully!";
          } else {
            message = "Cant not find ID!!!";
          }
          res.status(200).json({ message, data: result });
        } catch (error) {
          next(error);
        }
      }

    

      static async editProduct(req,res){
        try {
          let id = req.params.id;
          let products = await Post.findByPk(id);
          let message;
          if (products) {
            message = "Get Data By ID Successfully!";
          } else {
            post = {};
            message = "Cant not find ID!";
          }
          res.render("admin/editProduct",{products})
        } catch (error) {
          next(error);
        }
       
      }
      static async editCategory(req,res){
        try {
          let id = req.params.id;
          let products = await Category.findByPk(id);
          let message;
          if (products) {
            message = "Get Data By ID Successfully!";
          } else {
            post = {};
            message = "Cant not find ID!";
          }
          res.render("admin/editCategory",{products})
        } catch (error) {
          next(error);
        }
       
      }

      static async updateCategory(req, res, next) {
          let { nameCategory, id } = req.body;
          let result = await Category.update({nameCategory }, {
            where: {
              id:{
                [Op.eq]: id,
              }
            }
          });
          res.redirect("/admin/category");
          
      }
    



      
    
      static async update(req, res) {
      
        let { name, price,title,description,id } = req.body;
        let image = req.file.filename;
        let result = await Post.update({name, price,title,description,image }, {
          where: {
            id:{
              [Op.eq]: id,
            }
          }
        });
        res.redirect("/admin");
    
        
      }

      static async createCategory(req, res, next) {
        try {
            const { nameCategory } = req.body;

            // Đảm bảo tên danh mục không trống
            if (!nameCategory) {
                return res.status(400).json({ message: 'Tên danh mục là bắt buộc' });
            }

            // Tạo mới danh mục
            const newCategory = { nameCategory };
            const category = await Category.create(newCategory);

            // Chuyển hướng tới trang quản lý hoặc trả về phản hồi JSON
            res.redirect("/admin/category");
            // Hoặc res.status(201).json({ message: 'Danh mục được tạo thành công', category });

        } catch (error) {
            // Xử lý lỗi
            next(error);
        }
    }
}
module.exports = Admin;
