import ProductGrid from "../componenets/home/ProductGrid";
import { useOutletContext } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Categories from "../componenets/home/Categories";
import type { Product } from "../componenets/home/ProductCard";
import { useState } from "react";

function Menu() {
  const { productList } = useProducts();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const { addToCart } = useOutletContext<{
    addToCart: (product: Product) => void;
  }>();

  const filteredProducts = productList.filter((product) => {
    const matchCategory =
      selectedCategory === "همه" ||
      product.category === selectedCategory;

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Categories
        setCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <input
        dir="rtl"
        type="text"
        placeholder="جستجوی محصول..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block mb-8 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 outline-none placeholder:text-right"
      />

      <ProductGrid
        products={filteredProducts}
        addToCart={addToCart}
      />
    </>
  );
}

export default Menu;