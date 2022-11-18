const Product = require("../models/Product");
exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

exports.insertProductService = async (data) => {
  const insertedProduct = await Product.create(data);
  return insertedProduct;
};

exports.updateProductsService = async (id, data) => {
  const updatedProduct = await Product.updateOne({ _id: id }, { $set: data }, { runValidators: true });
  return updatedProduct;
};
