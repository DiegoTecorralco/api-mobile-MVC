import studentDAO from '../dao/students.dao.js';
const studentsController= {};
studentsController.getAll=(req,res)=>{
    //aqui le voy a pedir al DAO los datos de los estudiantes
    studentDAO.getAll()
        .then((students)=>{
            res.json({
                data: students
            });
        })
        .catch((error)=>{
            res.json({
                data:{
                    message:error
                }
            })
        });
};
export default studentsController;