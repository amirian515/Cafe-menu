import { useOutletContext } from "react-router-dom";
import type { Product } from "../componenets/home/ProductCard";

type Order = {
  id: number;
  items: {
    product: Product;
    quantity: number;
  }[];
  total: number;
  date: string;
  status: string;
};


function Orders(){

const { orders } = useOutletContext<{
  orders: Order[];
}>();


return(
<section className="max-w-5xl mx-auto px-8 py-10">

<h1 className="text-3xl text-white mb-8 text-right">
  سفارشات شما
</h1>


{orders.length === 0 ? (

<div className="text-center text-gray-400 py-20">
  هنوز سفارشی ثبت نشده است.
</div>

) : (

<div className="grid gap-6">

{
orders.map((order)=>(

<div
key={order.id}
className="
bg-zinc-900
border
border-zinc-800
rounded-2xl
p-6
"
>


<div className="flex justify-between mb-4">

<h2 className="text-yellow-500 text-xl">
سفارش #{order.id}
</h2>

<span className="text-gray-400">
{order.date}
<div className="mt-3">
  <span
            className={`w-1/4 ${
            order.status === "در انتظار بررسی"
            ? "text-yellow-300"
            : order.status === "در حال آماده سازی"
            ? "text-blue-400"
            : order.status === "آماده تحویل"
            ? "text-green-400"
            : "text-white"}`}
>
     {order.status}
  </span>
</div>
</span>


</div>


{
order.items.map((item)=>(

<div
key={item.product.id}
className="
flex
items-center
gap-4
border-b
border-zinc-800
py-3
"
>

<img
src={item.product.img}
alt={item.product.name}
className="
w-20
h-20
rounded-xl
object-cover
"
/>


<div className="text-right">

<h3 className="text-white text-lg">
{item.product.name}
</h3>

<p className="text-gray-400">
تعداد: {item.quantity}
</p>

</div>


</div>

))
}


<div className="mt-5 text-right text-xl text-yellow-500">
مجموع:
{order.total.toLocaleString()} تومان
</div>


</div>

))
}

</div>


)}

</section>
)

}


export default Orders;