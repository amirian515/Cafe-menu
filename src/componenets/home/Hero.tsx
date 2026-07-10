function Hero(){
    return(
        <section className=" bg-black">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
            <div className="w-1/2"><h1 className="text-4xl font-bold">تجربه ای لوکس از طعم و آرامش
                </h1>
                <p className="text-gray-400 mt-4">به کافه لوکس خوش آمدید؛ جایی که هر طعم یک خاطره می‌سازد</p>
                <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-2xl mt-6">سفارش را شروع کنید</button></div>
                    <div className="w-1/2">
                      <img
                         src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                         alt="استیک با سبزیجات"
                         className="rounded-2xl w-full hv-[400px] object-cover"/>
                    </div>
            </div>
            </section>
    );
}
export default Hero;