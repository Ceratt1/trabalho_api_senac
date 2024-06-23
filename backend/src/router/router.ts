import express, { Request, Response, Router } from 'express';
import { RootVoid, EnviarProdutos, NovoUsuarioControl, MostrarUsers, AdicionarProdutoControl, removerProduto, atualizarProdutocontroll, PedidoProduto, MostrarCarrinho } from '../controllers/controllers'
import { middlewareNewUser, middlewareCheckId, middlewarNewProduct, middlewareCheckProdutoId } from '../middleware/middlewares'
const router: Router = express.Router();


router.get('/', RootVoid);
router.get('/produtos', EnviarProdutos);
router.post('/novousuario', middlewareNewUser, NovoUsuarioControl);
router.get('/mostrarusuarios', MostrarUsers);
router.post('/novoproduto/:id/cadastrar', middlewareCheckId, middlewarNewProduct, AdicionarProdutoControl);
router.delete('/removerproduto/:id/remover/:idproduto', middlewareCheckId, middlewareCheckProdutoId, removerProduto);
router.put('/atualizar/:id/produto/:idproduto', middlewareCheckId, middlewareCheckProdutoId, atualizarProdutocontroll);
router.post('/comprar/:id/produto/:idproduto', middlewareCheckProdutoId, PedidoProduto);
router.get('/carrinho/:id', MostrarCarrinho);


//preparar front end


export default router
