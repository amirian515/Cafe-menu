const categories = [
  { name: "قهوه", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=200&q=80" },
  { name: "صبحانه", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=200&q=80" },
  { name: "غذای اصلی", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80" },
  { name: "فست فود", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80" },
  { name: "دسرها", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=200&q=80" },
  { name: "نوشیدنی سرد", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=200&q=80" },
  { name: "نوشیدنی گرم", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=200&q=80" },
  { name: "سالادها", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80" },
];
function Categories(){
    return(
        <section className="max-w-7xl mx-auto px-8 py-10">
            <div className="grid grid-cols-4 gap-4">
                {categories.map((cat)=>(
                    <div
                        key={cat.name}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl py-5 flex flex-col items-center gap-2">
                        <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-22 h-22 rounded-full object-cover"
                        />
                         <span className="text-sm text-gray-300">{cat.name}</span>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;