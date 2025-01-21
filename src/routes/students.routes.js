import {Router} from "express"; //solo para importar Router y no todo el express

import studentsController from "../controllers/students.controller.js";
const studentRouter=Router();

studentRouter.get('/getAll',studentsController.getAll);
studentRouter.get('/getOne/:student_id',studentsController.getOne);
studentRouter.post('/insert',studentsController.insert);

studentRouter.post('/',(req,res)=>{
    res.send("Adios mundo cruel");
});

export default studentRouter;  //para exportar todas las congiguraciones a quien las requiera