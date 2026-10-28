interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between gap-4 py-4 border-b border-stone-100">
        <div className="flex items-center gap-3">
          <img
            src="https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/logo_lanchonete.svg"
            alt="Logotipo da lanchonete"
            className="h-12"
          />
          <div>
            <h1 className="font-poppins text-2xl font-bold leading-tight tracking-tight">
              Cardápio Digital
            </h1>
            <p className="mt-0.5 text-stone-500 text-sm">
              Faça seu pedido pelo nosso cardápio digital
            </p>
          </div>
        </div>
        <div className="flex w-11 h-11 border border-stone-200 rounded-xl bg-white items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/heitorlorenzi/Aula/main/cardapio-digital/assets/img/cart.svg"
            alt="Carrinho de compras"
            className="w-5 h-5"
          />
        </div>
      </div>
    </header>
  );
}
