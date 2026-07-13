import Navbar from "./componenets/layout/Navbar";
import Hero from"./componenets/home/Hero";
import Categories from "./componenets/home/Categories";
import ProductGrid from "./componenets/home/ProductGrid";
import Footer from "./componenets/layout/Footer";



function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

    <Navbar />

      <main className="flex-1">
       <Hero />
       <Categories />
       <ProductGrid />
      </main>

      <footer >
        <Footer  />
      </footer>

    </div>
  );
}

export default App;