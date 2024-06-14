import { Request, Response} from 'express';
import {MostrarProdutos, NovoUsuario, MostrarUsuarios, AdicionarProduto, RemoverProduto} from '../models/querys'
import { log } from 'console';


export const RootVoid = async (req : Request, res : Response ) => {

    return res.status(200).json({message : "Bem vindo Adalto, você está no endpoint root"})


}

export const EnviarProdutos = async (req:Request, res: Response) : Promise<any> => {
        const [produtos] : any = await MostrarProdutos();
        return res.status(200).json(produtos)
    
}

export const NovoUsuarioControl = async (req : Request, res : Response): Promise<any> => {
    const nome : string = req.body.nome;
    const altura : number = req.body.altura;
    const nascimento : string = req.body.nascimento;
    const cidade : number = req.body.cidade;
    try {
        NovoUsuario(nome, altura,nascimento,cidade)
        return res.status(200).json({message : "Cliente " + nome + " foi criado"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message : "Erro Interno Do Servidor"})

    }

}

export const MostrarUsers  = async (req : Request, res : Response): Promise<any> => {
   try {
    const [usuarios] = await MostrarUsuarios();

    return res.status(200).json(usuarios)
    

   } catch (error) {
    console.log(error);
    return res.status(400).json({message : "Erro ao Mostrar os usuarios"})
    
   }
    
}

export const AdicionarProdutoControl = async (req : Request, res : Response) => {
    const nome :string = req.body.nome
    const preco : number = req.body.preco
    const quantidade : number = req.body.quantidade
    const categoria : number = req.body.categoria

    try {
        AdicionarProduto(nome, preco, quantidade, categoria)
        return res.status(200).json({message : "Produto " + nome + " adicionado"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message : "Erro interno"})
        
    }
}


export const removerProduto = async (req : Request, res : Response) : Promise<any> =>{
    const idproduto : number = await parseInt(req.params.idproduto)
    try {
        RemoverProduto(idproduto);
        return res.status(200).json({message : "Item Apagado!"})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message : "Erro interno ao apagar o produto"})
    }


};