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
  function updateProduct(updatedProduct: Product) {
  setProductList((prev) =>
    prev.map((product) =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    )
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
    updateProduct
  };
  
}

export default useProducts;