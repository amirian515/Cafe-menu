import type {Product} from "../home/ProductCard";
import CartItem from "./CartItem";
import { useMemo } from "react";
type CartProps = {
  placeOrder :()=>void
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
  placeOrder,
}: CartProps) {
  const totalPrice = useMemo(()=>{
    return items.reduce((sum , item)=> sum +item.product.price *item.quantity,0 );
  },[items]);
    return(
        <aside className="fixed top-0 right-0 h-screen w-96 bg-zinc-900 border-l border-zinc-800 shadow-2xl z-50 flex flex-col
         transform transition duration-200">
           <div className="flex items-center justify-between mb-6 ">
                <button onClick={toggleCart} className="text-gray-400 px-5 py-5
                hover:scale-150  transition duration-500 hover:text-red-600 hover:rotate-180">  ✕ </button>
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
              <button
                onClick={placeOrder}
                className="
                  bg-yellow-500
                  text-black
                  px-5
                  py-2
                  rounded-xl
                  font-bold
                  hover:scale-110 transition duration-200
                "
              >
                ثبت سفارش
              </button>
            </div>
           )}
        </aside>
    );
}

export default Cart;