# Cardápio Digital - React + Vite + TypeScript + Tailwind

Projeto migrado da Unidade 1 (HTML/CSS puro) para React, seguindo a estrutura da Aula 2.2.

## Como rodar

```bash
cd cardapio-react
npm install
npm run dev
```

Abra o endereço mostrado (normalmente http://localhost:5173).

## Estrutura dos componentes

- `src/components/Header.tsx` — Cabeçalho com logo e carrinho
- `src/components/Nav.tsx` — Navegação por categorias (filtro)
- `src/components/ProductList.tsx` — Listagem de produtos
- `src/components/ProductCard.tsx` — Card individual de produto
- `src/components/Cart.tsx` — Resumo do pedido (estado vazio)
- `src/components/Footer.tsx` — Rodapé
- `src/data/products.ts` — Dados dos produtos (extraídos do HTML original)

As imagens são carregadas diretamente do repositório original via raw.githubusercontent.com.

Categoria ativa é controlada com `useState` (equivalente ao JS da Unidade 1).
