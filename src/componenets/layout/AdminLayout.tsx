import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";

function AdminLayout() {
  return (
<div className="min-h-screen flex">
    <Sidebar/>


    <main>
        <Outlet />
    </main>
</div>
  );
}

export default AdminLayout;