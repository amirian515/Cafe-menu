import { useOutletContext } from "react-router-dom";
import type { Product } from "../componenets/home/ProductCard";

function Orders(){
const {cart} = useOutletContext<{
  cart:{
    product:Product;
    quantity:number;
  }[];
}>();
const totalPrice = cart.reduce(
  (total, item) => total + item.product.price * item.quantity,
  0
);
return(

    <section className="max-w-5xl mx-auto px-8 py-10">
            <h1 className="text-3xl text-white  mb-8 text-right"> سفارش شما</h1>
<div className="grid gap-4">
{
  cart.map((item)=>(
    <div
      key={item.product.id}
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-4
        flex
        items-center
        gap-4
        rtl
      "
    >

      <img
        src={item.product.img}
        alt={item.product.name}
        className="w-24 h-24 rounded-xl object-cover"
      />

      <div>
        <h2 className="text-xl text-white">
          {item.product.name}
        </h2>

        <p className="text-gray-400">
          تعداد: {item.quantity}
        </p>

      </div>

    </div>
  ))
}
</div>
<div className="mt-8 text-right text-xl text-white">
  مجموع سفارش:
  {totalPrice.toLocaleString()} تومان
</div>

    </section>
    )}



export default Orders;