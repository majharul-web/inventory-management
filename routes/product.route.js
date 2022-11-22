const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();

router.route("/bulk-update").patch(productController.bulkProductUpdate);
router.route("/bulk-delete").delete(productController.bulkProductDelete);

router.route("/").get(productController.getProduct).post(productController.insertProduct);

router.route("/:id").patch(productController.updateProduct).delete(productController.deleteProductById);

module.exports = router;
