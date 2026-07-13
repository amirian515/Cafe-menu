function Navbar(){
    return(
        <header className="h-20 border-b border-zinc-800 bg-black" >
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-yellow-500"> Cafe luxe</h1>
                <nav className="flex items-center gap-8">
                    <a href="#">خانه</a>
                    <a href="#">منو</a>
                    <a href="#">سفارشات</a>
                    <a href="#">پروفایل</a>

                </nav>
            </div>
        </header>
    );
}
export default Navbar;