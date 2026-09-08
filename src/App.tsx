
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

import Login from "./pages/Login";

import Register from "./pages/Register";
import UserLogin from "./pages/UserLogin";

import ProtectedRoute from "./componenets/admin/ProtectedRoute";
import UserProtectedRoute from "./componenets/home/UserProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <main className="flex-1">

        <Routes>

          {/* ========================= */}
          {/* صفحات اصلی سایت */}
          {/* ========================= */}

          <Route path="/" element={<Layout />}>

            {/* صفحه اصلی */}
            <Route
              index
              element={<Home />}
            />

            {/* منو */}
            <Route
              path="menu"
              element={<Menu />}
            />

            {/* سفارش‌های کاربر */}
            <Route
              path="orders"
              element={
                <UserProtectedRoute>
                  <Orders />
                </UserProtectedRoute>
              }
            />

            {/* پروفایل کاربر */}
            <Route
              path="profile"
              element={
                <UserProtectedRoute>
                  <Profile />
                </UserProtectedRoute>
              }
            />

          </Route>


          {/* ========================= */}
          {/* ثبت نام کاربر */}
          {/* ========================= */}

          <Route
            path="/register"
            element={<Register />}
          />


          {/* ========================= */}
          {/* ورود کاربر */}
          {/* ========================= */}

          <Route
            path="/user-login"
            element={<UserLogin />}
          />


          {/* ========================= */}
          {/* ورود مدیر */}
          {/* ========================= */}

          <Route
            path="/admin-login"
            element={<Login />}
          />


          {/* ========================= */}
          {/* پنل مدیریت */}
          {/* ========================= */}

          <Route element={<ProtectedRoute />}>

            <Route
              path="/admin"
              element={<AdminLayout />}
            >

              {/* داشبورد */}
              <Route
                index
                element={<Admin />}
              />

              {/* سفارش‌های مدیریت */}
              <Route
                path="orders"
                element={<AdminOrders />}
              />

              {/* محصولات مدیریت */}
              <Route
                path="products"
                element={<AdminProducts />}
              />

            </Route>

          </Route>

        </Routes>

      </main>

    </div>
  );
}

export default App;

