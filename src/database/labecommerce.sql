-- Active: 1706562869042@@127.0.0.1@3306
-- Criar tabela de usuários
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE, 
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);

-- Inserir dados na tabela de usuários
INSERT INTO users(id, name, email, password, created_at)
VALUES
('u001', 'Diana', 'diana@gmail.com', 'gatinha3', CURRENT_TIMESTAMP),
('u002', 'Apollo', 'apollo@outlook.com', 'popollo3', CURRENT_TIMESTAMP),
('u003', 'Bilie', 'bilie@hotmail.com', 'bililinho2', CURRENT_TIMESTAMP),
('u004', 'Eduardo', 'edu@gmail.com', 'alves123', CURRENT_TIMESTAMP),
('u005', 'Gabriela', 'gb@gmail.com', 'azeredo123', CURRENT_TIMESTAMP);

-- Exibir todos os usuários
SELECT * FROM users;

-- Criar tabela de produtos
CREATE TABLE products (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL, 
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

DROP TABLE products;

-- Inserir dados na tabela de produtos
INSERT INTO products(id, name, price, description, image_url)
VALUES
('p001', 'PS5', '3500.00', 'Vídeo game de última geração', 'https://images.pushsquare.com/3cc82f9c729cd/ps5-online-only.original.jpg'),
('p002', 'DualSense', '400.00', 'Controle para PS5/PC', 'https://live.staticflickr.com/65535/49747503557_fa12f113db_h.jpg'),
('p003', 'Game', '350.00', 'God of War Ragnarok', 'https://www.giantbomb.com/a/uploads/original/33/338034/3388962-1216435496-SZRc7.jpg');

-- Exibir todos os produtos
SELECT * FROM products;

-- Encontrar produtos que contenham 'PS5' no nome
SELECT * FROM products
WHERE name LIKE('%PS5%');

-- Atualizar informações do produto com ID '003'
UPDATE products
SET 
    name = 'Game', 
    price = '300', 
    description = 'Mortal Kombat 1', 
    image_url = 'https://www.giantbomb.com/a/uploads/original/33/338034/3388962-1216435496-SZRc7.jpg'
WHERE id = 'p003';

-- Criar tabela de compras
CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL, 
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (buyer) REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

-- Exibir todas as compras
SELECT * FROM purchases;

-- Excluir tabela de compras
DROP TABLE purchases;

-- Inserir dados na tabela de compras
INSERT INTO 
    purchases(id, buyer, total_price)
VALUES
    ('p001', 'u001', 3500.00), -- Pedido para Diana (u001 é o ID da Diana na tabela users)
    ('p002', 'u001', 400.00), -- Pedido para Diana (u001 é o ID da Diana na tabela users)
    ('p003', 'u002', 300.00), -- Pedido para Apollo (u002 é o ID do Apollo na tabela users)
    ('p004', 'u002', 300.00); -- Pedido para Apollo (u002 é o ID do Apollo na tabela users)

-- Exibir informações de compras com nomes de usuários
SELECT
    purchases.total_price,
    users.name
FROM
    purchases
    INNER JOIN users ON purchases.buyer = users.id;

-- Consulta para obter informações de uma compra específica
SELECT
    p.id AS Pedido,
    p.buyer AS user_id,
    u.name AS Usuario,
    u.email AS Email,
    p.total_price AS Valor_Total,
    p.created_at AS data_da_compra
FROM
    purchases p
    INNER JOIN users u ON u.id = p.buyer;

-- Criar tabela de relações entre compras e produtos
CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

-- Excluir tabela de relações entre compras e produtos
DROP TABLE purchases_products;

-- Inserir dados na tabela de relações entre compras e produtos
INSERT INTO purchases_products(purchase_id, product_id, quantity)
VALUES
    ('p001', 'p001', 1),
    ('p002', 'p002', 2);

-- Exibir dados da tabela de relações entre compras e produtos
SELECT * FROM purchases_products
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id
INNER JOIN products ON purchases_products.product_id = products.id;


-- Alterar ID do users de 'u001' para 'u010'
-- Alterar ID do usuário de 'u001' para 'u010'
UPDATE users
SET
    id = 'u010'
WHERE
    id = 'u001';

