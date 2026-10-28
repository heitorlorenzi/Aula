export default function Cart() {
  return (
    <aside
      className="self-start overflow-hidden border border-stone-200 rounded-[0.8rem] bg-white shadow-lg"
      aria-label="Resumo do pedido"
    >
      <h2 className="p-4 text-base">Seu pedido</h2>
      <div className="text-center py-8 px-4 border-t border-stone-200">
        <img
          src="https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/cart.svg"
          alt=""
          className="mx-auto w-8 h-8 opacity-50"
        />
        <p className="font-semibold text-sm text-stone-900 mt-2.5">
          Seu carrinho está vazio
        </p>
        <p className="text-xs mt-1 text-stone-500">
          Escolha um item do cardápio para começar
        </p>
      </div>
    </aside>
  );
}
