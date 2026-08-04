import { useState , useEffect } from "react";
import type { Product } from "../componenets/home/ProductCard";
 export type CartItem = {
  product: Product;
  quantity: number;
};

 export type Order = {
  id: number;
  items: CartItem[];
  total: number;
  date: string;
  status :string;
};

export function useCart(){

const [cart,setCart] = useState<
CartItem[]
>(()=>{
  const savedCart = localStorage.getItem("cart");
  return savedCart === null
  ? []
  :JSON.parse(savedCart)
});
const [orders,setOrders] = useState<
  
   Order[]
  
>(() => {

  const savedOrders = localStorage.getItem("orders");

  return savedOrders === null
    ? []
    : JSON.parse(savedOrders);

});
function addToCart(product: Product) {

  setCart((prev) => {

    const existing = prev.find(
      (item) => item.product.id === product.id
    );

    if (existing) {
      return prev.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        product,
        quantity: 1,
      },
    ];

  });

}
function removeFromCart(id:number){

  setCart((prev)=>
      prev.filter(
      (item)=> item.product.id !== id
    )
  );

}
 function increaseQuantity(productId: number) {
  setCart((prev)=>
    prev.map((item) =>
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
  setCart((prev)=>
    prev.map((item) =>
  item.product.id === productId
?{
  ...item,
  quantity :item.quantity-1,
}
:item)
.filter((item)=> item.quantity >0)
  )
}
function placeOrder(){

  const newOrder: Order = {
    id: Date.now(),
    items: cart,
    total: cart.reduce(
      (sum, item) =>
        sum + item.product.price * item.quantity,
      0
    ),
    date: new Date().toLocaleDateString("fa-IR"),
    status :"در انتظار بررسی"
  };


  setOrders((prev)=>[
    ...prev,
    newOrder
  ]);

  setCart([]);

}
useEffect(()=>{
  localStorage.setItem("cart" , JSON.stringify(cart));},
  [cart])
  useEffect(()=>{

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );

},[orders])



return {
cart,
addToCart,
removeFromCart,
increaseQuantity,
decreaseQuantity,
placeOrder,
orders,

};}[]