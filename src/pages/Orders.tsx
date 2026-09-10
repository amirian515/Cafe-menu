import { useEffect, useState } from "react";
import type { Product } from "../componenets/home/ProductCard";

type Order = {
  _id: string;
  items: {
    product: Product;
    quantity: number;
  }[];
  total: number;
  date: string;
  status: string;
};

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMyOrders() {
      try {
        const token = localStorage.getItem("userToken");

        const response = await fetch(
          "https://cafe-menu-backend-615c.onrender.com/api/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("خطا در دریافت سفارش‌ها");
        }

        const data = await response.json();

        setOrders(data);
      } catch (error) {
        console.error("Error getting orders:", error);
      } finally {
        setLoading(false);
      }
    }

    getMyOrders();
  }, []);

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto px-8 py-10">
        <div className="text-center text-gray-400 py-20">
          در حال دریافت سفارش‌ها...
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-8 py-10">

      <h1 className="text-2xl md:text-3xl text-white mb-4 md:mb-8 text-right">
        سفارشات شما
      </h1>

      {orders.length === 0 ? (

        <div className="text-center text-gray-400 py-20">
          هنوز سفارشی ثبت نشده است.
        </div>

      ) : (

        <div className="grid gap-3 md:gap-6">

          {orders.map((order) => (

            <div
              key={order._id}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
              "
            >

              <div className="flex justify-between mb-4">

                <h2 className="text-yellow-500 text-ltr md:text-xl">
                  شماره سفارش :
                  {order._id.slice(-4)}
                </h2>

                <div className="text-gray-400 text-right">
                  {order.date}

                  <div className="mt-3">

                    <span
                      className={
                        order.status === "در انتظار بررسی"
                          ? "text-yellow-300"
                          : order.status === "در حال آماده سازی"
                          ? "text-blue-400"
                          : order.status === "آماده تحویل"
                          ? "text-green-400"
                          : "text-white"
                      }
                    >
                      {order.status}
                    </span>

                  </div>

                </div>

              </div>

              {order.items.map((item, index) => (

                <div
                  key={`${order._id}-${index}`}
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-zinc-800
                    py-3
                    justify-between
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

                    <h3 className="text-white text-right md:text-lg">
                      {item.product.name}
                    </h3>

                    <p className="text-gray-400">
                      تعداد: {item.quantity}
                    </p>

                  </div>

                </div>

              ))}

              <div
                className="
                  mt-5
                  text-right
                  md:text-xl
                  text-yellow-500
                  flex
                  flex-row-reverse
                  justify-between
                "
              >

                <span>مجموع :</span>

                <span>
                  {order.total.toLocaleString()} تومان
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Orders;