
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./modules/Admin");

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("123456", 10);

    const existingAdmin = await Admin.findOne({
      username: "admin",
    });

    if (existingAdmin) {
      existingAdmin.password = hashedPassword;

      await existingAdmin.save();

      console.log("رمز ادمین با موفقیت تغییر کرد");
    } else {
      await Admin.create({
        username: "admin",
        password: hashedPassword,
      });

      console.log("ادمین با موفقیت ساخته شد");
    }

    console.log("Username: admin");
    console.log("Password: 123456");

    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
  }
}

createAdmin();

