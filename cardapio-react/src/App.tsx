import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { products } from "./data/products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_1fr_auto] bg-stone-50 text-stone-900 font-sans">
      <Header />
      <Nav
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="max-w-[1200px] mx-auto w-full px-4 grid grid-cols-[minmax(0,1fr)_330px] gap-6 py-6">
        <ProductList
          products={products}
          selectedCategory={selectedCategory}
        />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
