import { Request, Response } from 'express';
import { MostrarProdutos, NovoUsuario, MostrarUsuarios, AdicionarProduto, RemoverProduto } from '../models/querys'
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
    try {
        NovoUsuario(nome, altura, nascimento, cidade)
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


export const atualizarProduto = async (req: Request, res: Response): Promise<any> => {
    // const nome: string = req.body.nome
    // const preco: number = req.body.preco
    // const quantidade: number = req.body.quantidade
    // const categoria: number = req.body.categoria
    const idproduto: number = parseInt(req.params.idproduto)
    const dados = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        categoria: req.body.categoria
    }
    console.log(dados);



    return res.status(200).json({ message: "passou" })

};
