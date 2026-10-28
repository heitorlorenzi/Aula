import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="grid grid-cols-[1fr_auto] overflow-hidden border border-stone-200 rounded-2xl bg-white shadow-sm">
      <figure className="relative col-span-2 aspect-[16/10]">
        <img
          src={product.image}
          alt={product.alt}
          className="block w-full h-full object-cover"
        />
        <figcaption className="absolute top-2.5 right-2.5 bg-orange-600 text-white text-xs lowercase px-2 py-1 rounded-lg">
          {product.category}
        </figcaption>
      </figure>
      <h3 className="col-span-2 font-semibold leading-tight text-base pt-4 px-4">
        {product.name}
      </h3>
      <p className="col-span-2 pt-2 px-4 text-stone-500 text-sm leading-snug">
        {product.description}
      </p>
      <p className="col-span-1 self-center py-4 px-4 text-orange-600 text-xl font-extrabold">
        R$ {product.price.toFixed(2).replace(".", ",")}
      </p>
      <button
        type="button"
        className="col-span-1 self-center mr-4 border-0 rounded-[10px] px-4 py-2 text-white bg-orange-600 font-bold cursor-pointer"
        onClick={() => onAdd?.(product)}
      >
        Adicionar
      </button>
    </article>
  );
}
