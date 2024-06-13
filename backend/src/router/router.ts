import express, { Request, Response, Router } from 'express';
import {RootVoid, EnviarProdutos} from '../controllers/controllers'

const router : Router = express.Router();


router.get('/', RootVoid);
router.get('/produtos', EnviarProdutos)


export default router   