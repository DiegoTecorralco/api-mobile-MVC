import {Router} from "express"; //solo para importar Router y no todo el express

import classroomsController from "../controllers/classrooms.controller.js";
const classroomRoutes=Router();

classroomRoutes.get('/getAll',classroomsController.getAll);

classroomRoutes.post('/',(req,res)=>{
    res.send("Adios mundo cruel");
});

export default classroomRoutes;  //para exportar todas las congiguraciones a quien las requiera