const express = require("express");

const router = express.Router();
const productsControllers = require("../controllers/products-controllers");

router.get("/category/:category", productsControllers.getProductsByCategory);
router.get("/:pid", productsControllers.getProductById);

module.exports = router;
