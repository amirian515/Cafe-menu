import { useOutletContext } from "react-router-dom";
import type { Order } from "../hooks/useCart";
import { useState } from "react";


function AdminOrders(){
    const {orders , updateOrderStatus}=useOutletContext<{
        orders:Order[];
        updateOrderStatus:(id :number)=>void
    }>();
const sortedOrders = [...orders].sort((a, b) => {
  const dateA = a.date.split("/").map(Number);
  const dateB = b.date.split("/").map(Number);

  return (
    dateB[0] - dateA[0] ||
    dateB[1] - dateA[1] ||
    dateB[2] - dateA[2]
  );
});
const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);    return(
<section className="my-10 mx-10">
  <h1  className="text-3xl text-yellow-400  text-right pb-10 border-b border-b-zinc-700">مدیریت سفارش‌ها</h1>
    <div className="flex justify-between py-5 border-b border-zinc-700 text-right">
    <p className="w-1/4">وضعیت</p>
    <p className="w-1/4">مبلغ</p>
    <p className="w-1/4">تاریخ</p>
    <p className="w-1/4">شماره</p>
    </div>

{sortedOrders.map((order) => (
  <>
    <div
      onClick={() =>
  setSelectedOrderId(
    selectedOrderId === order.id
      ? null
      : order.id
  )
}
      className="flex justify-between py-5 text-right border-b border-zinc-800 hover:bg-zinc-800 transition duration-500"
    >
      <button
        className="bg-zinc-700 rounded-2xl p-2"
        onClick={() => updateOrderStatus(order.id)}
      >
        تغییر وضعیت
      </button>

      <p
        className={`w-1/4 ${
          order.status === "در انتظار بررسی"
            ? "text-yellow-300"
            : order.status === "در حال آماده سازی"
              ? "text-blue-400"
              : order.status === "آماده تحویل"
                ? "text-green-400"
                : "text-white"
        }`}
      >
        {order.status}
      </p>

      <p className="w-1/4" dir="ltr">
        <span className="mr-1">تومان</span>
        {order.total.toLocaleString()}
      </p>

      <p className="w-1/4">{order.date}</p>

      <p className="w-1/4">
        {String(order.id % 10000).padStart(4, "0")}
      </p>
    </div>

    {selectedOrderId === order.id && (
      <div className="bg-zinc-900 p-5">
            {order.items.map((item) => (
            <p className="text-right py-2" key={item.product.id}>
                {item.product.name} × {item.quantity}
            </p>
        ))}
      </div>
    )}
  </>
))}

</section>
    )
}
export  default AdminOrders;