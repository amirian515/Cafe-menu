import { useState } from "react";
import type { Product } from "../componenets/home/ProductCard";


export function useCart(){

const [cart,setCart] = useState<
{product: Product; quantity:number}[]
>([]);
function addToCart(product:Product){
  const existing = cart.find(
    (item)=>item.product.id === product.id);
    if (existing){
      setCart(
        cart.map((item) =>
      item.product.id === product.id
    ?{
      ...item ,
      quantity:item.quantity +1}
      :item)
      );}
      else{
        setCart([
          ...cart ,{
            product,
            quantity:1
          }
        ]);
    }
}
function removeFromCart(id:number){

  setCart(
    cart.filter(
      (item)=> item.product.id !== id
    )
  );

}
 function increaseQuantity(productId: number) {
  setCart(
    cart.map((item) =>
      item.product.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
}
function decreaseQuantity (productId :number){
  setCart(
    cart.map((item) =>
  item.product.id === productId
?{
  ...item,
  quantity :item.quantity-1,
}
:item)
.filter((item)=> item.quantity >0)
  )
}

return {
cart,
addToCart,
removeFromCart,
increaseQuantity,
decreaseQuantity,

};}[]