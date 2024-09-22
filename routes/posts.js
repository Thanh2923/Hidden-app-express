const express = require("express");
const Product = require("../controllers/Product");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", Product.index);
router.get("/:id", Product.show);
router.post("/", Product.create);
router.put("/:id", Product.update);
router.delete("/:id", Product.destroy);

module.exports = router;
