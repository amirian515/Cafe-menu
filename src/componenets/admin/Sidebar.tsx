import { NavLink } from "react-router-dom";


function Sidebar(){

    return(
        <aside className="w-64 min-h-screen bg-zinc-900 p-5 text-white  hidden md:flex flex-col">

            <h2 className=" text-2xl text-yellow-400 mb-8 text-center">
                پنل مدیریت
            </h2>


            <nav className="flex flex-col gap-4 text-right">

                <NavLink className={({isActive})=>
                isActive
                ? "text-yellow-500 font-bold"
                : "text-white hover:text-yellow-400"
                }
                 to="/admin" >
                    داشبورد
                </NavLink>


                <NavLink className={({isActive})=>
                isActive
                ? "text-yellow-500  lg:font-bold"
                : "text-white hover:text-yellow-400"
                }
                to="/admin/orders">
                    سفارش‌ها
                </NavLink>


                <NavLink className={({isActive})=>
                isActive
                ? "text-yellow-500 font-bold"
                : "text-white hover:text-yellow-400"
                }
                
                to="/admin/products">
                    محصولات
                </NavLink>


            </nav>


        </aside>
    )

}

export default Sidebar;