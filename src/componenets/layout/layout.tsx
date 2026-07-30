import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


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

return(
 <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar
      cartCount={cartCount}
      toggleCart={toggleCart}
    />

    <main className="flex-1">

        <Outlet />

    </main>

    <Footer />

 </div>
)

}


export default Layout;