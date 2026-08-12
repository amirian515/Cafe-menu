import { useOutletContext } from "react-router-dom";
import type { Order } from "../hooks/useCart";
import { products } from "../data/products";
import useProducts from "../hooks/useProducts";
function Admin() {
  const { productList } = useProducts();
  const { orders } = useOutletContext<{
    orders: Order[];
}>();
const totalSpent =orders.reduce((sum , order) => sum + order.total ,0)
const lastOrders = orders.slice(orders.length-5)

  return (
    <section className="my-10 mx-10">

      <div className="text-right  pb-3">
        <h1 className="text-3xl mb-5 text-yellow-500">داشبورد </h1>
      </div>
      <div className="flex justify-between items-center py-10  gap-5 border-b border-b-zinc-700">
        <div className="flex flex-col items-center gap-5 bg-zinc-900 p-5 rounded-3xl w-full">
           <span>تعداد سفارش‌ها</span>
           <span>{orders.length}</span>
           <span>سفارش‌</span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-zinc-900  p-5 rounded-3xl w-full">
          <span>فروش کل</span>
          <span>{totalSpent.toLocaleString()}</span>
          <span> تومان</span>
        </div>
        <div className="flex flex-col items-center gap-5 bg-zinc-900 p-5 rounded-3xl w-full">
          <span>محصولات</span>
          <span>{productList.length}</span>
          <span>محصول</span>
        </div>
      </div>
      <div >
        <h3 className="text-2xl text-yellow-500 p-5 text-center">آخرین سفارش‌ها</h3>
        <div className=" flex justify-between py-5  border-b border-b-zinc-700 text-right">
          <p className="w-1/4"> وضعیت</p>
          <p className="w-1/4"> مبلغ</p>
          <p className="w-1/4"> تاریخ</p>
          <p className="w-1/4">شماره</p>
        </div>
        { lastOrders.length === 0
        ? <p className="text-center mt-20">سفارشی ثبت نشده</p>
        :
          <div >
              {lastOrders.map((order) => (
                  <div key={order.id} className=" flex justify-between py-5 text-right border-b border-zinc-800
                   hover:bg-zinc-800 transition duration-500">
                      <p
                        className={`w-1/4 ${
                          order.status === "در انتظار بررسی"
                            ? "text-yellow-300"
                            : order.status ==="در حال آماده سازی"
                              ? "text-blue-400"
                              : order.status === " آماده تحویل"
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
              ))}
        </div>}
      </div>

    </section>
  );
}

export default Admin;