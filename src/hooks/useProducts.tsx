import { useState, useEffect } from "react";
import { products } from "../data/products";
import type { Product } from "../componenets/home/ProductCard";

function useProducts() {
  const [productList, setProductList] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts !== null) {
      return JSON.parse(savedProducts);
    }

    return products;
  });

  function deleteProduct(id: number) {
    setProductList((prev) =>
      prev.filter((product) => product.id !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(productList)
    );
  }, [productList]);

  return {
    productList,
    deleteProduct,
  };
}

export default useProducts;