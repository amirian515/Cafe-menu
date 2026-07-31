import Navbar from "./componenets/layout/Navbar";
// import Hero from"./componenets/home/Hero";
// import Categories from "./componenets/home/Categories";
// import ProductGrid from "./componenets/home/ProductGrid";
import Footer from "./componenets/layout/Footer";
import Cart from "./componenets/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import { useCart } from "./hooks/useCart";
import { useState } from "react";


function App() {

  const [isCartOpen , setIsCartOpen] = useState(false);
  function toggleCart(){
    setIsCartOpen(!isCartOpen);
  }
  const {
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}=useCart();

   const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar  cartCount={cart.length}  toggleCart={toggleCart} search={search} setSearch={setSearch} />
    {isCartOpen && <Cart toggleCart={toggleCart} items={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />}


      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </main>

      <footer >
        <Footer  />
      </footer>

    </div>
  );
}

export default App;