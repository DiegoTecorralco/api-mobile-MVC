import classroomDAO from '../dao/classrooms.dao.js';
const classroomsController= {};
classroomsController.getAll=(req,res)=>{
    //aqui le voy a pedir al DAO los datos de los estudiantes
    classroomDAO.getAll()
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
export default classroomsController;