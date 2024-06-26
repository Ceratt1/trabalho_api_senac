use db_loja;

----------DDL----------
show tables;

create table cidades (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50)
);

create table categorias (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50)
);

create table clientes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    altura DOUBLE NOT NULL,
    nascimento DATE,
    cidade_id INT NOT NULL,
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);



create table produtos (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100),
    preco DOUBLE,
    quantidade DOUBLE,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);

CREATE TABLE pedidos (
    id int PRIMARY KEY AUTO_INCREMENT,
    horario DATETIME,
    endereco VARCHAR(200),
    cliente_id INT,
    Foreign Key (cliente_id) REFERENCES clientes (id)
);

CREATE TABLE pedidos_produtos (
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
CREATE PROCEDURE AdicionarProduto(
    IN p_nome VARCHAR(100),
    IN p_preco DOUBLE,
    IN p_quantidade DOUBLE,
    IN p_categoria_id INT
)
BEGIN
    INSERT INTO db_loja.produtos (nome, preco, quantidade, categoria_id)
    VALUES (p_nome, p_preco, p_quantidade, p_categoria_id);
END;

DELIMITER / /
CREATE PROCEDURE MostrarProdutos()
BEGIN
    SELECT p.id ,p.nome, p.preco, p.quantidade, c.nome AS categoria 
    FROM produtos p
    INNER JOIN categorias c ON c.id = p.categoria_id;
END//
DELIMITER;
DELIMITER / /
CREATE PROCEDURE MostrarClientes()
BEGIN
select c.id ,c.nome as NomeCliente, ci.nome as NomeCidade from db_loja.clientes c
INNER JOIN db_loja.cidades ci ON ci.id = c.cidade_id
;
END//
DELIMITER;
DELIMITER / /
CREATE PROCEDURE DeletarProdutos(
    IN idproduto INT
)
BEGIN
DELETE FROM produtos WHERE id = idproduto;
END//
DELIMITER;

drop Procedure `CriarCliente`;

DELIMITER //

CREATE PROCEDURE CriarCliente(
    IN p_nome VARCHAR(100),
    IN p_altura DOUBLE,
    IN p_nascimento_ptbr VARCHAR(10),  
    IN p_cidade_id INT,
    IN p_endereco VARCHAR(200)
)
BEGIN
    DECLARE v_cliente_id INT;

    INSERT INTO db_loja.clientes (nome, altura, nascimento, cidade_id) VALUES (p_nome, p_altura, STR_TO_DATE(p_nascimento_ptbr, '%d/%m/%Y'), p_cidade_id);

    SELECT c.id INTO v_cliente_id
    FROM clientes c 
    WHERE nome = p_nome
    LIMIT 1;

    INSERT INTO db_loja.pedidos (horario, endereco ,cliente_id) VALUES (NOW(), p_endereco ,v_cliente_id);

END //
DELIMITER //

CREATE PROCEDURE CriarPedido(
    IN p_client_id INT,
    IN p_produto_id INT,
    IN p_quantidade INT
)
BEGIN
    DECLARE v_pedido_id INT;
    DECLARE v_produto_preco DOUBLE;

    SELECT preco INTO v_produto_preco 
    FROM db_loja.produtos 
    WHERE id = p_produto_id;

    SELECT id INTO v_pedido_id
    FROM db_loja.pedidos 
    WHERE cliente_id = p_client_id
    LIMIT 1;

    INSERT INTO db_loja.pedidos_produtos (pedido_id, produto_id, preco, quantidade) 
    VALUES (v_pedido_id, p_produto_id, v_produto_preco, p_quantidade);
END //

DELIMITER ;

-- ///////////////////////////////////////////////////////////////////





















DELIMITER //

CREATE PROCEDURE MostrarCarrinho(
    IN p_client_id INT
)
BEGIN
    DECLARE v_pedido_id INT;

    -- Obter o pedido do cliente
    SELECT id INTO v_pedido_id
    FROM db_loja.pedidos 
    WHERE cliente_id = p_client_id
    LIMIT 1;

    -- Selecionar informações do carrinho
    SELECT pp.pedido_id,
           c.nome AS NomeCliente,
           pr.nome AS NomeProduto,
           pp.quantidade,
           pp.preco
    FROM db_loja.pedidos_produtos pp
    INNER JOIN db_loja.pedidos p ON p.id = pp.pedido_id
    INNER JOIN db_loja.clientes c ON c.id = p.cliente_id
    INNER JOIN db_loja.produtos pr ON pr.id = pp.produto_id
    WHERE p.id = v_pedido_id;

END //

DELIMITER ;






DROP Procedure `MostrarCarrinho`;
CALL MostrarCarrinho(5);

