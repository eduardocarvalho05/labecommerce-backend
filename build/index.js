"use strict";
// console.log("Oi mundo!")
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
console.log(database_1.users, database_1.products);
console.log((0, database_1.criarProduto)("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "https://images.unsplash.com/photo"));
console.log((0, database_1.obterTodosProdutos)());
console.log((0, database_1.procurarProdutoPeloNome)(database_1.products, "gamer"));
console.log((0, database_1.buscarProdutosPeloNome2)("gamer"));
