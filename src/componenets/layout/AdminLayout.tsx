import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";
import { useCart } from "../../hooks/useCart";

function AdminLayout() {
  const { orders } = useCart();
  return (
<div className="min-h-screen flex flex-row-reverse">
        <Sidebar/>

    <main className="flex-1">
        <Outlet context={{orders}} />

    </main>
</div>
  );
}

export default AdminLayout;