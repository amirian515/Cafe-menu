import type { Product } from "../home/ProductCard" ;
type CartItemProps = {
  product: Product;
  quantity : number;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

function CartItem({
  product,
  quantity,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}: CartItemProps) {
    return(
        <div className="flex items-center justify-between py-3 border-b border-zinc-800 my-5 mx-5
        hover:bg-zinc-700">
            <span className="text-sm text-yellow-500 font-bold">{(product.price * quantity).toLocaleString()}تومان</span>
            <span className="text-sm">{product.name}</span>
            <div className="flex items-center gap-3">
                <button className="text-3xl" onClick={()=> decreaseQuantity(product.id)} >-</button>
                <span>{quantity}</span>
                <button className="text-2xl " onClick={()=> increaseQuantity(product.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(product.id)}>
  ❌
</button>
        </div>
    )

};
export default CartItem;