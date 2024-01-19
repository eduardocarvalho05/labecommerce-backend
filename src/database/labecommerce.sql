-- Active: 1705177004502@@127.0.0.1@3306


CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE, 
    password TEXT NOT NULL,
    creat_at TEXT NOT NULL
)

PRAGMA users('users')

INSERT INTO users(id, name, email, password, creat_at)
VALUES
('001', 'Diana', 'diana@gmail.com', 'gatinha3', '2024-01-13'),
('002', 'Apollo', 'apollo@outlook.com', 'popollo3', '2024-01-13'),
('003', 'Bilie', 'bilie@hotmail.com', 'bililinho2', '2024-01-13')

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL, 
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
)

INSERT INTO products(id, name, price, description, image_url)
VALUES
('001', 'PS5', '3500.00', 'Vídeo game de última geração', 'https://images.pushsquare.com/3cc82f9c729cd/ps5-online-only.original.jpg'),
('002', 'DualSense', '400.00', 'Controle para PS5/PC', 'https://live.staticflickr.com/65535/49747503557_fa12f113db_h.jpg');

SELECT * FROM products;

--Exercicio 1
SELECT * FROM users;

SELECT * FROM products;

SELECT * FROM products
WHERE name LIKE('%PS5%')

INSERT INTO users(id, name, email, password, creat_at)
VALUES
('004', 'Eduardo', 'edu@gmail.com', 'alves123', CURRENT_TIMESTAMP),
('005', 'Gabriela', 'gb@gmail.com', 'azeredo123', CURRENT_TIMESTAMP)

INSERT INTO products(id, name, price, description, image_url)
VALUES
('003', 'Game', '350.00', 'God of War Ragnarock', 'https://www.giantbomb.com/a/uploads/original/33/338034/3388962-1216435496-SZRc7.jpg')

DELETE FROM users
WHERE id = '003'

DELETE FROM products
WHERE id = '002'

UPDATE products
SET 
    name = 'Game', 
    price = '300', 
    description = 'Mortal Kombat 1', 
    image_url = 'https://www.giantbomb.com/a/uploads/original/33/338034/3388962-1216435496-SZRc7.jpg'
WHERE id = '003';
