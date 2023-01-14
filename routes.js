const express = require("express");
const productController = require("./controllers/product-controller");

const router = express.Router();
router.get("/products", productController.getAll);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);
module.exports = router;
