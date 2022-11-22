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

exports.bulkUpdateProductService = async (data) => {
  // const result = await Product.updateMany({ _id: data.ids }, data, {
  //   runValidators: true,
  // });
  const products = [];
  data.ids.forEach((product) => {
    products.push(Product.updateOne({ _id: product.id }, product.data));
  });
  const result = await Promise.all(products);
  return result;
};
exports.bulkDeleteProductService = async (ids) => {
  const result = await Product.deleteMany({ _id: ids });
  return result;
};

exports.deleteProductsService = async (id, data) => {
  const deletedProduct = await Product.deleteOne({ _id: id });
  return deletedProduct;
};
