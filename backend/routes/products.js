const express = require("express");
const router = express.Router();

// Tüm ürünleri Getirme (Read- All)
router.get("/", async (req, res) => {
  res.send("Ürünler Getirildi");
});

module.exports = router;
