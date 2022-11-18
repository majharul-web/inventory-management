const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// middleware
app.use(express.json());
app.use(cors());

// routes
const productRoutes = require("./routes/product.route");

// insert middleware
// productSchema.pre("save", function (next) {
//   console.log("save before");
//   if (this.quantity == 0) {
//     status = "out-of-stock";
//   }
//   next();
// });

// productSchema.post("save", function (doc, next) {
//   console.log("after save ");
//   next();
// });

// method
// productSchema.methods.logger = function () {
//   console.log(`this id ${this.name}`);
// };
app.get("/", async (req, res) => {
  res.send("app is running");
});

// store product
app.use("/api/v1/product", productRoutes);

module.exports = app;
