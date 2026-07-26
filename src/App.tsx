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
  const [cart, setCart] = useState<{product : Product ; quantity :number}[]>([]);
  function addToCart(product :Product){
    const exiting = cart.find((item)=>item.product.id === product.id);
      if(exiting){
        setCart(
          cart.map((item)=>
            item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
        );
    }else{
      setCart([...cart, { product, quantity: 1 }]);
    }

  }
 function increaseQuantity(productId: number) {
  setCart(
    cart.map((item) =>
      item.product.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
}
function decreaseQuantity (productId :number){
  setCart(
    cart.map((item) =>
  item.product.id === productId
?{
  ...item,
  quantity :item.quantity-1,
}
:item)
.filter((item)=> item.quantity >0)
  )
}
   function removeFromCart(id:number){
    setCart(cart.filter(item => item.product.id !== id));
   }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar  cartCount={cart.length}  toggleCart={toggleCart} />
    {isCartOpen && <Cart toggleCart={toggleCart} items={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />}

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