import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import { useCart } from "../../hooks/useCart";


function Layout(){
  const [isCartOpen, setIsCartOpen] = useState(false);
const {
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();

function toggleCart() {
  setIsCartOpen(!isCartOpen);
}
return(
 <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar
        cartCount={cart.length}
        toggleCart={toggleCart}
    />
    {isCartOpen && (
  <Cart
    toggleCart={toggleCart}
    items={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
  />
)}

    <main className="flex-1">

        <Outlet context={{addToCart , cart}} />

    </main>

    <Footer />

 </div>
)

}


export default Layout;