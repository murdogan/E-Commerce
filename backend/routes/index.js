const express = require("express");
const router = express.Router();

// Diğer Rota dosylarını içe aktarıyoruz
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js");

// Her Rotayı ilgili yol altında kullanıyoruz

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/coupon", couponRoute);
router.use("/users", userRoute);

module.exports = router;
