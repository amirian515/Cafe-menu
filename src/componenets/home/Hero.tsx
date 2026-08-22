import MainImg from "../../assests/images/Hero/MainImg.jpg"


function Hero(){
    return(
        <section className=" bg-black">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center  gap-2 md:gap-4 mt-2 text-center">
            <div className="w-1/2"><h1 className="md:text-4xl font-bold text-right">تجربه ای لوکس از طعم و آرامش
                </h1>
                <p className="text-gray-400 mt-4 text-sm md:text-base text-right ">به کافه لوکس خوش آمدید؛ جایی که هر طعم یک خاطره می‌سازد</p>
                <button className="bg-yellow-500 text-black font-bold md:px-6 md:py-3 px-3 py-2 rounded-2xl mt-6  text-sm md:text-base ">سفارش را شروع کنید</button></div>
                    <div className="w-1/2">
                      <img
                         src= {MainImg}
                         alt="استیک با سبزیجات"
                         className="rounded-2xl w-full hv-[400px] object-cover"/>
                    </div>
            </div>
            </section>
    );
}
export default Hero;