import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  selectedCategory: string;
  onAddToCart?: (product: Product) => void;
}

export default function ProductList({
  products,
  selectedCategory,
  onAddToCart,
}: ProductListProps) {
  const filtered =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="grid grid-cols-3 gap-5 content-start">
      <header className="col-span-3 flex items-center justify-between py-2">
        <h2 className="text-xl">Produtos</h2>
        <div className="text-stone-500 text-sm">
          <p>{filtered.length} itens</p>
          <p>Categoria selecionada: {selectedCategory}</p>
        </div>
      </header>
      {filtered.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAddToCart}
        />
      ))}
    </section>
  );
}
