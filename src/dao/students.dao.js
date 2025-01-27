const studentDAO = {};
import Studet from '../models/Student.js';
studentDAO.getAll=async()=>{
    return await Studet.find();
};
studentDAO.getOne=async(student_id)=>{
    return await Studet.findOne({student_id:student_id}); //   
}
studentDAO.insert=async(Student)=>{
    return await Studet.create(Student); //   
}

studentDAO.updateOne = async (student_id, Student) => {
    return await Student.findOneAndUpdate({ stundent_id: student_id }, Student);
  };
  studentDAO.deleteOne = async (student_id) => {
    return await Student.findOneAndDelete({ stundent_id: student_id });
  };
export default studentDAO;