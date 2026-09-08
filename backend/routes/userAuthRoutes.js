const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../modules/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ======================
// ثبت نام کاربر
// ======================

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      phone,
      address,
      password,
    } = req.body;

    if (
      !name ||
      !username ||
      !email ||
      !phone ||
      !address ||
      !password
    ) {
      return res.status(400).json({
        message: "تمام فیلدها الزامی هستند",
      });
    }

    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
      return res.status(400).json({
        message: "این نام کاربری قبلاً ثبت شده است",
      });
    }

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        message: "این ایمیل قبلاً ثبت شده است",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "ثبت نام با موفقیت انجام شد",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "خطا در ثبت نام",
    });
  }
});


// ======================
// ورود کاربر
// ======================

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "نام کاربری و رمز عبور الزامی است",
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        message: "نام کاربری یا رمز عبور اشتباه است",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "نام کاربری یا رمز عبور اشتباه است",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: "user",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "ورود با موفقیت انجام شد",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "خطا در ورود",
    });
  }
});


// ======================
// دریافت پروفایل کاربر
// ======================

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "کاربر پیدا نشد",
      });
    }

    res.json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "خطا در دریافت اطلاعات کاربر",
    });
  }
});


module.exports = router;