import ProductCard from "./ProductCard";
import {products} from '../../data/products';
import type { Product } from "./ProductCard";
function ProductGrid({ addToCart , search}: { addToCart: (product: Product) => void ; search:string; }){
        const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
        );
    return(
        <section className="grid grid-cols-4 gap-3 px-10">
        {filteredProducts.map((product) => (
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