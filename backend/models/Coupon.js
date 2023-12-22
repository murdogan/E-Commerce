const mongoose = require("mongoose");

const CouponSchema = mongoose.Schema(
  {
    code: {
      type: String,
      require: true,
    },

    dicountPercent: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
