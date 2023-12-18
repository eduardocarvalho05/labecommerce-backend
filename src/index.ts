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

//DeleteUser
app.delete("/users/:id", (req: Request, res: Response) => {
    const idParaExcluir = req.params.id.toLowerCase();

    const index: number = users.findIndex((usuario) => usuario.id.toLowerCase() === idParaExcluir);

    if (index >= 0) {
        users.splice(index, 1);
        res.send("Usúario apagado com sucesso!");
    } else {
        res.status(404).send("Usúario não encontrada");
    }
})

//DeleteProducts
app.delete("/products/:id", (req: Request, res: Response) => {
    const idParaExcluir = req.params.id.toLowerCase()

    const index: number = products.findIndex((produto) => produto.id.toLowerCase() === 
    idParaExcluir)

    if(index >= 0){
        products.splice(index, 1);
        res.send("Produto apagado com sucesso!")
    } else {
        res.status(404).send("Produto não encontrado!")
    }
})

//Edit Product by id
app.put("/products/:id", (req: Request, res: Response) => {
    const idToEdit = req.params.id;

    // Certifique-se de que o tipo TProduct esteja corretamente definido
    const { id: newId, name: newName, price: newPrice, description: newDescription, imageUrl: newImageUrl } = req.body as TProduct;

    // Verifique se o produto com o ID especificado existe
    const result = products.find((produto) => produto.id === idToEdit);

    if (result) {
        console.log("Dados antes da atualização:", result);

        // Valide os dados recebidos ou forneça valores padrão, se necessário
        result.id = newId || result.id;
        result.name = newName || result.name;
        result.price = newPrice || result.price;
        result.description = newDescription || result.description;
        result.imageUrl = newImageUrl || result.imageUrl;

        console.log("Dados após a atualização:", result);

        // Use um código de status HTTP mais apropriado
        res.status(200).send("Atualização realizada com sucesso!");
    } else {
        // Use um código de status HTTP mais apropriado
        res.status(404).send("Produto não encontrado");
    }
});
