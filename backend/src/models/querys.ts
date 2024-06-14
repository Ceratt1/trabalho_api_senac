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