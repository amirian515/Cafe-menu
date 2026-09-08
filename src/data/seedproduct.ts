
import {
  products,
} from "./products";

const API_URL = "http://localhost:5000/api/products";

export async function seedProducts() {
  try {
    // محصولات فعلی MongoDB
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("خطا در دریافت محصولات فعلی");
    }

    const existingProducts = await response.json();

    let addedCount = 0;

    for (const product of products) {
      // بررسی می‌کنیم محصول قبلاً وجود نداشته باشد
      const alreadyExists = existingProducts.some(
        (existingProduct: { name: string }) =>
          existingProduct.name === product.name
      );

      if (alreadyExists) {
        console.log(
          `محصول "${product.name}" قبلاً وجود دارد`
        );

        continue;
      }

      const addResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: product.name,
          desc: product.desc,
          price: product.price,
          img: product.img,
          category: product.category,
        }),
      });

      if (!addResponse.ok) {
        console.error(
          `خطا در اضافه کردن ${product.name}`
        );

        continue;
      }

      console.log(
        `محصول "${product.name}" اضافه شد`
      );

      addedCount++;
    }

    console.log(
      `تعداد ${addedCount} محصول جدید اضافه شد`
    );

  } catch (error) {
    console.error(
      "Error seeding products:",
      error
    );
  }
}

