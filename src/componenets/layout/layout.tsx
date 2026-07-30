import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function Layout(
{
 cartCount,
 toggleCart
}
:
{
 cartCount:number;
 toggleCart:()=>void;
}
){
  const [search,setSearch] = useState("");

return(
 <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar
        cartCount={cartCount}
        toggleCart={toggleCart}
        search={search}
        setSearch={setSearch}
    />

    <main className="flex-1">

        <Outlet />

    </main>

    <Footer />

 </div>
)

}


export default Layout;