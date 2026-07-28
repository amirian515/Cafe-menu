import { Link } from "react-router-dom";



function Navbar({ cartCount ,toggleCart }: { cartCount: number; toggleCart :()=>void; }){
    return(
        <header className="h-20 border-b border-zinc-800 bg-black" >
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-yellow-500"> Cafe luxe</h1>
                <nav className="flex items-center gap-8">
                    <Link to ="/">
                    <button>خانه</button>
                    </Link>
                    <Link to ="/Menu">
                    <button>منو</button>
                    </Link>
                    <Link to ="/Orders">
                    <button>سفارشات</button>
                    </Link>
                    <Link to="/profile">
                        <button>👤</button>
                    </Link>
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