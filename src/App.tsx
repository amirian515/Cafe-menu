
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Layout from "./componenets/layout/layout";
import Admin from "./pages/Admin";
import AdminLayout from "./componenets/layout/AdminLayout";
import AdminOrders from "./pages/AdminOrders";
import AdminProducts from "./pages/AdminProducts";

function App() {


  return (
    <div className="min-h-screen bg-black text-white flex flex-col">


      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home/>} />
          <Route path="menu" element={<Menu />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="products" element={<AdminProducts />} />
        </Route>
        </Routes>

      </main>



    </div>
  );
}

export default App;