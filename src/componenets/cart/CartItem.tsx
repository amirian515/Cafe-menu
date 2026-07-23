import type { Product } from "../home/ProductCard" ;
type CartItemProps = {
  product: Product;
  removeFromCart: (id: number) => void;
};

function CartItem({
  product,
  removeFromCart,
}: CartItemProps) {
    return(
        <div className="flex items-center justify-between py-3 border-b border-zinc-800 my-5 mx-5">
            <span className="text-sm text-yellow-500 font-bold">{product.price.toLocaleString()}تومان</span>
            <span className="text-sm">{product.name}</span>
            <button onClick={() => removeFromCart(product.id)}>
  ❌
</button>
        </div>
    )

};
export default CartItem;