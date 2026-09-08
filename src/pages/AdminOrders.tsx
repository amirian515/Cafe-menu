
import { useOutletContext } from "react-router-dom";
import type { Order, OrderStatus } from "../hooks/useCart";
import { useState } from "react";

function AdminOrders() {
  const { orders, updateOrderStatus } = useOutletContext<{
    orders: Order[];
    updateOrderStatus: (
      id: string,
      newStatus?: OrderStatus
    ) => void;
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

  const [selectedOrderId, setSelectedOrderId] =
    useState<string | null>(null);

  return (
    <section className="my-10 mx-10">

      <h1
        className="
          md:text-3xl
          text-xl
          text-yellow-400
          text-right
          pb-10
          border-b
          border-b-zinc-700
        "
      >
        مدیریت سفارش‌ها
      </h1>

      {/* Header */}
      <div
        className="
          flex
          justify-between
          py-5
          border-b
          border-zinc-700
          text-right
          text-sm
          md:text-base
        "
      >
        <p className="w-1/4">وضعیت</p>
        <p className="w-1/4">مبلغ</p>
        <p className="w-1/4">تاریخ</p>
        <p className="w-1/4">شماره</p>
      </div>

      {/* Orders */}
      {sortedOrders.map((order) => (
        <div key={order._id}>

          {/* Order Row */}
          <div
            onClick={() =>
              setSelectedOrderId(
                selectedOrderId === order._id
                  ? null
                  : order._id
              )
            }
            className="
              flex
              justify-between
              items-center
              py-5
              gap-3
              text-right
              border-b
              border-zinc-800
              hover:bg-zinc-800
              transition
              duration-500
              text-[12px]
              md:text-base
              cursor-pointer
            "
          >

            {/* Status */}
            <div className="w-1/4">

              <button
                className="
                  bg-zinc-700
                  rounded-2xl
                  p-1
                  hover:bg-zinc-600
                  transition
                "
                onClick={(e) => {
                  e.stopPropagation();
                  updateOrderStatus(order._id);
                }}
              >
                تغییر وضعیت
              </button>

              <p
                className={`
                  mt-2
                  ${
                    order.status === "در انتظار بررسی"
                      ? "text-yellow-300"
                      : order.status === "در حال آماده سازی"
                      ? "text-blue-400"
                      : order.status === "آماده تحویل"
                      ? "text-green-400"
                      : "text-white"
                  }
                `}
              >
                {order.status}
              </p>

            </div>

            {/* Price */}
            <p
              className="w-1/4"
              dir="ltr"
            >
              <span className="mr-1">
                تومان
              </span>

              {order.total.toLocaleString()}
            </p>

            {/* Date */}
            <p className="w-1/4">
              {order.date}
            </p>

            {/* Order Number */}
            <p
              className="w-1/4"
              dir="ltr"
            >
              {order._id.slice(-4)}
            </p>

          </div>

          {/* Order Details */}
          {selectedOrderId === order._id && (

            <div
              className="
                bg-zinc-900
                p-5
                border-b
                border-zinc-800
              "
            >

              {order.items.map((item, index) => (

                <div
                  key={`${order._id}-${index}`}
                  className="
                    flex
                    justify-between
                    items-center
                    py-2
                    text-right
                  "
                >

                  <span className="text-yellow-500">
                    {item.quantity} ×
                  </span>

                  <p className="text-xs md:text-base">
                    {item.product.name}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>
      ))}

    </section>
  );
}

export default AdminOrders;

