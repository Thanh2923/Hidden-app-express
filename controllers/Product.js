const db = require("../models/index");
const { DataTypes } = require("sequelize");
const createPost = require("../models/product");
const Post = createPost(db.sequelize, DataTypes);
const checkLogin = require("../middleware/checkLogin");
const { Op } = require("sequelize");

class Product {
  static async product(req, res, next) {
    try {
      const posts = await Post.findAll({ paranoid: false });
      
      res
        .status(200)
       if(checkLogin){
       res.render("product",{posts, email: req.cookies.user });
       }else{
        res.render("product",{posts});
       }
    } catch (error) {
      next(error);
    }

  }
  static async ctsp(req, res, next) {
    let id = req.params.id;
    let post = await Post.findByPk(id);
    let email=req.cookies.user ;
   
      res.render("ctsp",{post,email});
  }

  static async index(req, res, next) {
    try {
      const posts = await Post.findAll({ paranoid: false });
      
      res
        .status(200)
       if(checkLogin){
       res.render("index",{posts, email: req.cookies.user });
       }else{
        res.render("index",{posts});
       }
    } catch (error) {
      next(error);
    }

  }
  static async show(req, res, next) {
    try {
      let id = req.params.id;
      let post = await Post.findByPk(id);
      let message;
      if (post) {
        message = "Get Data By ID Successfully!";
      } else {
        post = {};
        message = "Cant not find ID!";
      }
      res.status(200).json({ message, data: post });
    } catch (error) {
      next(error);
    }
  }
  static async productApi(req, res, next) {
    try {
      const posts = await Post.findAll({ paranoid: false });
      let message;
      if (posts) {
        message = "Get Data By ID Successfully!";
      } else {
        post = {};
        message = "Cant not find ID!";
      }
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      let { title, description, image ,name,price} = req.body;
      let post = { title, description, image };
      if (post.title && post.description && post.image && post.name && post.price) {
        let result = await Post.create(post);
        res
          .status(200)
          .json({ message: "Create Data Successfully!", data: result });
      } else {
        res.status(400).json({ message: "Data invalid!" });
      }
    } catch (error) {
      next(error);
    }
  }

  // static async update(req, res, next) {
  //   try {
  //     let id = req.params.id;
  //     let message;
  //     let { title, description, image } = req.body;
  //     let post = { title, description, image };
  //     if (post.title && post.description && post.image) {
  //       let result = await Post.update(post, {
  //         where: {
  //           id,
  //         },
  //       });
  //       if (result[0]) {
  //         message = "Update Data Successfully!";
  //       } else {
  //         message = "Cant not find ID!!!";
  //       }
  //       res.status(200).json({ message, data: result });
  //     } else {
  //       res.status(400).json({ message: "Data invalid!" });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // }
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

  
  static async update(req, res) {
    let { name, price,title,description, id } = req.body;
    let image = "images/" + req.file.filename;
    // console.log(req.body);
    let result = await Post.update({name, price,title,description,image }, {
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
