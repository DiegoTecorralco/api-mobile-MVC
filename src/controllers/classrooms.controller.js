import classroomDAO from '../dao/classrooms.dao.js';
const classroomsController= {};
classroomsController.getAll=(req,res)=>{
    //aqui le voy a pedir al DAO los datos de los salones
    classroomDAO.getAll()
        .then((classrooms)=>{
            res.json({
                data: classrooms
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

// Controlador para obtener un salón por ID
classroomsController.getOne = (req, res) => {
    classroomDAO.getOne(req.params.classroom_id)
        .then((classroom) => {
            if (classroom !== null) {
                res.json({
                    data: classroom
                });
            } else {
                res.json({
                    message: "Classroom not found"
                });
            }
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message
                }
            });
        });
};

export default classroomsController;