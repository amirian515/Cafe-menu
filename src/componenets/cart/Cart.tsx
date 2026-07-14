function Cart({ toggleCart }: { toggleCart: () => void }){
    return(
        <aside className="fixed top-0 right-0 h-screen w-96 bg-zinc-900 border-l border-zinc-800 shadow-2xl z-50">
           <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold px-10" >سبد خرید</h2>
                <button onClick={toggleCart} className="text-gray-400 px-5 py-5">  ✕</button>
           </div>
        </aside>
    );
}

export default Cart;