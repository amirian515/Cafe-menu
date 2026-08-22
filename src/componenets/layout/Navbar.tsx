import { NavLink } from "react-router-dom";



function Navbar({ cartCount ,toggleCart }: { cartCount: number; toggleCart :()=>void;  }){
    return(
        <header className="h-20 border-b border-zinc-800 bg-black sticky top-0 md:static z-50" >
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between ">
                <h1 className=" md:text-2xl font-bold text-yellow-500"> Cafe luxe</h1>
                <nav className="flex items-center md:gap-8 gap-4 text-sm md:text-base">
                    <NavLink className={({ isActive }) =>
                            isActive
                            ? "text-yellow-500 font-bold"
                            : "text-white hover:text-yellow-400"
                        } to ="/">
                    <button className="hover:scale-125 transition duration-200 ">خانه</button>
                    </NavLink>
                    <NavLink to ="/Menu"className= {({ isActive }) =>
                                isActive
                                ? "text-yellow-500 font-bold"
                                : "text-white hover:text-yellow-400"
                            }>
                    <button className="hover:scale-125 transition duration-200">منو</button>
                    </NavLink>
                    <NavLink to ="/Orders"  className={({ isActive }) =>
                                isActive
                                ? "text-yellow-500 font-bold"
                                : "text-white hover:text-yellow-400"
                            }>
                    <button className="hover:scale-125 transition duration-200">سفارشات</button>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                            isActive
                            ? "text-yellow-500 font-bold"
                            : "text-white hover:text-yellow-400"
                        } to="/profile">
                        <button className="hover:scale-150 transition duration-200">👤</button>
                    </NavLink>
                    <button onClick={toggleCart} className="relative hover:scale-125 transition duration-200">
  🛒
                    <span className="absolute -top-2 -left-2 bg-yellow-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                    </button>

                </nav>
            </div>
        </header>
    );
}
export default Navbar;