import { log } from 'console';
import connection from '../models/connection';
import { Request, Response} from 'express';


export const MostrarProdutos = async () => {
    
    try {
        const [produtos]: any[]= await connection.execute('CALL `MostrarProdutos`;');
   
        if (produtos) {
            return produtos
        }else {
            return {message : 'test não executado'}
        }

    } catch (error) {
        console.log(error);
        return {message : 'erro ao receber os dados'}
    }
 
};


export const NovoUsuario = async (nome :string, altura : number, nascimento : string, cidade : number) => {

    try {
        connection.execute("call CriarCliente(? , ? , ? , ?);", [nome, altura, nascimento, cidade]);
        return {message : "Erro interno"}
    } catch (error) {
        console.log(error);
        return {message : "Erro ao criar o cliente"}
        
    }

}

export const MostrarUsuarios = async () => {
    try {
        const [usuarios]: any[]= await connection.execute('call `MostrarClientes`;');
        return usuarios        
    } catch (error) {   
        console.log(error);
        return {message : 'Erro interno'}
        
    }
   

}


export const AdicionarProduto = async (nome : string, preco : number, quantidade : number, categoria : number ) => {

    try {
        connection.execute("call AdicionarProduto (?, ?, ?, ?);", [nome, preco, quantidade, categoria]);
    } catch (error) {
        console.log(error);
        return {message : "Erro ao adicionar o produto"}
    }

}

export const RemoverProduto = async (idproduto : number) => {

    try {
        connection.execute("call DeletarProdutos(?);", [idproduto]);

        
    } catch (error) {
        console.log(error);
        return {message : "Erro interno"};
        
    }

}