import { Request, Response } from 'express';
import { MostrarProdutos, NovoUsuario, MostrarUsuarios, AdicionarProduto, RemoverProduto, atualizarProduto, CriarPedidoQuery, MostrarCarrinhoQuery } from '../models/querys'
import { log } from 'console';


export const RootVoid = async (req: Request, res: Response) => {

    return res.status(200).json({ message: "Bem vindo Adalto, você está no endpoint root" })


}

export const EnviarProdutos = async (req: Request, res: Response): Promise<any> => {
    const [produtos]: any = await MostrarProdutos();
    return res.status(200).json(produtos)

}

export const NovoUsuarioControl = async (req: Request, res: Response): Promise<any> => {
    const nome: string = req.body.nome;
    const altura: number = req.body.altura;
    const nascimento: string = req.body.nascimento;
    const cidade: number = req.body.cidade;
    const endereco : string  = req.body.endereco
    try {
        NovoUsuario(nome, altura, nascimento, cidade, endereco)
        return res.status(200).json({ message: "Cliente " + nome + " foi criado" })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Erro Interno Do Servidor" })

    }

}

export const MostrarUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const [usuarios] = await MostrarUsuarios();

        return res.status(200).json(usuarios)


    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Erro ao Mostrar os usuarios" })

    }

}

export const AdicionarProdutoControl = async (req: Request, res: Response) => {
    const nome: string = req.body.nome
    const preco: number = req.body.preco
    const quantidade: number = req.body.quantidade
    const categoria: number = req.body.categoria

    try {
        const receberDados: any = AdicionarProduto(nome, preco, quantidade, categoria)
        if (receberDados) {
            return res.status(200).json({ message: "Item Adicionado" })
        } else {
            return res.status(400).json({ message: "Erro interno" })
        }
    } catch (error) {
        console.log(error);
    }
}


export const removerProduto = async (req: Request, res: Response): Promise<any> => {
    const idproduto: number = await parseInt(req.params.idproduto)
    try {
        RemoverProduto(idproduto);
        return res.status(200).json({ message: "Item Apagado!" })

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Erro interno ao apagar o produto" })
    }


};


export const atualizarProdutocontroll = async (req: Request, res: Response): Promise<any> => {
    const nome: string = req.body.nome
    const preco: number = req.body.preco
    const quantidade: number = req.body.quantidade
    const categoria: number = req.body.categoria
    const idproduto: number = parseInt(req.params.idproduto)
    if (nome && preco && quantidade && categoria) {

        const query: any = atualizarProduto(nome, preco, quantidade, categoria, idproduto)

        return res.status(200).json(query)
    } else {

        return res.status(400).json({ message: "Erro ao atualizar o item" })
    }

};




export const PedidoProduto = async (req: Request, res: Response): Promise<any> => {
    const idcliente : number = parseInt(req.params.id)
    const idproduto : number = parseInt(req.params.idproduto)
    const quantidade : number = req.body.quantidade
    const query: any = await CriarPedidoQuery(idcliente, idproduto, quantidade)
    
    return res.status(200).json(query)


}


export const MostrarCarrinho = async (req: Request, res: Response): Promise<any> => {
    const idcliente : number = parseInt(req.params.id)
    const query = await MostrarCarrinhoQuery(idcliente)
    let somatotal : number = 0

    for (let index = 0; index < query[0].length; index++) {
        console.log(index);
        
        somatotal += query[0][index]['preco']

    }
    console.log(somatotal);
    
    const todosDados : any[] = [query[0], {Total: somatotal.toFixed(2)}]

    return res.status(200).json(todosDados)


};