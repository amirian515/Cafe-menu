import type {Product} from "../home/ProductCard";
import CartItem from "./CartItem";
type CartProps = {
  toggleCart: () => void;
  items: {
    product: Product;
    quantity: number;
  }[];
  removeFromCart: (id: number) => void;
};



function Cart({
  toggleCart,
  items,
  removeFromCart,
}: CartProps) {
    return(
        <aside className="fixed top-0 right-0 h-screen w-96 bg-zinc-900 border-l border-zinc-800 shadow-2xl z-50">
           <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold px-10" >سبد خرید</h2>
                <button onClick={toggleCart} className="text-gray-400 px-5 py-5">  ✕</button>
           </div>
           <div>
            {items.map((item)=>(
                <CartItem key={item.product.id} product={item.product}  removeFromCart={removeFromCart} />
            ))}
           </div>
        </aside>
    );
}

export default Cart;