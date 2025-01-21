const classroomDAO = {};
import Classroom from '../models/Classroom.js';
classroomDAO.getAll=async()=>{
    return await Classroom.find();
};
classroomDAO.getOne=async(classroom_id)=>{
    return await Classroom.findOne({classroom_id:classroom_id}); //   
};
classroomDAO.insert=async(Classroom)=>{
    return await Classroom.create(Classroom); //   
};
export default classroomDAO;