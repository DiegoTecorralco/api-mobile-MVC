import studentDAO from '../dao/students.dao.js';

const studentsController = {};

// Controlador para obtener todos los estudiantes
studentsController.getAll = (req, res) => {
    // Aquí le voy a pedir al DAO los datos de los estudiantes
    studentDAO.getAll()
        .then((students) => {
          console.log(students);
            /*res.json({
                data: students
            });*/
            res.render('../src/views/index.ejs', {students});  //es para que en lugar de responder un json renderice lo que esta en la ruta que le especificamos que es la de '../src/views/index.ejs' y le ponemos los estudiantes para despues mandar a traer los estudiantes
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message
                }
            });
        });
};

// Controlador para obtener un estudiante por ID
studentsController.getOne = (req, res) => {
    studentDAO.getOne(req.params.student_id)
        .then((student) => {
           /* if (student !== null) {
                res.json({
                    data: student
                });
            } else {
                res.json({
                    message: "Student not found"
                });
            }*/
           res.render('../src/views/edit.ejs', {student});
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error.message
                }
            });
        });
};

studentsController.insert=(req,res)=>{
    studentDAO.insert(req.body)
    .then((reponse)=>{
       /* res.json({
            data:{ message: "Student saved"},
            student: response
        })*/
       res.redirect('/api/students/getAll'); //hago la peticion a otro enpoint para que parezca que se recarga la pagina
    })
    .catch((error)=>{
        res.json({data:{message:error}
        })
    })
};

studentsController.updateOne = (req, res) => {
    studentDAO
      .updateOne(req.params.studentID, req.body)
      .then((response) => {
        /*res.json({
          data: {
            message: "Student updated successfully",
            student: response,
          },
        });*/
        res.redirect('/api/students/getAll');
      })
      .catch((error) => {
        res.json({ data: { message: error } });
      });
  };
  
  studentsController.deleteOne = (req, res) => {
    studentDAO
      .deleteOne(req.params.studentID)
      .then((response) => {
      /*  res.json({
          data: {
            message: "Student deleted successfully",
            student: response,
          },
        });*/
        res.redirect('/api/students/getAll');
      })
      .catch((error) => {
        data: {
          message: error;
        }
      });
  };

export default studentsController;
