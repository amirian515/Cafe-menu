import { useState, useEffect } from "react";
import type { Product } from "../componenets/home/ProductCard";

const API_URL = "http://localhost:5000/api/orders";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type OrderStatus =
  | "در انتظار بررسی"
  | "در حال آماده سازی"
  | "آماده تحویل"
  | "تحویل شده";

export type Order = {
  _id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: OrderStatus;
};

export function useCart() {
  // =========================
  // سبد خرید
  // =========================

  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart === null
      ? []
      : JSON.parse(savedCart);
  });

  // =========================
  // سفارش‌ها
  // =========================

  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // دریافت سفارش‌ها از MongoDB
  useEffect(() => {
    async function getOrders() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("خطا در دریافت سفارش‌ها");
        }

        const data = await response.json();

        setOrders(data);
      } catch (error) {
        console.error("Error getting orders:", error);
      } finally {
        setLoadingOrders(false);
      }
    }

    getOrders();
  }, []);

  // =========================
  // اضافه کردن به سبد
  // =========================

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.product._id === product._id
      );

      if (existing) {
        return prev.map((item) =>
          item.product._id === product._id
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

  // =========================
  // حذف از سبد
  // =========================

  function removeFromCart(id: string) {
    setCart((prev) =>
      prev.filter(
        (item) => item.product._id !== id
      )
    );
  }

  // =========================
  // افزایش تعداد
  // =========================

  function increaseQuantity(productId: string) {
    setCart((prev) =>
      prev.map((item) =>
        item.product._id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // =========================
  // کاهش تعداد
  // =========================

  function decreaseQuantity(productId: string) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product._id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // =========================
  // ثبت سفارش
  // =========================

  async function placeOrder() {
    if (cart.length === 0) {
      return;
    }

    const total = cart.reduce(
      (sum, item) =>
        sum + item.product.price * item.quantity,
      0
    );

    const newOrder = {
      items: cart,
      total: total,
      date: new Date().toLocaleDateString("fa-IR"),
    };

    try {
      const token = localStorage.getItem("userToken");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) {
        throw new Error("خطا در ثبت سفارش");
      }

      const savedOrder = await response.json();

      // اضافه کردن سفارش جدید به لیست
      setOrders((prev) => [
        savedOrder,
        ...prev,
      ]);

      // خالی کردن سبد
      setCart([]);

      alert("سفارش شما با موفقیت ثبت شد");
    } catch (error) {
      console.error("Error placing order:", error);

      alert("ثبت سفارش با خطا مواجه شد");
    }
  }

  // =========================
  // ذخیره سبد خرید
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // =========================
  // تغییر وضعیت سفارش
  // =========================

  async function updateOrderStatus(
    id: string,
    newStatus?: OrderStatus
  ) {
    try {
      const order = orders.find(
        (order) => order._id === id
      );

      if (!order) return;

      let status: OrderStatus =
        newStatus || order.status;

      if (!newStatus) {
        if (
          order.status === "در انتظار بررسی"
        ) {
          status = "در حال آماده سازی";
        } else if (
          order.status === "در حال آماده سازی"
        ) {
          status = "آماده تحویل";
        } else if (
          order.status === "آماده تحویل"
        ) {
          status = "تحویل شده";
        }
      }

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "خطا در تغییر وضعیت سفارش"
        );
      }

      const updatedOrder =
        await response.json();

      setOrders((prev) =>
        prev.map((order) =>
          order._id === id
            ? updatedOrder
            : order
        )
      );
    } catch (error) {
      console.error(
        "Error updating order:",
        error
      );
    }
  }

  // =========================
  // خروجی Hook
  // =========================

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    placeOrder,
    orders,
    updateOrderStatus,
    loadingOrders,
  };
}