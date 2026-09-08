
const express = require("express");
const router = express.Router();

const Product = require("../modules/Product");
const authMiddleware = require("../middleware/authMiddleware");

// =========================
// دریافت تمام محصولات
// عمومی
// =========================

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// =========================
// اضافه کردن محصول
// فقط ادمین
// =========================

router.post("/", authMiddleware, async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      img: req.body.img,
      category: req.body.category,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// =========================
// ویرایش محصول
// فقط ادمین
// =========================

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// =========================
// حذف محصول
// فقط ادمین
// =========================

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


module.exports = router;

