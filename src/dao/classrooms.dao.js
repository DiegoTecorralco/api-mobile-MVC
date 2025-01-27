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

classroomDAO.updateOne = async (classroom_id, Classroom) => {
    return await Classroom.findOneAndUpdate(
      { classroom_id: classroom_id },
      Classroom
    );
  };
  classroomDAO.deleteOne = async (classroom_id) => {
    return await Classroom.findOneAndDelete({ classroom_id: classroom_id });
  };
export default classroomDAO;