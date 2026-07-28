import Hero from "../componenets/home/Hero";
import Categories from "../componenets/home/Categories";
import ProductGrid from "../componenets/home/ProductGrid";
import type { Product } from "../componenets/home/ProductCard";


function Home(
{
 addToCart
}
:
{
 addToCart:(product:Product)=>void
}
){

return(
 <>
   <Hero />

   <Categories />

   <ProductGrid addToCart={addToCart}/>

 </>
)

}


export default Home;