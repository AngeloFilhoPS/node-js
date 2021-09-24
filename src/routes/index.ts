import { Router,Request,Response } from "express";


const router = Router();

router.get('/',(req:Request, res:Response)=>{
    res.send('Ola page')
})


router.get('/contato',(req:Request, res:Response)=>{
    res.send('Formulario de contato')
})


router.get('/sobre',(req:Request, res:Response)=>{
    res.send('Sobre')
})

export default router