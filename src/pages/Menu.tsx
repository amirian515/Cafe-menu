import ProductGrid from "../componenets/home/ProductGrid";
import { products } from "../data/products";
import { useOutletContext } from "react-router-dom";
import type { Product } from "../componenets/home/ProductCard";
import Categories from "../componenets/home/Categories";
import { useState } from "react";


function Menu(){
    const [selectedCategory, setSelectedCategory] = useState("همه");

const { addToCart } = useOutletContext<{
  addToCart:(product:Product)=>void;
}>();
const filteredProducts =
  selectedCategory === "همه"
    ? products
    : products.filter(
        (product) => product.category === selectedCategory
      );

return(
<>

    <Categories
    setCategory={setSelectedCategory}
    />
  <ProductGrid
    products={filteredProducts}
    addToCart={addToCart}
  />
</>
)

}


export default Menu;