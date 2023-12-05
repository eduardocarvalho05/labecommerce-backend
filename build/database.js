"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.users = void 0;
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
