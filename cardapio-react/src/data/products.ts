export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Burger",
    description: "Pão brioche, hambúrguer 160g, queijo prato e molho da casa.",
    price: 22.00,
    category: "Lanches",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/burger.png",
    alt: "Hambúrguer com queijo derretido em pão brioche e molho ao lado",
  },
  {
    id: 2,
    name: "Bacon Burger",
    description: "Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.",
    price: 25.00,
    category: "Lanches",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/burger-bacon.png",
    alt: "Hambúrguer com bacon crocante e queijo cheddar em pão brioche",
  },
  {
    id: 3,
    name: "Duplo Burguer",
    description: "Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.",
    price: 29.00,
    category: "Lanches",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/burger-double.png",
    alt: "Hambúrguer duplo com cheddar, bacon e cebola caramelizada",
  },
  {
    id: 4,
    name: "Batata Rústica",
    description: "Porção de batata com alecrim, parmesao e maionese verde.",
    price: 18.00,
    category: "Porções",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/batata-rustica.png",
    alt: "Porção de batatas rústicas douradas acompanhadas de molho verde",
  },
  {
    id: 5,
    name: "Batata Tradicional",
    description: "Porção de batata e maionese verde.",
    price: 15.00,
    category: "Porções",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/batata-tradicional.png",
    alt: "Porção de batata frita tradicional acompanhada de molho verde",
  },
  {
    id: 6,
    name: "Água Sem Gás",
    description: "Garrafa descartável de água sem gás com 500 ml.",
    price: 8.00,
    category: "Bebidas",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/agua.png",
    alt: "Garrafa descartável de água mineral sem gás de 500 ml",
  },
  {
    id: 7,
    name: "Refrigerante 300 ml",
    description: "Copo de refrigerante de 300 ml.",
    price: 10.00,
    category: "Bebidas",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/refri.png",
    alt: "Copo de refrigerante com gelo",
  },
  {
    id: 8,
    name: "Chopp 300 ml",
    description: "Caneca de 300 ml do nosso chopp pilsen geladíssimo.",
    price: 15.00,
    category: "Bebidas",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/chopp.png",
    alt: "Caneca de chopp pilsen gelado com colarinho de espuma",
  },
  {
    id: 9,
    name: "Petit Gateau",
    description: "Petit Gateau com uma bola de sorvete de creme.",
    price: 25.00,
    category: "Sobremesas",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/petit-gateau.png",
    alt: "Petit gateau de chocolate acompanhado de uma bola de sorvete de creme",
  },
  {
    id: 10,
    name: "Mousse de Maracujá",
    description: "Mousse de maracujá feito com a fruta de verdade.",
    price: 18.00,
    category: "Sobremesas",
    image: "https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/mousse-maracuja.png",
    alt: "Pote de mousse de maracujá com sementes da fruta por cima",
  },
];

export const categories = ["Todos", "Lanches", "Porções", "Bebidas", "Sobremesas"];
