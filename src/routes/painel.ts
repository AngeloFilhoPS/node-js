import { Router,Request,Response } from "express";


const router = Router();

router.get('/',(req:Request, res:Response)=>{
    res.send('Home painel')
})



router.get('/noticias',(req:Request, res:Response)=>{
    res.send('Pagina de painel')
})



export default router   