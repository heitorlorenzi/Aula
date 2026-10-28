interface NavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ["Todos", "Lanches", "Porções", "Bebidas", "Sobremesas"];

export default function Nav({ activeCategory, onCategoryChange }: NavProps) {
  return (
    <nav className="w-full border-b border-stone-200 bg-white">
      <ul className="max-w-[1200px] mx-auto flex gap-2 py-4 px-4 list-none">
        {categories.map((cat) => (
          <li key={cat}>
            <a
              href={`#${cat.toLowerCase()}`}
              className={`inline-block px-4 py-2 border rounded-full text-sm font-medium text-center no-underline ${
                activeCategory === cat
                  ? "border-orange-600 text-white bg-orange-600"
                  : "border-stone-200 text-stone-500 bg-white hover:border-orange-600 hover:text-orange-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                onCategoryChange(cat);
              }}
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
