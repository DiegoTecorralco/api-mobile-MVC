import teacherDAO from '../dao/teachers.dao.js';
const teachersController= {};
teachersController.getAll=(req,res)=>{
    //aqui le voy a pedir al DAO los datos de los estudiantes
    teacherDAO.getAll()
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
export default teachersController;