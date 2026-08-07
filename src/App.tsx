
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Layout from "./componenets/layout/layout";
import Admin from "./pages/Admin";

function App() {


  return (
    <div className="min-h-screen bg-black text-white flex flex-col">


      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin/>}></Route>
        </Route>
        </Routes>

      </main>



    </div>
  );
}

export default App;