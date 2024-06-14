import { NextFunction, Request, Response} from 'express';


export const middlewareNewUser : any = async (req : Request, res : Response, next : NextFunction) => {
    
    const nome : string = req.body.nome
    const altura : number = req.body.altura
    const nascimento : string = req.body.nascimento
    const cidade : number = req.body.cidade

    if (nome &&  altura && nascimento && cidade) {
        next()
    }else if (!nome){
        return res.status(400).json({message : "Falha ao receber os dados 'nome'"})
    
    } else if (!altura){
        return res.status(400).json({message : "Falha ao receber os dados 'altura'"})

    }else if (!nascimento){
        return res.status(400).json({message : "Falha ao receber os dados 'nascimento'"})
    }else if (!cidade){
        return res.status(400).json({message : "Falha ao receber os dados 'cidade'"})

    }else {
        return res.status(400).json({message : "Falha ao receber os dados"})
    }


}