"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = exports.buscarProdutosPeloNome2 = exports.procurarProdutoPeloNome = exports.obterTodosProdutos = exports.obterTodosUsuarios = exports.criarProduto = exports.criarUsuario = void 0;
function criarUsuario(id, nome, email, senha) {
    const novoUsuario = {
        id,
        nome,
        email,
        senha,
        criadoEm: new Date().toISOString()
    };
    exports.users.push(novoUsuario);
    return "Cadastro realizado com sucesso!";
}
exports.criarUsuario = criarUsuario;
function criarProduto(id, nome, preco, descricao, imageUrl) {
    const novoProduto = {
        id,
        nome,
        preco,
        descricao,
        imageUrl
    };
    exports.products.push(novoProduto);
    return "Produto criado com sucesso!";
}
exports.criarProduto = criarProduto;
function obterTodosUsuarios() {
    return exports.users;
}
exports.obterTodosUsuarios = obterTodosUsuarios;
function obterTodosProdutos() {
    return exports.products;
}
exports.obterTodosProdutos = obterTodosProdutos;
function procurarProdutoPeloNome(produtos, nome) {
    const termoBusca = nome.toLowerCase();
    const resultados = produtos.filter((produto) => {
        return produto.nome.toLowerCase().includes(termoBusca);
    });
    return resultados;
}
exports.procurarProdutoPeloNome = procurarProdutoPeloNome;
function buscarProdutosPeloNome2(nome) {
    return exports.products.filter((produto) => {
        return produto.nome.toLowerCase().includes(nome.toLowerCase());
    });
}
exports.buscarProdutosPeloNome2 = buscarProdutosPeloNome2;
exports.users = [
    {
        id: "u001",
        nome: "Eduardo Carvalho",
        email: "eduardo@outlook.com",
        senha: "edu123",
        criadoEm: new Date().toISOString(),
    },
    {
        id: "u002",
        nome: "Gabriela",
        email: "Gabriela@email.com",
        senha: "G123",
        criadoEm: new Date().toISOString(),
    },
];
exports.products = [
    {
        id: "prod001",
        nome: "Mouse gamer",
        preco: 800,
        descricao: "Monitor gamer!",
        imageUrl: "https://www.techtoyreviews.com/wp-content/uploads/2021/02/Acer-Nitro-VG240Y.jpg",
    },
    {
        id: "prod002",
        nome: "PS5",
        preco: 3000,
        descricao: "Melhor video game do mercado!",
        imageUrl: "https://www.impulsegamer.com/articles/wp-content/uploads/2020/11/ps5conole.jpg",
    },
];
