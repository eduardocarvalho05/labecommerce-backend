// console.log("Oi mundo!")

import { products, users, criarUsuario, criarProduto, obterTodosUsuarios, obterTodosProdutos, procurarProdutoPeloNome, buscarProdutosPeloNome2 } from "./database";

console.log(users, products);
console.log(criarProduto("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "https://images.unsplash.com/photo"));
console.log(obterTodosProdutos());

console.log(procurarProdutoPeloNome(products, "gamer"));
console.log(buscarProdutosPeloNome2("gamer"));
