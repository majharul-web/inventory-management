const {
  insertProductService,
  getProductsService,
  updateProductsService,
} = require("../services/product.service");

exports.getProduct = async (req, res) => {
  try {
    const products = await getProductsService();
    res.status(200).json({
      status: true,
      message: "get products",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};

exports.insertProduct = async (req, res, next) => {
  try {
    // const product = new Product(req.body);
    const result = await insertProductService(req.body);
    console.log(result);
    // result.logger();
    // const productDoc = await product.save();

    res.status(200).json({
      status: true,
      message: "product inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductsService(id, req.body);
    res.status(200).json({
      status: true,
      message: "product updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Your request could not be processed. Please try again.",
      error: error.message,
    });
  }
};
