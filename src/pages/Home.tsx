import Hero from "../componenets/home/Hero";
import Categories from "../componenets/home/Categories";
import ProductGrid from "../componenets/home/ProductGrid";
import type { Product } from "../componenets/home/ProductCard";
import { useOutletContext } from "react-router-dom";

import { products } from "../data/products";
import { useState } from "react";
function Home(){
  const [search, setSearch] = useState("");

const { addToCart  } = useOutletContext<{
  addToCart: (product: Product)=>void;
}>();
const [selectedCategory, setSelectedCategory] = useState("همه");
const filteredProducts = products.filter((product) => {
  const matchCategory =
    selectedCategory === "همه" ||
    product.category === selectedCategory;

  const matchSearch =
    product.name.toLowerCase().includes(search.toLowerCase());

  return matchCategory && matchSearch;
});

    console.log(selectedCategory);


return(
 <>
   <Hero />

   <Categories
   setCategory={setSelectedCategory}
   />
        <input
     dir="rtl"
  type="text"
  placeholder="جستجوی قهوه . . . "
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full max-w-md mx-auto block mb-8 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 outline-none placeholder:text-right"
/>

   <ProductGrid addToCart={addToCart} products={filteredProducts}/>

 </>
)

}


export default Home;