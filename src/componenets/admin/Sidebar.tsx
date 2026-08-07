import { NavLink } from "react-router-dom";


function Sidebar(){

    return(
        <aside className="w-64 min-h-screen bg-zinc-900 p-5 text-white  ">

            <h2 className="text-2xl text-yellow-400 mb-8 text-center">
                پنل مدیریت
            </h2>


            <nav className="flex flex-col gap-4">

                <NavLink to="/admin">
                    داشبورد
                </NavLink>


                <NavLink to="/admin/orders">
                    سفارش‌ها
                </NavLink>


                <NavLink to="/admin/products">
                    محصولات
                </NavLink>


            </nav>


        </aside>
    )

}

export default Sidebar;