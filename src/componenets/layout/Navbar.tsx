import { NavLink } from "react-router-dom";



function Navbar({ cartCount ,toggleCart }: { cartCount: number; toggleCart :()=>void;  }){
    return(
        <header className="h-20 border-b border-zinc-800 bg-black" >
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-yellow-500"> Cafe luxe</h1>
                <nav className="flex items-center gap-8">
                    <NavLink className={({ isActive }) =>
                            isActive
                            ? "text-yellow-500 font-bold"
                            : "text-white hover:text-yellow-400"
                        } to ="/">
                    <button>خانه</button>
                    </NavLink>
                    <NavLink to ="/Menu"className= {({ isActive }) =>
                                isActive
                                ? "text-yellow-500 font-bold"
                                : "text-white hover:text-yellow-400"
                            }>
                    <button>منو</button>
                    </NavLink>
                    <NavLink to ="/Orders"  className={({ isActive }) =>
                                isActive
                                ? "text-yellow-500 font-bold"
                                : "text-white hover:text-yellow-400"
                            }>
                    <button>سفارشات</button>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                            isActive
                            ? "text-yellow-500 font-bold"
                            : "text-white hover:text-yellow-400"
                        } to="/profile">
                        <button>👤</button>
                    </NavLink>
                    <button onClick={toggleCart} className="relative">
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