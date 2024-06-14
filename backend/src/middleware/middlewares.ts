import { NextFunction, Request, Response} from 'express';
import {MostrarProdutos} from '../models/querys'

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


export const middlewareCheckId : any = async (req : Request, res : Response, next : NextFunction) =>{

    const checkID : string = req.params.id

    if (checkID == "1" || checkID == "2") {
        next()
    }else {
        return res.status(400).json({message : "Você não é um administrador"})
    }


}

export const middlewarNewProduct = async (req : Request, res : Response, next : NextFunction) : Promise<any> => {

    const nome : string = req.body.nome 
    const  preco : number = req.body.preco
    const quantidade : number = req.body.quantidade
    const categoria : number = req.body.categoria

    if (nome && preco && quantidade && categoria) {
        next()
    } else if (!nome){
        return res.status(400).json({message : "Falha ao receber o nome"})

    } else if (!preco) {
        return res.status(400).json({message : "Falha ao receber o preco"})
    }else if(!quantidade){
        return res.status(400).json({message : "Falha ao receber o quantia"})
    }else if (!categoria) {
        return res.status(400).json({message : "Falha ao receber o quantia"})
    }else{
        return res.status(400).json({message : "Falha ao receber os dados"})
    }

}



export const middlewareCheckProdutoId = async (req : Request, res : Response, next : NextFunction) => {
    const [id] = await MostrarProdutos()
    const ids : Array<number> = []
    const idproduto : number =  parseInt(req.params.idproduto)    
    for (let index = 0; index < id.length; index++) {
        ids.push(id[index]['id'])           
    };    
    
    if (ids.includes(idproduto)) {
        next()
        
    }else{
        return res.status(400).json({message : "Esse item não existe"})
    }


}


