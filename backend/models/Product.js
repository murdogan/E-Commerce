const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    rating: { type: Number, require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", require: true },
  },
  { timestamps: true }
);

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    img: [
      {
        type: String,
        require: true,
      },
    ],
    reviews: [ReviewSchema],
    description: {
      type: String,
      require: true,
    },
    colors: [
      {
        type: String,
        require: true,
      },
    ],
    sizes: [
      {
        type: String,
        require: true,
      },
    ],
    price: {
      current: { type: Number, require: true },
      discount: { type: Number },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
