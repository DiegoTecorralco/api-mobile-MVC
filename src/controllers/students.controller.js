import studentDAO from '../dao/students.dao.js';

const studentsController = {};

// Controlador para obtener todos los estudiantes
studentsController.getAll = (req, res) => {
    // Aquí le voy a pedir al DAO los datos de los estudiantes
    studentDAO.getAll()
        .then((students) => {
            res.json({
                data: students
            });
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
    studentDAO.getOne(req.params.studentID)
        .then((student) => {
            if (student !== null) {
                res.json({
                    data: student
                });
            } else {
                res.json({
                    message: "Student not found"
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

studentsController.insert=(req,res)=>{
    studentDAO.insert(req.body)
    .then((reponse)=>{
        res.json({
            data:{ message: "Student saved"},
            student: response
        })
    })
    .catch((error)=>{
        res.json({data:{message:error}
        })
    })
};
export default studentsController;
