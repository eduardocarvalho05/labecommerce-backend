import express, { Request, Response} from 'express';
import cors from 'cors';
import { products, users } from './database';
import { TProduct, TUser } from "./types";

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Teste Projeto - Pong!")
})

//getAllUsers
app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

//getAllProducts
app.get("/products", (req: Request, res: Response) =>{
    res.send(products)
})

//findProductByName
app.get("/products/search", (req: Request, res: Response) =>{
   const nameToFind = req.query.name as string
   const result: TProduct[] = products.filter((product) => {
    return product.name.toLocaleLowerCase().includes(nameToFind.toLocaleLowerCase())
   })
   res.send(result)
   if(result === undefined){
    res.send(products)
   }
})

//createUser
app.post("/users", (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const email = req.body.email as string
    const password = req.body.password as string

    const newUser: TUser = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    res.status(201).send("Cadastro realizado com sucesso!")
})

//CreateProduct
app.post("/products", (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const description = req.body.description as string
    const imageUrl = req.body.imageUrl as string

    const newProduct: TProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl,
    }

    products.push(newProduct)
    res.status(201).send("Cadastro realizado com sucesso!")
})