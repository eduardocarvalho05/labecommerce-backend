"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductByname = exports.searchProducts = exports.getAllProducts = exports.getAllUsers = exports.createProduct = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "u001",
        name: "Eduardo Carvalho",
        email: "eduardo@outlook.com",
        password: "edu123",
        createdAt: new Date().toISOString(),
    },
    {
        id: "u002",
        name: "Gabriela",
        email: "Gabriela@email.com",
        password: "G123",
        createdAt: new Date().toISOString(),
    },
];
exports.products = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 800,
        description: "Monitor gamer!",
        imageUrl: "https://www.techtoyreviews.com/wp-content/uploads/2021/02/Acer-Nitro-VG240Y.jpg",
    },
    {
        id: "prod002",
        name: "PS5",
        price: 3000,
        description: "Melhor video game do mercado!",
        imageUrl: "https://www.impulsegamer.com/articles/wp-content/uploads/2020/11/ps5conole.jpg",
    },
];
function createUser(id, name, email, password) {
    const newUser = {
        id,
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
    };
    exports.users.push(newUser);
    return "Cadastro realizado com sucesso!";
}
exports.createUser = createUser;
function createProduct(id, name, price, description, imageUrl) {
    const novoProduto = {
        id,
        name,
        price,
        description,
        imageUrl
    };
    exports.products.push(novoProduto);
    return "Produto criado com sucesso!";
}
exports.createProduct = createProduct;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function searchProducts(produtos, nome) {
    const termoBusca = nome.toLowerCase();
    const resultados = produtos.filter((produto) => {
        return produto.name.toLowerCase().includes(termoBusca);
    });
    return resultados;
}
exports.searchProducts = searchProducts;
function findProductByname(nome) {
    return exports.products.filter((produto) => {
        return produto.name.toLowerCase().includes(nome.toLowerCase());
    });
}
exports.findProductByname = findProductByname;
