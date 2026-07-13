import ProductCard from "./ProductCard";
import {products} from '../../data/products';
import type { Product } from "./ProductCard";
function ProductGrid({ addToCart }: { addToCart: (product: Product) => void }){
    return(
        <section className="grid grid-cols-4 gap-3 px-10">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
                />
         ))}
        </section>

    );
}

export default ProductGrid;