import type {Product} from "../home/ProductCard";
import CartItem from "./CartItem";
import { useMemo } from "react";
type CartProps = {
  toggleCart: () => void;
  items: {
    product: Product;
    quantity: number;
  }[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};



function Cart({
  toggleCart,
  items,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}: CartProps) {
  const totalPrice = useMemo(()=>{
    return items.reduce((sum , item)=> sum +item.product.price *item.quantity,0 );
  },[items]);
    return(
        <aside className="fixed top-0 right-0 h-screen w-96 bg-zinc-900 border-l border-zinc-800 shadow-2xl z-50 flex flex-col">
           <div className="flex items-center justify-between mb-6 ">
                <button onClick={toggleCart} className="text-gray-400 px-5 py-5">  ✕</button>
                <h2 className="text-xl font-bold px-10" >سبد خرید</h2>
           </div>
           <div className=" flex-1 overflow-y-auto">
            {items.map((item)=>(
                <CartItem key={item.product.id} product={item.product} quantity={item.quantity}  removeFromCart={removeFromCart} increaseQuantity={increaseQuantity}  decreaseQuantity={decreaseQuantity}/>
            ))}
           </div>
           {items.length > 0 &&(
            <div className=" flex justify-between items-center p-4 border-t border-r-zinc-700 bg-zinc-800 ">
              <span className="text-xl font-bold text-yellow-500">{totalPrice.toLocaleString()}تومان</span>
              <span className="text-lg font-bold text-white">مجموع کل</span>
            </div>
           )}
        </aside>
    );
}

export default Cart;