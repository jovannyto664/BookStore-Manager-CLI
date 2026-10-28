-- 1. ESTRUTURA DO BANCO DE DADOS (DDL)
-- 2. MANIPULAÇÃO DE DADOS (DML - INSERT, UPDATE, DELETE)
-- 3. CONSULTAS RELACIONAIS E RELATÓRIOS GERENCIAIS (DQL)

DROP TABLE IF EXISTS emprestimos CASCADE;
DROP TABLE IF EXISTS clientes CASCADE;
DROP TABLE IF EXISTS livros CASCADE;
DROP TABLE IF EXISTS autores CASCADE;

CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    nacionalidade VARCHAR(100) NOT NULL,
    data_nascimento DATE
);

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    id_autor INT NOT NULL,
    genero VARCHAR(50) NOT NULL,
    ano_publicacao INT NOT NULL,
    quantidade_total INT NOT NULL DEFAULT 1,
    quantidade_disponivel INT NOT NULL DEFAULT 1,

    CONSTRAINT fk_livros_autor 
        FOREIGN KEY (id_autor) 
        REFERENCES autores(id) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT,

    CONSTRAINT chk_livros_ano_publicacao 
        CHECK (ano_publicacao > 0),

    CONSTRAINT chk_livros_quantidade_total 
        CHECK (quantidade_total >= 0),

    CONSTRAINT chk_livros_quantidade_disponivel 
        CHECK (quantidade_disponivel >= 0 AND quantidade_disponivel <= quantidade_total)
);

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_cadastro DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE emprestimos (
    id SERIAL PRIMARY KEY,
    id_livro INT NOT NULL,
    id_cliente INT NOT NULL,
    data_emprestimo TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_devolucao_prevista DATE NOT NULL,
    data_devolucao TIMESTAMP NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'EMPRESTADO',

    CONSTRAINT fk_emprestimos_livro 
        FOREIGN KEY (id_livro) 
        REFERENCES livros(id) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT,

    CONSTRAINT fk_emprestimos_cliente 
        FOREIGN KEY (id_cliente) 
        REFERENCES clientes(id) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT,

    CONSTRAINT chk_emprestimos_status 
        CHECK (status IN ('EMPRESTADO', 'DEVOLVIDO', 'ATRASADO'))
);


INSERT INTO autores (nome, nacionalidade, data_nascimento) VALUES
('Machado de Assis', 'Brasileira', '1839-06-21'),
('Clarice Lispector', 'Brasileira', '1920-12-10'),
('George Orwell', 'Britânica', '1903-06-25'),
('J.K. Rowling', 'Britânica', '1965-07-31'),
('Gabriel García Márquez', 'Colombiana', '1927-03-06');

INSERT INTO livros (titulo, id_autor, genero, ano_publicacao, quantidade_total, quantidade_disponivel) VALUES
('Dom Casmurro', 1, 'Romance', 1899, 4, 3),
('Memórias Póstumas de Brás Cubas', 1, 'Romance', 1881, 3, 3),
('A Hora da Estrela', 2, 'Ficção Literária', 1977, 5, 4),
('1984', 3, 'Distopia', 1949, 6, 4),
('A Revolução dos Bichos', 3, 'Fábula Política', 1945, 4, 4),
('Harry Potter e a Pedra Filosofal', 4, 'Fantasia', 1997, 5, 4),
('Cem Anos de Solidão', 5, 'Realismo Mágico', 1967, 3, 3);

INSERT INTO clientes (nome, email, telefone, data_cadastro) VALUES
('Carlos Eduardo Silva', 'carlos.silva@email.com', '(11) 98765-4321', '2026-01-15'),
('Mariana Souza Gomes', 'mariana.gomes@email.com', '(21) 99876-5432', '2026-02-10'),
('Lucas Fernandes', 'lucas.fernandes@email.com', '(31) 97654-3210', '2026-03-05'),
('Beatriz Albuquerque', 'beatriz.albuquerque@email.com', '(41) 96543-2109', '2026-04-12'),
('Rafael Martins', 'rafael.martins@email.com', '(51) 95432-1098', '2026-05-20');

