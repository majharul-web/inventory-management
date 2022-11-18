const mongoose = require("mongoose");
const { Schema } = mongoose;
// product schema
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
      trim: true,
      unique: [true, "product name is must unique"],
      minLength: [3, "product name must be at least 3 characters"],
      maxLength: [100, "product name is too long"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "product price can not be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litter", "pcs"],
        message: "unit can't be {VALUE},must be kg/litter/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "product quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: (props) => `${props.value} is not integer`,
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-f-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    //   updatedAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        id: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// model;
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
