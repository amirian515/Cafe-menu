import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Order } from "../hooks/useCart";

type UserProfile = {
  name: string;
  username: string;
  email: string;
  phone: string;
  address: string;
};

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfileData() {
      try {
        const token = localStorage.getItem("userToken");

        const profileResponse = await fetch(
          "https://cafe-menu-backend-615c.onrender.com/api/user-auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!profileResponse.ok) {
          throw new Error("خطا در دریافت اطلاعات کاربر");
        }

        const profileData = await profileResponse.json();

        setUser(profileData);

        const ordersResponse = await fetch(
          "https://cafe-menu-backend-615c.onrender.com/api/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!ordersResponse.ok) {
          throw new Error("خطا در دریافت سفارش‌ها");
        }

        const ordersData = await ordersResponse.json();

        setOrders(ordersData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getProfileData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("userToken");
    navigate("/user-login");
  }

  const totalSpent = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const lastOrder = orders[0];

  if (loading) {
    return (
      <section className="flex justify-center items-center w-full min-h-[60vh]">
        <p className="text-gray-400">
          در حال دریافت اطلاعات...
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col w-full px-10 mb-5">

      <div className="w-full flex justify-end mb-5">
        <button
          onClick={handleLogout}
          className="
            bg-red-600
            text-white
            px-6
            py-2
            rounded-xl
            hover:bg-red-500
            transition
          "
        >
          خروج از حساب
        </button>
      </div>

      <h1 className="text-3xl text-yellow-500 mt-10 py-5 border-b border-zinc-700 w-full text-right">
        پروفایل
      </h1>

      <div className="flex flex-col text-right gap-3.5 my-5 border-b border-zinc-700 w-full pb-5">

        <div className="flex justify-between">
          <span>{user?.name}</span>
          <span>: نام</span>
        </div>

        <div className="flex justify-between">
          <span>{user?.address}</span>
          <span>: آدرس</span>
        </div>

        <div className="flex justify-between">
          <span>{user?.phone}</span>
          <span>: شماره تماس</span>
        </div>

        <div className="flex justify-between">
          <span>{user?.email}</span>
          <span>: ایمیل</span>
        </div>

        <div className="flex justify-between">
          <span>{user?.username}</span>
          <span>: نام کاربری</span>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-5 border-b border-zinc-700 pb-5 w-full">

        <div className="bg-zinc-900 rounded-xl p-5 text-center">

          <h3 className="text-gray-400 mb-2">
            تعداد سفارش
          </h3>

          <p className="text-3xl text-yellow-500 font-bold">
            {orders.length}
          </p>

        </div>

        <div className="bg-zinc-900 rounded-xl p-5 text-center">

          <h3 className="text-gray-400 mb-2">
            مجموع خرید
          </h3>

          <p className="text-2xl text-yellow-500 font-bold">
            {totalSpent.toLocaleString()} تومان
          </p>

        </div>

      </div>

      <div className="w-full">

        <h1 className="text-2xl text-yellow-400 my-5 text-right">
          آخرین سفارش
        </h1>

        <div className="w-full">

          {lastOrder ? (

            <div className="w-full bg-zinc-900 rounded-2xl p-6">

              {lastOrder.items.map((item, index) => (

                <div
                  key={`${lastOrder._id}-${index}`}
                  className="flex justify-between items-center border-b border-zinc-700 mb-3 pb-3 last:border-none"
                ><div className="text-yellow-400 rtl flex gap-1">
                  <p>تومان</p>
                  <p >
                    {(item.product.price * item.quantity).toLocaleString()}
                  </p></div>



                  <div className="text-right">

                    <p>
                      {item.product.name}
                    </p>

                    <p>
                      {item.quantity} : تعداد
                    </p>

                  </div>

                  <img
                    src={item.product.img}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                </div>

              ))}

              <div className="text-right pt-5 flex justify-between">

                <p className="text-yellow-400 font-bold pt-5">
                  مجموع : {lastOrder.total.toLocaleString()}
                </p>

                <div>
                  <p>
                    {lastOrder.date} : تاریخ
                  </p>

                  <p>
                    {lastOrder.status}
                  </p>
                </div>

              </div>

            </div>

          ) : (

            <p className="text-gray-400">
              سفارشی ثبت نشده
            </p>

          )}

        </div>

      </div>

    </section>
  );
}

export default Profile;