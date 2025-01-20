import {Router} from "express"; //solo para importar Router y no todo el express
<<<<<<< HEAD
import studentsController from "../controllers/students.controller.js";
const studentRouter=Router();

studentRouter.get('/getAll',studentsController.getAll);

studentRouter.post('/',(req,res)=>{
    res.send("Adios mundo cruel");
});

export default studentRouter;  //para exportar todas las congiguraciones a quien las requiera
=======
const studentRoutes=Router();


studentRoutes.get('/getOne',(req,res)=>{
res.json({
    data:"Student"
    })
})
export default studentRoutes;  //para exportar todas las congiguraciones a quien las requiera
>>>>>>> 52f827237f7580f610d4f6f9f3a75f416738c489
