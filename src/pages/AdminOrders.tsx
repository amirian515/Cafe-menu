import { useOutletContext } from "react-router-dom";
import type { Order } from "../hooks/useCart";


function AdminOrders(){
    const {orders}=useOutletContext<{
        orders:Order[];
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
    return(
<section className="my-10 mx-10">
  <h1  className="text-3xl text-yellow-400  text-right pb-10 border-b border-b-zinc-700">مدیریت سفارش‌ها</h1>
    <div className="flex justify-between py-5 border-b border-zinc-700 text-right">
    <p className="w-1/4">وضعیت</p>
    <p className="w-1/4">مبلغ</p>
    <p className="w-1/4">تاریخ</p>
    <p className="w-1/4">شماره</p>
    </div>

  {sortedOrders.map((order)=>
                  <div key={order.id} className=" flex justify-between py-5 text-right border-b border-zinc-800
                   hover:bg-zinc-800 transition duration-500">
                      <p
                        className={`w-1/4 ${
                          order.status === "در انتظار بررسی"
                            ? "text-yellow-300"
                            : order.status === " در حال آماده سازس"
                              ? "text-blue-400"
                              : order.status === "آماده تحویل"
                                ? "text-green-400"
                                : "text-white"
                        }`}
                      >
                        {order.status}
                      </p>
                    <p className="w-1/4 " dir="ltr"> <span className="mr-1">تومان</span></p>{order.total.toLocaleString()}
                    <p className="w-1/4">{order.date}</p>
                    <p className="w-1/4">{ String(order.id % 10000).padStart(4,"0")}</p>

  </div>
)}

</section>
    )
}
export  default AdminOrders;