import { useOutletContext } from "react-router-dom";
import type { Order } from "../hooks/useCart";

function Profile(){
    const { orders } = useOutletContext<{
    orders: Order[];
    }>();
    const totalSpent = orders.reduce(
  (sum, order) => sum + order.total,
  0
);

const lastOrder = orders[orders.length-1] ;

    return(

        <section className="flex flex-col w-full px-10 mb-5">
            <h1  className="text-3xl text-yellow-500 mt-10 py-5 border-b border-zinc-700 w-full text-right">پروفایل</h1>
            <div className=" flex flex-col text-right gap-3.5 my-5  border-b border-zinc-700 w-full pb-5">

                <div className="flex justify-between">
                    <span>امیرمهدی</span>
                    <span > : نام </span>
                </div>
                <div className="flex justify-between">
                    <span>زنجان - پونک </span>
                    <span> : آدرس</span>
                </div>
                <div className="flex justify-between">
                    <span>09103543572</span>
                    <span> : شماره تماس </span>
                </div>
                <div className="flex justify-between ">
                    <span>  amir515komak@gmail.com </span>
                    <span> : ایمیل </span>
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
                <h1 className="text-2xl text-yellow-400 my-5 text-right"> آخرین سفارش</h1>
                <div className="w-full">
                {
                    lastOrder ? (
                        <div  className=" w-full bg-zinc-900 rounded-2xl p-6  ">
                            {lastOrder.items.map((item)=>
                            <div key={item.product.id}  className="flex justify-between items-center border-b border-zinc-700 mb-3 pb-3 last:border-none">
                                <p className="text-yellow-400 rtl"> {(item.product.price * item.quantity).toLocaleString()} تومان</p>
                                <div className="text-right">
                                    <p>{item.product.name}</p>
                                    <p>{item.quantity}  : تعداد </p>
                                </div>
                                <img  src={item.product.img} alt={item.product.name} className="w-20 h-20 rounded-2xl object-cover" />

                            </div>

                            )}
                           <div className="text-right pt-5 flex  justify-between ">
                            <p className="text-yellow-400 font-bold pt-5  ">  مجموع : {lastOrder.total.toLocaleString()}</p>
                            <div>
                            <p>{lastOrder.date}تاریخ سفارش</p>
                            <p>  وضعیت  : {lastOrder.status}</p>
                            </div>

                            </div>

                        </div>

                    ) : (
                    <p>
                        سفارشی ثبت نشده
                    </p>
                    )
                }
                </div>
            </div>


        </section>




    )

}


export default Profile;