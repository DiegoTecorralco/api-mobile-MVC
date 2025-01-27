import {Router} from "express"; //solo para importar Router y no todo el express

import teachersController from "../controllers/teachers.controller.js";
const teacherRouter=Router();

teacherRouter.get('/getAll',teachersController.getAll);
teacherRouter.get('/getOne/:teacher_number',teachersController.getOne);
teacherRouter.post('/insert',teachersController.insert);
teacherRouter.put('/updateOne/:teacher_number',teachersController.updateOne);
teacherRouter.delete('/deleteOne/:teacher_number',teachersController.deleteOne);

teacherRouter.post('/',(req,res)=>{
    res.send("Adios mundo cruel");
});

export default teacherRouter;  //para exportar todas las congiguraciones a quien las requiera