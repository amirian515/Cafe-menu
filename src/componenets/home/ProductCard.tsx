 export type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
  category: string;
};

function ProductCard({ product ,addToCart }: { product: Product ; addToCart: (product: Product) => void }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-sm text-gray-400 flex-1">{product.desc}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 font-bold">
            {product.price.toLocaleString()} تومان
          </span>

          <button onClick={() => addToCart(product)} className="bg-yellow-500 text-black text-sm font-bold px-4 py-2 rounded-xl">
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;