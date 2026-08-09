import { products } from "../data/products";
import { useState ,useEffect } from "react";
import type { Product } from "../componenets/home/ProductCard";



function AdminProducts (){
    const [productList, setProductList] = useState<Product[]>(() => {
  const savedProducts = localStorage.getItem("product");

  if (savedProducts !== null) {
    return JSON.parse(savedProducts);
  }

  return products;
});

        function deleteProduct (id:number){
    setProductList ((prev)=>
      prev.filter((product)=>product.id !== id

     ));

}
useEffect(()=>{
    localStorage.setItem("product",JSON.stringify(productList));
},[productList])

    return(
        <section className="p-10">
            <h1 className="text-right text-3xl text-yellow-400 pb-10 mb-5 border-b border-zinc-600">محصولات</h1>
           <div className="grid grid-cols-3 gap-5">
            {productList.map((product) => (
            <div className=" flex flex-col items-end gap-3 bg-zinc-900 rounded-2xl p-4 border border-zinc-800"
            key={product.id}>
                <img className="w-full h-48 object-cover rounded-xl"
                src={product.img}
                alt={product.name} />
                <h3 className="text-yellow-500 font-bold">{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.price.toLocaleString()} تومان</p>
                <p className="text-zinc-500">{product.desc}</p>
                <button className="w-full bg-red-800 rounded-2xl p-2" onClick={()=> deleteProduct(product.id)}>حذف محصول</button>
            </div>
            ))} </div>
        </section>
    )
}


export default AdminProducts;