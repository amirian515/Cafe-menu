import ProductCard from "./ProductCard";
import {products} from '../../data/products';
function ProductGrid(){
    return(
        <section className="grid grid-cols-4 gap-3 px-10">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
                />
         ))}
        </section>

    );
}

export default ProductGrid;