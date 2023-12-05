import { TProduct, TUser} from "./types"

export const users: TUser[] = [
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
  
  
  export const products: TProduct[] = [
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