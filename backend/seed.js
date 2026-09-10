const mongoose = require("mongoose");
const Product = require("./modules/Product");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });
const products = [
  {
    name: "پاستا آلفردو",
    desc: "پاستا با سس آلفردو خامه‌ای و پنیر پارمزان",
    price: 320000,
    img: "/products/Pasta.jpg",
    category: "فست فود",
  },
  {
    name: "برگر کلاسیک",
    desc: "گوشت گریل شده، پنیر چدار، کاهو و سس مخصوص",
    price: 280000,
    img: "/products/Burger.jpg",
    category: "فست فود",
  },
  {
    name: "چیز کیک تمشک",
    desc: "چیز کیک خانگی با سس توت‌های تازه",
    price: 180000,
    img: "/products/Cake.jpg",
    category: "دسرها",
  },
  {
    name: "آیس موکا",
    desc: "اسپرسو، شیر، شکلات و یخ",
    price: 150000,
    img: "/products/IceMoka.jpg",
    category: "نوشیدنی سرد",
  },
  {
    name: "پیتزا مارگاریتا",
    desc: "خمیر نازک، سس گوجه، پنیر موزارلا و ریحان تازه",
    price: 250000,
    img: "/products/Pizza.jpeg",
    category: "فست فود",
  },
  {
    name: "سالاد سزار",
    desc: "کاهو، مرغ گریل، پنیر پارمزان و سس مخصوص سزار",
    price: 190000,
    img: "/products/Salad.jpg",
    category: "سالادها",
  },
  {
    name: "کروسان کره‌ای",
    desc: "کروسان تازه و ترد، مناسب صبحانه",
    price: 90000,
    img: "/products/Crosaint.jpg",
    category: "دسرها",
  },
  {
    name: "پنکیک با عسل",
    desc: "پنکیک نرم با عسل طبیعی و میوه‌های تازه",
    price: 160000,
    img: "/products/Panckek.jpg",
    category: "صبحانه",
  },
  {
    name: "بستنی وانیلی",
    desc: "بستنی خامه‌ای با سس شکلات و آجیل",
    price: 110000,
    img: "/products/IceCream.jpg",
    category: "دسرها",
  },
  {
    name: "کاپوچینو",
    desc: "اسپرسو با فوم شیر مخملی و پودر دارچین",
    price: 120000,
    img: "/products/Cappucino.jpg",
    category: "نوشیدنی گرم",
  },
  {
    name: "ساندویچ مرغ گریل",
    desc: "مرغ گریل شده، نان مخصوص و سبزیجات تازه",
    price: 210000,
    img: "/products/ChickenSandwitch.jpg",
    category: "غذای اصلی",
  },
  {
    name: "سوپ قارچ",
    desc: "سوپ خامه‌ای قارچ، سرو شده با نان تست",
    price: 130000,
    img: "/products/Soup.jpg",
    category: "دسرها",
  },
  {
    name: "بال مرغ سوخاری",
    desc: "بال مرغ سوخاری با سس باربیکیو",
    price: 220000,
    img: "/products/ChikenWing.jpg",
    category: "غذای اصلی",
  },
  {
    name: "دورادو گریل",
    desc: "ماهی دورادو گریل شده با سبزیجات بخارپز",
    price: 380000,
    img: "/products/GrillFish.jpg",
    category: "غذای اصلی",
  },
  {
    name: "اسپرسو دبل",
    desc: "دو شات اسپرسو با عطر و طعم قوی قهوه",
    price: 90000,
    img: "/products/Espresso.jpg",
    category: "قهوه",
  },
  {
    name: "لاته وانیلی",
    desc: "اسپرسو، شیر بخار داده شده و سیروپ وانیل",
    price: 170000,
    img: "/products/VanillaLatte.jpeg",
    category: "نوشیدنی گرم",
  },
  {
    name: "هات چاکلت",
    desc: "شکلات داغ خامه‌ای با طعم غنی کاکائو",
    price: 150000,
    img: "/products/HotChocolate.jpg",
    category: "نوشیدنی گرم",
  },
  {
    name: "آیس لاته",
    desc: "اسپرسو، شیر سرد و یخ با طعمی تازه",
    price: 160000,
    img: "/products/IceLatte.jpg",
    category: "نوشیدنی سرد",
  },
  {
    name: "اسموتی توت فرنگی",
    desc: "ترکیب توت فرنگی تازه، شیر و یخ",
    price: 190000,
    img: "/products/StrawberrySmoothie.jpg",
    category: "نوشیدنی سرد",
  },
  {
    name: "املت مخصوص کافه",
    desc: "تخم مرغ، سبزیجات تازه و پنیر مخصوص",
    price: 220000,
    img: "/products/Omelette.jpg",
    category: "صبحانه",
  },
  {
    name: "صبحانه انگلیسی",
    desc: "تخم مرغ، سوسیس، لوبیا، قارچ و نان تست",
    price: 350000,
    img: "/products/EnglishBreakfast.jpg",
    category: "صبحانه",
  },
  {
    name: "سیب زمینی ویژه",
    desc: "سیب زمینی سرخ شده با پنیر و سس مخصوص",
    price: 180000,
    img: "/products/LoadedFries.jpg",
    category: "فست فود",
  },
  {
    name: "چیز برگر ویژه",
    desc: "برگر گوشت، پنیر چدار، سس مخصوص و سبزیجات",
    price: 340000,
    img: "/products/Cheeseburger.jpg",
    category: "فست فود",
  },
  {
    name: "تیرامیسو",
    desc: "دسر ایتالیایی با قهوه و خامه ماسکارپونه",
    price: 210000,
    img: "/products/Tiramisu.jpg",
    category: "دسرها",
  },
  {
    name: "سالاد یونانی",
    desc: "خیار، گوجه، پنیر فتا و زیتون تازه",
    price: 200000,
    img: "/products/GreekSalad.jpg",
    category: "سالادها",
  },
];
Product.insertMany(products)
  .then(() => {
    console.log("Products added successfully");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
  });