import Hero from "../componenets/home/Hero";
import Categories from "../componenets/home/Categories";
import ProductGrid from "../componenets/home/ProductGrid";
import type { Product } from "../componenets/home/ProductCard";
import { useState } from "react";


function Home(
{
 addToCart
}
:
{
 addToCart:(product:Product)=>void
}
){
  const [search, setSearch] = useState("");

return(
 <>
   <Hero />

   <Categories />

     <input
  type="text"
  placeholder="...جستجوی قهوه"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full max-w-md mx-auto block mb-8 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
/>

   <ProductGrid addToCart={addToCart} search={search}/>

 </>
)

}


export default Home;