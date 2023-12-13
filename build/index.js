"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req, res) => {
    res.send("Teste Projeto - Pong!");
});
//getAllUsers
app.get("/users", (req, res) => {
    res.send(database_1.users);
});
//getAllProducts
app.get("/product", (req, res) => {
    res.send(database_1.products);
});
//findProductByName
app.get("/product", (req, res) => {
    const nameToFind = req.query.name;
    const result = database_1.products.filter((product) => {
        return product.name.toLocaleLowerCase().includes(nameToFind.toLocaleLowerCase());
    });
    res.send(result);
    if (result === undefined) {
        res.send(database_1.products);
    }
});
//createUser
app.post("/users", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
    };
    database_1.users.push(newUser);
    res.status(201).send("Cadastro realizado com sucesso!");
});
//CreateProduct
app.post("/products", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl,
    };
    database_1.products.push(newProduct);
    res.status(201).send("Cadastro realizado com sucesso!");
});
