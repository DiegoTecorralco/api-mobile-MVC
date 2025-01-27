import teacherDAO from '../dao/teachers.dao.js';
const teachersController= {};
teachersController.getAll=(req,res)=>{
    //aqui le voy a pedir al DAO los datos de los maestros
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

// Controlador para obtener un maestro por ID
teachersController.getOne = (req, res) => {
    teacherDAO.getOne(req.params.teacher_number)
        .then((teacher) => {
            if (teacher !== null) {
                res.json({
                    data: teacher
                });
            } else {
                res.json({
                    message: "teacher not found"
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

teachersController.insert=(req,res)=>{
    teacherDAO.insert(req.body)
    .then((reponse)=>{
        res.json({
            data:{message: "Teacher saved"},
            teacher: response
        })
    })
    .catch((error)=>{
        res.json({data:{message:error}
        })
    });
};

teachersController.updateOne = (req, res) => {
    teacherDAO
      .updateOne(req.params.teacher_number, req.body)
      .then((response) => {
        res.json({
          data: {
            message: "teacher updated successfully",
            teacher: response,
          },
        });
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };
  
  teachersController.deleteOne = (req, res) => {
    teacherDAO
      .deleteOne(req.params.teacher_number)
      .then((response) => {
        res.json({
          data: {
            message: "Teacher deleted successfully",
            teacher: response,
          },
        });
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };


export default teachersController;