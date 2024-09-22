const db = require("../models/index");
const { DataTypes } = require("sequelize");
const createCategory = require("../models/category");
const Category = createCategory(db.sequelize, DataTypes);
const checkLogin = require("../middleware/checkLogin");
const { Op } = require("sequelize");

class Product {
 
  static async categoryApi(req, res, next) {
    try {
      const category = await Category.findAll({ paranoid: false });
      let message;
      if (category) {
        message = "Get Data By ID Successfully!";
      } else {
        Category = {};
        message = "Cant not find ID!";
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async show(req, res, next) {
    try {
      let id = req.params.id;
      let category = await Category.findByPk(id);
      let message;
      if (category) {
        message = "Get Data By ID Successfully!";
      } else {
        category = {};
        message = "Cant not find ID!";
      }
      res.status(200).json({ message, data: category });
    } catch (error) {
      next(error);
    }
  }


  static async destroy(req, res, next) {
    try {
      let id = req.params.id;
      let message;
      let result = await Category.destroy({
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

  
  static async update(req, res) {
    let { name, price,title,description, id } = req.body;
    let image = "images/" + req.file.filename;
    // console.log(req.body);
    let result = await Category.update({name, price,title,description,image }, {
      where: {
        id:{
          [Op.eq]: id,
        }
      }
    });
    console.log(result)
    res.redirect("/");

    // con.query(
    //   "UPDATE products SET name=?, detail=?, image=? WHERE id = ?",
    //   [name, detail, image, id],
    //   (err, data) => {
    //     if (err) throw err;
    //     res.redirect("/");
    //   }
    // );
  }
 
}

module.exports = Product;
