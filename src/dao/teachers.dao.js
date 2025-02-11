const teacherDAO = {};
import Teacher from '../models/Teacher.js';
teacherDAO.getAll=async()=>{   //Marca una función como asíncrona y asegura que devuelva una Promesa.
    return await Teacher.find();    // Pausa la ejecución de la función hasta que la Promesa se resuelva.
};
teacherDAO.getOne=async(teacher_number)=>{
    return await Teacher.findOne({teacher_number:teacher_number}); //   
};
teacherDAO.insert=async(Teacher)=>{
    return await Teacher.create(Teacher); //   
};

teacherDAO.updateOne=async(teacher_number,Teacher)=>{
    return await Teacher.findOneAndUpdate({teacher_number:teacher_number},Teacher);
};
teacherDAO.deleteOne=async(teacher_number)=>{
    return await Teacher.findOneAndDelete({teacher_number:teacher_number});
};

export default teacherDAO; //exporta toda la variable de teacherDAO