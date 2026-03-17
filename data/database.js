// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos relacionados no cardápio.
let categorias = [
    { id: 1, nome: 'Clássicos & Taças'},
    { id: 2, nome: 'Bebidas & Cafés'}
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    {
        categoriaId: 1,
        nome: "1 Bola na Casquinha",
        descricao: "Sabores tradicionais: Chocolate, Creme, Morango ou Flocos. Casquinha crocante.",
        preco: 8.00,
        imagem: "https://static.expressodelivery.com.br/imagens/produtos/200360/180/Expresso-Delivery_3bb1c834b6dab406726bca674e2f485a.jpg"
    },
    {
        categoriaId: 1,
        nome: "Taça Sundae Duplo",
        descricao: "2 bolas de sorvete à escolha, calda de chocolate quente, chantilly, farofa de amendoim e cereja.",
        preco: 25.00,
        imagem: "https://img.freepik.com/fotos-premium/saboroso-sundae-de-chocolate-isolado-em-fundo-desfocado_787273-62831.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        categoriaId: 1,
        nome: "Milkshake Especial",
        descricao: "500ml batido com sorvete artesanal. Sabores: Ovomaltine, Nutella ou Frutas Vermelhas.",
        preco: 22.00,
        imagem: "https://digital.faap.br/hubfs/milk%20shake.jpg"
    },
    {
        categoriaId: 1,
        nome: "Banana Split Tradicional",
        descricao: "3 bolas de sorvete (chocolate, creme, morango), banana fresca, mix de caldas e chantilly.",
        preco: 32.00,
        imagem: "https://cdn7.kiwilimon.com/brightcove/10625/640x640/10625.jpg.webp"
    },
    
    {
        categoriaId: 2,
        nome: "Água Mineral",
        descricao: "Garrafa 500 ml (com ou sem gás)",
        preco: 4.00,
        imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/2893-agua-mineral-crystal-sem-gas-500ml.jpg"
    },
    {
        categoriaId: 2,
        nome: "Refrigerantes",
        descricao: "Lata (Coca-cola, Guaraná, Soda)",
        preco: 6.00,
        imagem: "https://imagens.jotaja.com/produtos/78565ea2-23ac-4ef5-91a9-25565ccedda4.jpg"
    },
    {
        categoriaId: 2,
        nome: "Café Expresso",
        descricao: "Lata 350ml",
        preco: 5.50,
        imagem: "https://villacafe.com.br/blog/wp-content/uploads/2016/03/villa-cafe-gourmet-para-site.jpg"
    }

]

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };