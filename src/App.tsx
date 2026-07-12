import Navbar from "./componenets/layout/Navbar";
import Hero from"./componenets/home/Hero";
import Categories from "./componenets/home/categories";
import ProductGrid from "./componenets/home/ProductGrid";
import FooterLayout from "./componenets/layout/FooterLayout";



function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar />

      <main className="flex-1">
       <Hero />
       <Categories />
       <ProductGrid />
      </main>

      <footer className="h-20 border-t border-zinc-800 flex items-center justify-center">
        <FooterLayout />
      </footer>

    </div>
  );
}

export default App;