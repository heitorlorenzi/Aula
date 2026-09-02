# Respostas da Atividade de Fixação - Cardápio Digital

### 1. Por que cada produto foi marcado como `<article>` e não como `<div>`? Que teste podemos aplicar para decidir entre as duas tags?
**Resposta:** O elemento `<article>` representa um bloco de conteúdo independente, auto-contido e que faz sentido por si só, mesmo se isolado do restante da página (contendo imagem, título, descrição, preço e ação). A tag `<div>` é um contêiner puramente genérico, sem qualquer valor semântico, usado apenas para agrupamento e estilização. O teste prático para decidir é: *"Se este bloco fosse retirado da página e colocado sozinho em outro contexto (como um card compartilhado em redes sociais ou feed RSS), ele ainda faria sentido completo?"* Como a resposta é sim, o `<article>` é a escolha correta.

---

### 2. A página tem dois elementos `<header>`. Isso é um erro? Justifique explicando a diferença entre eles.
**Resposta:** Não é um erro. Na especificação do HTML5, `<header>` não é exclusivo do documento inteiro; ele representa a área introdutória ou cabeçalho de qualquer seção de conteúdo (`<section>`, `<article>`, ou `<body>`). 
Na página, temos:
1. O `body > header`: é o cabeçalho global da aplicação, contendo a marca (`brand`), o título principal da lanchonete e o botão do carrinho.
2. O `main > section > header`: é o cabeçalho local da seção de produtos, contendo o título da seção (`<h2>Produtos</h2>`) e metadados de listagem (quantidade de itens e filtro ativo).

---

### 3. Qual a diferença prática entre `<head>` e `<header>`?
**Resposta:**
- `<head>`: fica fora do `<body>`, não é renderizado visualmente na tela e armazena metadados essenciais sobre o documento para navegadores e mecanismos de busca (ex.: `<meta charset="UTF-8">`, `<meta name="viewport">`, `<title>`, `<link rel="stylesheet">`, importações de fontes).
- `<header>`: fica dentro do `<body>`, é um elemento visual e semântico visível ao usuário, usado para agrupar logotipos, títulos, navegações e ações no topo de uma página ou seção.

---

### 4. Explique a diferença entre `alt=""` (vazio) e a ausência total do atributo `alt`. Em que situação cada um se aplica?
**Resposta:**
- `alt=""` (texto alternativo nulo/vazio): informa expressamente às tecnologias assistivas (leitores de tela) que a imagem é puramente decorativa ou redundante em relação ao texto adjacente, fazendo com que o leitor de tela a ignore silenciosamente sem poluir a leitura do usuário com informações duplicadas (ex.: o ícone do carrinho no painel de carrinho vazio).
- **Ausência total do atributo `alt`**: é um erro de validação e grave falha de acessibilidade. Quando o atributo é omitido, o leitor de tela é forçado a tentar ler o nome do arquivo ou o caminho da imagem (ex.: `assets/img/cart.svg`), prejudicando gravemente a experiência do usuário com deficiência visual.
- **`alt="descrição"`**: deve ser usado sempre que a imagem transmite uma informação única que não está expressa em texto (como as fotos dos pratos do cardápio).

---

### 5. A página tem dez `<h3>`, dois `<h2>` e um `<h1>`. Explique por que essa hierarquia importa mesmo antes de existir qualquer CSS.
**Resposta:** A hierarquia de cabeçalhos (`<h1>` até `<h6>`) constrói o sumário lógico do documento. Leitores de tela e robôs de busca (SEO) navegam através dessa árvore hierárquica para entender a relação entre os blocos de conteúdo:
- `<h1>`: Título principal único do documento ("Cardápio Digital").
- `<h2>`: Títulos das divisões principais ("Produtos" e "Seu pedido").
- `<h3>`: Título de cada unidade de produto dentro da seção de produtos ("Burger", "Bacon Burger", etc.).
Essa ordem estabelece a arquitetura da informação independente de estilos visuais (o tamanho e cor da fonte são definidos pelo CSS, não pela hierarquia da tag).

---

### 6. O que aconteceria se removêssemos a linha `<meta charset="UTF-8">`? Teste, observe e descreva o resultado.
**Resposta:** O navegador deixaria de saber de antemão qual codificação utilizar e poderia adotar a codificação padrão do sistema operacional (como ISO-8859-1 ou Windows-1252), provocando problemas de *mojibake* (caracteres especiais, acentos como "Cardápio", "Porções", "Água Sem Gás", "R$ 22,00" corrompidos com símbolos estranhos como , Ã¡, etc.).

---

### 7. Décimo primeiro produto adicionado como exemplo:
Se for adicionado um item extra à seção:
```html
<article>
  <figure>
    <img src="./assets/img/burger-cheddar.png"
         alt="Hambúrguer com cheddar cremoso e cebola crispy no pão australiano">
    <figcaption>Lanches</figcaption>
  </figure>
  <h3>Cheddar Melt</h3>
  <p>Pão australiano, hambúrguer 160g, cheddar cremoso e cebola crispy.</p>
  <p><strong>R$ 27,00</strong></p>
  <button type="button">Adicionar</button>
</article>
```
*(Ao adicionar, o contador do cabeçalho da seção é atualizado para `11 itens`).*