INSERT INTO emprestimos (id_livro, id_cliente, data_emprestimo, data_devolucao_prevista, data_devolucao, status) VALUES
(1, 1, '2026-09-01 10:00:00', '2026-09-15', '2026-09-12 15:30:00', 'DEVOLVIDO'),
(2, 2, '2026-09-05 14:00:00', '2026-09-19', '2026-09-22 11:20:00', 'DEVOLVIDO'),
(1, 3, '2026-10-10 09:30:00', '2026-10-25', NULL, 'EMPRESTADO'),
(3, 4, '2026-10-12 16:00:00', '2026-10-27', NULL, 'EMPRESTADO'),
(4, 1, '2026-10-15 11:45:00', '2026-10-30', NULL, 'EMPRESTADO'),
(4, 5, '2026-10-18 14:15:00', '2026-11-02', NULL, 'EMPRESTADO'),
(6, 2, '2026-10-20 17:00:00', '2026-11-04', NULL, 'EMPRESTADO');


UPDATE clientes 
SET telefone = '(11) 91111-2222' 
WHERE email = 'carlos.silva@email.com';

UPDATE emprestimos 
SET data_devolucao = CURRENT_TIMESTAMP, 
    status = 'DEVOLVIDO' 
WHERE id = 3;

UPDATE livros 
SET quantidade_disponivel = quantidade_disponivel + 1 
WHERE id = 1;

INSERT INTO autores (nome, nacionalidade) VALUES ('Autor Temporário', 'Brasileira');
INSERT INTO livros (titulo, id_autor, genero, ano_publicacao, quantidade_total, quantidade_disponivel) 
VALUES ('Livro Teste Exclusão', (SELECT id FROM autores WHERE nome = 'Autor Temporário'), 'Teste', 2026, 1, 1);

DELETE FROM livros 
WHERE titulo = 'Livro Teste Exclusão';

DELETE FROM autores 
WHERE nome = 'Autor Temporário';

SELECT 
    l.id AS codigo_livro,
    l.titulo,
    a.nome AS autor,
    l.genero,
    l.ano_publicacao,
    l.quantidade_disponivel,
    l.quantidade_total
FROM livros l
INNER JOIN autores a ON l.id_autor = a.id
WHERE l.quantidade_disponivel > 0
ORDER BY l.titulo ASC;

SELECT DISTINCT 
    l.id AS codigo_livro,
    l.titulo,
    a.nome AS autor,
    l.genero
FROM livros l
INNER JOIN autores a ON l.id_autor = a.id
INNER JOIN emprestimos e ON l.id = e.id_livro
WHERE e.data_devolucao IS NULL 
  AND e.status = 'EMPRESTADO'
ORDER BY l.titulo ASC;

SELECT 
    a.id AS codigo_autor,
    a.nome AS autor,
    a.nacionalidade,
    COUNT(l.id) AS total_livros_cadastrados
FROM autores a
LEFT JOIN livros l ON a.id = l.id_autor
GROUP BY a.id, a.nome, a.nacionalidade
ORDER BY total_livros_cadastrados DESC, a.nome ASC;

SELECT 
    l.id AS codigo_livro,
    l.titulo,
    a.nome AS autor,
    COUNT(e.id) AS total_emprestimos_realizados
FROM livros l
INNER JOIN autores a ON l.id_autor = a.id
LEFT JOIN emprestimos e ON l.id = e.id_livro
GROUP BY l.id, l.titulo, a.nome
ORDER BY total_emprestimos_realizados DESC, l.titulo ASC;

SELECT 
    c.id AS codigo_cliente,
    c.nome AS cliente,
    c.email,
    c.telefone,
    l.titulo AS livro_emprestado,
    e.data_emprestimo,
    e.data_devolucao_prevista,
    e.status
FROM clientes c
INNER JOIN emprestimos e ON c.id = e.id_cliente
INNER JOIN livros l ON e.id_livro = l.id
WHERE e.data_devolucao IS NULL 
  AND e.status = 'EMPRESTADO'
ORDER BY e.data_devolucao_prevista ASC;


SELECT 
    a.nome AS autor,
    COUNT(e.id) AS total_emprestimos_autor
FROM autores a
INNER JOIN livros l ON a.id = l.id_autor
INNER JOIN emprestimos e ON l.id = e.id_livro
GROUP BY a.id, a.nome
ORDER BY total_emprestimos_autor DESC
LIMIT 3;
