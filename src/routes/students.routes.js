import {Router} from "express"; //solo para importar Router y no todo el express

import studentsController from "../controllers/students.controller.js";
const studentRouter=Router();

studentRouter.get('/getAll',studentsController.getAll);

studentRouter.post('/',(req,res)=>{
    res.send("Adios mundo cruel");
});

export default studentRouter;  //para exportar todas las congiguraciones a quien las requiera