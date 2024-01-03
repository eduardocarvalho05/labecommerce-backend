![Alt text](./public/image.png)

# Labecommerce - Backend

Este é o backend para o LabEcommerce, uma aplicação de comércio eletrônico.

## Descrição

O LabEcommerce (**_Back End_**) é uma plataforma de comércio eletrônico onde os usuários podem gerenciar produtos e realizar compras. Este backend fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em usuários e produtos.

## Documentação:
- **Postman**
- **https://documenter.getpostman.com/view/30063951/2s9YsFFErw**

## Endpoints

## Usuários

#### Listar Todos os Usuários

- **Endpoint:** 
- **Método:** **_GET_**
```
/users
```
- **Descrição:** Retorna a lista de todos os usuários cadastrados.

#### Criar Novo Usuário

- **Endpoint:** 
- **Método:** **_POST_**
```
/users
```
- **Descrição:** Cria um novo usuário com base nos dados fornecidos.

#### Atualizar Usuário

- **Endpoint:**
- **Método:** **_PUT_**
```
/users
```
- **Descrição:** Atualiza as informações do usuário correspondente ao ID fornecido.

#### Remover Usuário

- **Endpoint:**
- **Método:** **_DELETE_**
```
/users/:id
```
- **Descrição:** Remove o usuário correspondente ao ID fornecido.


## Produtos

#### Listar Todos os Produtos

- **Endpoint:** 
- **Método:** **_GET_**
```
/products
```
- **Descrição:** Retorna a lista de todos os produtos cadastrados.

#### Criar Novo Produto

- **Endpoint:** 
- **Método:** **_POST_**
```
/products
```
- **Descrição:** Cria um novo produto com base nos dados fornecidos.

#### Atualizar Produto

- **Endpoint:** 
- **Método:** **_PUT_**
```
/products/:id
```
- **Descrição:** Atualiza as informações do produto correspondente ao ID fornecido.

#### Remover Produto

- **Endpoint:** 
- **Método:** **_DELETE_**
```
/products/:id
```
- **Descrição:** Remove o produto correspondente ao ID fornecido.

## Configuração

Para executar este projeto localmente, siga as etapas:

#### Este projeto utiliza o Node.js ter ele instalado na sua maquina se faz necessario
 - [Node.js](https://nodejs.org) ◀️ Instale clicando neste link

1. Clone este repositório.
```
https://github.com/eduardocarvalho05/labecommerce-backend
```
2. Instale as dependências usando :
```
npm install
```
Ou 

```
yarn install
```

3. Configure as variáveis de ambiente, se necessário.
4. Execute o servidor usando:
```
npm run start
```
Ou 

```
yarn start
```
5. Após isso entre no **_Postman_** ou **_Insomnia_** acessando a BASE_URL: 
```
http://localhost:3003/
```

Certifique-se de ter um ambiente Node.js configurado para que voce consiga rodar corretamente o projeto em sua maquina.

## Tecnologias Utilizadas


- [Node.JS](https://nodejs.org)
- [SQLite](https://www.sqlite.org/index.html)
- [Typescript](https://typescriptlang.org)
- [Express.js](https://expressjs.com/pt-br/)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Autor

* [Eduardo Alves de Carvalho](e.alves.rj@outlook.com)

