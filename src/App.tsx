
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Layout from "./componenets/layout/layout";

function App() {


  return (
    <div className="min-h-screen bg-black text-white flex flex-col">


      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"  index element={<Home/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        </Routes>

      </main>



    </div>
  );
}

export default App;