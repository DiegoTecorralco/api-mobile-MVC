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

classroomsController.insert = (req, res) => {
    classroomDAO
      .insert(req.body)
      .then((response) => {
        res.json({
          data: {
            message: "Classroom saved",
            classroom: response,
          },
        });
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };

classroomsController.updateOne = (req, res) => {
    classroomDAO
      .updateOne(req.params.classroom_id, req.body)
      .then((response) => {
        res.json({
          data: {
            message: "Classroom updated successfully",
            classroom: response,
          },
        });
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };
  
  classroomsController.deleteOne = (req, res) => {
    classroomDAO
      .deleteOne(req.params.classroom_id)
      .then((response) => {
        res.json({
          data: {
            message: "Classroom deleted successfully",
            classroom: response,
          },
        });
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };


export default classroomsController;