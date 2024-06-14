import express, { Request, Response, Router } from 'express';
import {RootVoid, EnviarProdutos, NovoUsuarioControl} from '../controllers/controllers'
import {middlewareNewUser} from '../middleware/middlewarenewuser'
const router : Router = express.Router();


router.get('/', RootVoid);
router.get('/produtos', EnviarProdutos)
router.post('/NovoUsuario', middlewareNewUser, NovoUsuarioControl)


export default router   