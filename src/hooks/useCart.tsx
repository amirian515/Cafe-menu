import { useState , useEffect } from "react";
import type { Product } from "../componenets/home/ProductCard";
// import { json } from "stream/consumers";
// import { stringify } from "querystring";


export function useCart(){

const [cart,setCart] = useState<
{product: Product; quantity:number}[]
>(()=>{
  const savedCart = localStorage.getItem("cart");
  return savedCart === null
  ? []
  :JSON.parse(savedCart)
});
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

  setCart((prev)=>
      prev.filter(
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
useEffect(()=>{
  localStorage.setItem("cart" , JSON.stringify(cart));},
  [cart])

return {
cart,
addToCart,
removeFromCart,
increaseQuantity,
decreaseQuantity,

};}[]