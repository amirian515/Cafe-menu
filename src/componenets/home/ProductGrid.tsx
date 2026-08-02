import ProductCard from "./ProductCard";
import type { Product } from "./ProductCard";
function ProductGrid({ addToCart , products}: { addToCart: (product: Product) => void ; products:Product[]; }){

    return(
        <section className="grid grid-cols-4 gap-3 px-10">
                    { products.length === 0 ? (

                <div className="text-center text-white col-span-4 flex flex-col items-center justify-center  mb-50 mt-20">
                <h2 className="text-2xl font-bold">
                    😕 محصولی پیدا نشد
                </h2>

                <p className="text-gray-400 mt-2">
                    لطفاً عبارت دیگری را جستجو کنید
                </p>
                </div>

            ) : (
        products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
                />
         ))
         )}
        </section>

    );
}

export default ProductGrid;