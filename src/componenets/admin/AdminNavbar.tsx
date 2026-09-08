
import { NavLink, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/admin-login");
  }

  return (
    <nav className="sticky top-0 flex md:hidden w-full bg-zinc-900 gap-4 justify-center items-center p-4">

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 text-sm"
            : "text-white text-sm hover:text-yellow-400"
        }
        to="/admin/orders"
      >
        سفارش‌ها
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 text-sm"
            : "text-white text-sm hover:text-yellow-400"
        }
        to="/admin/products"
      >
        محصولات
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 text-sm"
            : "text-white text-sm hover:text-yellow-400"
        }
        to="/admin"
      >
        داشبورد
      </NavLink>

      <button
        onClick={handleLogout}
        className="text-red-500 text-sm hover:text-red-400 transition"
      >
        خروج
      </button>

    </nav>
  );
}

export default AdminNavbar;

