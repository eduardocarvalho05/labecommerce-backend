import { TProduct, TUser } from "./types";

export function criarUsuario(id: string, nome: string, email: string, senha: string): string {
  const novoUsuario: TUser = {
    id, 
    nome,
    email,
    senha,
    criadoEm: new Date().toISOString()
  }

  users.push(novoUsuario);

  return "Cadastro realizado com sucesso!";
}

export function criarProduto(id: string, nome: string, preco: number, descricao: string, imageUrl: string): string {
  const novoProduto: TProduct = {
    id, 
    nome, 
    preco,
    descricao, 
    imageUrl
  }

  products.push(novoProduto);

  return "Produto criado com sucesso!"
}

export function obterTodosUsuarios(): TUser[] {
  return users;
}

export function obterTodosProdutos(): TProduct[] {
  return products;
}

export function procurarProdutoPeloNome(produtos: TProduct[], nome: string): TProduct[] {
  const termoBusca = nome.toLowerCase();
  const resultados = produtos.filter((produto: TProduct) => {
    return produto.nome.toLowerCase().includes(termoBusca);
  });

  return resultados;
}

export function buscarProdutosPeloNome2(nome: string): TProduct[] {
  return products.filter((produto: TProduct) => {
    return produto.nome.toLowerCase().includes(nome.toLowerCase());
  });
}


export const users: TUser[] = [
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


export const products: TProduct[] = [
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