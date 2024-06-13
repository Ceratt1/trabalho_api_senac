import { Request, Response} from 'express';
import {MostrarProdutos} from '../models/querys'


export const RootVoid = async (req : Request, res : Response ) => {

    return res.status(200).json({message : "Bem vindo Adalto, você está no endpoint root"})


}


export const EnviarProdutos = async (req:Request, res: Response) : Promise<any> => {
        const [produtos] : any = await MostrarProdutos();
        return res.status(200).json(produtos)
    
}



