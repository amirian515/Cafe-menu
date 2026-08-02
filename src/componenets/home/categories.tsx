import Coffe from "../../assests/images/Category/Coffe.jpg"
import HotDrink from "../../assests/images/Category/HotDrink.jpg"
import ColdDrink from "../../assests/images/Category/ColdDrink.jpg"
import FastFood from "../../assests/images/Category/FastFood.jpg"
import MainFood from "../../assests/images/Category/MainFood.jpeg"
import BreakFast from "../../assests/images/Category/BreakFast.jpg"
import Appetizer from "../../assests/images/Category/Appetizer.jpg"
import Salad from "../../assests/images/Category/Salad.jpg"




const categories = [
  { name: "قهوه", img: Coffe },
  { name: "صبحانه", img: BreakFast },
  { name: "غذای اصلی", img: MainFood },
  { name: "فست فود", img: FastFood },
  { name: "دسرها", img: Appetizer },
  { name: "نوشیدنی سرد", img: ColdDrink },
  { name: "نوشیدنی گرم", img: HotDrink },
  { name: "سالادها", img: Salad },
];
function Categories(
    {  setCategory , selectedCategory
}:{
    setCategory:(category:string)=>void;
    selectedCategory:string;
}){
    console.log("selectedCategory:", selectedCategory);
    return(
        <section className="max-w-7xl mx-auto px-8 py-10">
            <div className="grid grid-cols-4 gap-4">
                {categories.map((cat)=>(
                    <div
                        key={cat.name}
                        onClick={()=>setCategory(cat.name)}
                        className={ `border rounded-2xl py-5 flex flex-col items-center gap-2 cursor-pointer  transition-all duration-300
                            ${cat.name === selectedCategory
                            ? "border-yellow-500 shadow-lg scale-105 bg-zinc-950"
                            : " bg-zinc-900 border-zinc-900 "}`}
                        >
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