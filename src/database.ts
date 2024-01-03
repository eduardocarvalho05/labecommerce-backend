import { TProduct, TUser } from "./types";

export const users: TUser[] = [
  {
    id: "u001",
    name: "Eduardo Carvalho",
    email: "eduardo@outlook.com",
    password: "E123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "u002",
    name: "Gabriela",
    email: "Gabriela@gmail.com",
    password: "G123",
    createdAt: new Date().toISOString(),
  },
];


export const products: TProduct[] = [
    {
      id: "prod001",
      name: "Monitor gamer",
      price: 800,
      description: "Monitor gamer de alta qualidade para jogos!",
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


export function createUser(id: string, name: string, email: string, password: string): string {
    const newUser: TUser = {
        id,
        name,
        email,
        password,
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    return "Cadastro realizado com sucesso!";
}

export function createProduct(id: string, name: string, price: number, description: string, imageUrl: string): string {
    const newProduct: TProduct = {
        id,
        name,
        price,
        description,
        imageUrl,
    };

    products.push(newProduct);
    return "Produto criado com sucesso!";
}

export function getAllUsers(): TUser[] {
    return users;
}

export function getAllProducts(): TProduct[] {
    return products;
}

export function searchProducts(produtos: TProduct[], nome: string): TProduct[] {
    const termoBusca = nome.toLowerCase();
    const resultados = produtos.filter((produto: TProduct) => {
        return produto.name.toLowerCase().includes(termoBusca);
    });

    return resultados;
}

export function findProductByname(nome: string): TProduct[] {
    return products.filter((produto: TProduct) => {
        return produto.name.toLowerCase().includes(nome.toLowerCase());
    });
}
