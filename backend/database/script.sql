
use db_loja;

----------DDL----------
show tables;
create table cidades(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50)
);

create table categorias(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50)
);

create table clientes(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL, 
    altura DOUBLE NOT NULL,
    nascimento DATE,
    cidade_id INT NOT NULL,
    FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);
create table produtos(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100),
    preco DOUBLE,
    quantidade DOUBLE,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE pedidos (
    id int PRIMARY KEY AUTO_INCREMENT,
    horario DATETIME,
    endereco VARCHAR(200),
    cliente_id INT,
    Foreign Key (cliente_id) REFERENCES clientes (id)
);
CREATE TABLE pedidos_produtos(
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    preco DOUBLE NOT NULL,
    quantidade DOUBLE NOT NULL,
    Foreign Key (pedido_id) REFERENCES pedidos (id),
    Foreign Key (produto_id) REFERENCES produtos (id)
);
----------DDL----------


----------DML----------



INSERT into cidades (nome) VALUES ('porto Alegre');
INSERT into cidades (nome) VALUES ('viamão');
INSERT into cidades (nome) VALUES ('rio Pardo');
INSERT into categorias (nome) VALUES ('eletrônicos');
INSERT into categorias (nome) VALUES ('alimentos');
INSERT into categorias (nome) VALUES ('roupas');

CREATE PROCEDURE CriarCliente(
    IN p_nome VARCHAR(100),
    IN p_altura DOUBLE,
    IN p_nascimento_ptbr VARCHAR(10),  
    IN p_cidade_id INT
)
BEGIN
    INSERT INTO clientes (nome, altura, nascimento, cidade_id)
    VALUES (
        p_nome, 
        p_altura, 
        STR_TO_DATE(p_nascimento_ptbr, '%d/%m/%Y'), 
        p_cidade_id
    );
END;

DROP Procedure `adicionarCliente`;



CREATE PROCEDURE AdicionarProduto(
    IN p_nome VARCHAR(100),
    IN p_preco DOUBLE,
    IN p_quantidade DOUBLE,
    IN p_categoria_id INT
)
BEGIN
    INSERT INTO clientes (nome, preco, quantidade, categoria_id)
    VALUES (p_nome, p_preco, p_quantidade, p_categoria_id);
END;


DELIMITER //

CREATE PROCEDURE MostrarProdutos()
BEGIN
    SELECT p.nome, p.preco, p.quantidade, c.nome AS categoria 
    FROM produtos p
    INNER JOIN categorias c ON c.id = p.categoria_id;
END//

DELIMITER ;






DELIMITER //

CREATE PROCEDURE MostrarClientes()
BEGIN
select c.nome, ci.nome from db_loja.clientes c
INNER JOIN db_loja.cidades ci ON ci.id = c.cidade_id
;

END//

DELIMITER ;


-- call `MostrarClientes`;




-- CALL `MostrarProdutos`;

-- call CriarCliente(? , ? , ? , ?);

-- call AdicionarProduto (?, ?, ?, ?);