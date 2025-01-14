import {Router} from "express"; //solo para importar Router y no todo el express
const studentRoutes=Router();


studentRoutes.get('/getOne',(req,res)=>{
res.json({
    data:"Student"
    })
})
export default studentRoutes;  //para exportar todas las congiguraciones a quien las requiera