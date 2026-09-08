const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../modules/Admin");

const router = express.Router();


// =========================
// LOGIN
// =========================

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // بررسی خالی نبودن فیلدها
    if (!username || !password) {
      return res.status(400).json({
        message: "نام کاربری و رمز عبور الزامی است",
      });
    }

    // پیدا کردن ادمین
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        message: "نام کاربری یا رمز عبور اشتباه است",
      });
    }

    // بررسی رمز عبور
    const isPasswordCorrect = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "نام کاربری یا رمز عبور اشتباه است",
      });
    }

    // ساخت Token
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "ورود موفقیت‌آمیز بود",
      token,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "خطا در ورود",
    });
  }
});


module.exports = router;