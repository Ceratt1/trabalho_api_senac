import { log } from 'console';
import connection from '../models/connection';
import { Request, Response } from 'express';


export const MostrarProdutos = async () => {

    try {
        const [produtos]: any[] = await connection.execute('CALL `MostrarProdutos`;');

        if (produtos) {
            return produtos
        } else {
            return { message: 'test não executado' }
        }

    } catch (error) {
        console.log(error);
        return { message: 'erro ao receber os dados' }
    }

};


export const NovoUsuario = async (nome: string, altura: number, nascimento: string, cidade: number, endereco : string) => {

    try {
        connection.execute("call CriarCliente(? , ? , ? , ?, ?);", [nome, altura, nascimento, cidade, endereco]);
        return { message: "Erro interno" }
    } catch (error) {
        console.log(error);
        return { message: "Erro ao criar o cliente" }

    }

}

export const MostrarUsuarios = async () => {
    try {
        const [usuarios]: any[] = await connection.execute('call `MostrarClientes`;');
        return usuarios
    } catch (error) {
        console.log(error);
        return { message: 'Erro interno' }

    }


}


export const AdicionarProduto = async (
    nome: string,
    preco: number,
    quantidade: number,
    categoria: number
) => {
    if (!nome || isNaN(preco) || isNaN(quantidade) || isNaN(categoria)) {
        return { message: 'Missing or invalid input' };
    }

    try {
        await connection.execute(
            'call AdicionarProduto (?, ?, ?, ?);',
            [nome, preco, quantidade, categoria]
        );
        return { message: `Product ${nome} added` };
    } catch (error) {
        console.error(error);
        return { message: 'Error adding product' };
    }
};

export const RemoverProduto = async (idproduto: number) => {

    try {
        connection.execute("call DeletarProdutos(?);", [idproduto]);


    } catch (error) {
        console.log(error);
        return { message: "Erro interno" };

    }

}


export const atualizarProduto = async (nome: string, preco: number, quantidade: number, categoria: number, id: number): Promise<any> => {

    try {
        await connection.execute(
            'UPDATE  produtos SET nome = ?, preco = ?, quantidade = ?, categoria_id = ? WHERE id = ?;',
            [nome, preco, quantidade, categoria, id]
        );
        return { message: `Product ${nome} updated` };
    } catch (error) {
        console.error(error);
        return { message: 'Error updating product' };
    }
}


export const CriarPedidoQuery = async (idcliente: number, p_produto : number, p_quantidade : number) => {

    try {

        await connection.execute(
            'call CriarPedido (?, ?, ?);',
            [idcliente, p_produto, p_quantidade]
        );
        return { message: `Produto Adicionado ao seu carrinho` };
    } catch (error) {
        console.error(error);
        return { message: 'erro ao adicionar este produto' };
    }


};


export const MostrarCarrinhoQuery = async (idcliente: number) => {

    try {
        const [carrinho]: any[] = await connection.execute(
            'call MostrarCarrinho (?);', [idcliente]);
            return carrinho

    } catch (error) {
        console.error(error);
        return { message: 'erro ao mostrar o carrinho' };
    }


};