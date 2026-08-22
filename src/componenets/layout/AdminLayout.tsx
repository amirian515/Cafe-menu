import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";
import { useCart } from "../../hooks/useCart";
import AdminNavbar from "../admin/AdminNavbar";

function AdminLayout() {
  const { orders ,updateOrderStatus } = useCart();
  return (


<div className="min-h-screen flex flex-row-reverse">
        <Sidebar/>
    <main className="flex flex-col w-full">
        <AdminNavbar/>
        <Outlet context={{orders , updateOrderStatus}} />

    </main>
</div>
  );
}

export default AdminLayout;