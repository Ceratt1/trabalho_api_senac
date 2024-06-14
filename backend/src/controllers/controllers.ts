import { Request, Response} from 'express';
import {MostrarProdutos, NovoUsuario} from '../models/querys'
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