import Navbar from "./componenets/layout/Navbar";
import Hero from"./componenets/home/Hero";
import Categories from "./componenets/home/Categories";
import ProductGrid from "./componenets/home/ProductGrid";
import Footer from "./componenets/layout/Footer";
import { useState } from "react";
import type { Product } from "./componenets/home/ProductCard";
import Cart from "./componenets/cart/Cart";



function App() {

  const [isCartOpen , setIsCartOpen] = useState(false);
  function toggleCart(){
    setIsCartOpen(!isCartOpen);
  }
  const [cart, setCart] = useState<Product[]>([]);
  function addToCart(product :Product){
    setCart([...cart,product]);
  }
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar  cartCount={cart.length}  toggleCart={toggleCart} />
    {isCartOpen && <Cart toggleCart={toggleCart} />}

      <main className="flex-1">
       <Hero />
       <Categories />
       <ProductGrid addToCart={addToCart} />
      </main>

      <footer >
        <Footer  />
      </footer>

    </div>
  );
}

export default App;