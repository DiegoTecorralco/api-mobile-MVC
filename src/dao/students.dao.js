const studentDAO = {};
import Studet from '../models/Student.js';
studentDAO.getAll=async()=>{
    return await Studet.find();
};
studentDAO.getOne=async(sutudent_id)=>{
    return await Studet.findOne({student_id:student_id}); //   
}
studentDAO.insert=async(Student)=>{
    return await Studet.create(Student); //   
}
export default studentDAO;