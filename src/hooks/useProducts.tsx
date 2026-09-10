
import { useEffect, useState } from "react";
import type { Product } from "../componenets/home/ProductCard";

const API_URL = "https://cafe-menu-backend-615c.onrender.com/api/products";
function useProducts() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // دریافت محصولات
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const data = await response.json();

        setProductList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  // حذف محصول
  async function deleteProduct(id: string) {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("خطا در حذف محصول");
      }

      setProductList((prev) =>
        prev.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  // ویرایش محصول
  async function updateProduct(updatedProduct: Product) {
    try {
      if (!updatedProduct._id) {
        console.error("Product ID not found");
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/${updatedProduct._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            name: updatedProduct.name,
            desc: updatedProduct.desc,
            price: updatedProduct.price,
            img: updatedProduct.img,
            category: updatedProduct.category,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("خطا در ویرایش محصول");
      }

      const updatedData = await response.json();

      setProductList((prev) =>
        prev.map((product) =>
          product._id === updatedProduct._id
            ? updatedData
            : product
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  // اضافه کردن محصول
  async function addProduct(product: Product) {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          name: product.name,
          desc: product.desc,
          price: product.price,
          img: product.img,
          category: product.category,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        console.error("Add product error:", errorData);

        return;
      }

      const newProduct = await response.json();

      setProductList((prev) => [
        ...prev,
        newProduct,
      ]);

      console.log("Product added:", newProduct);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return {
    productList,
    loading,
    deleteProduct,
    updateProduct,
    addProduct,
  };
}

export default useProducts;

