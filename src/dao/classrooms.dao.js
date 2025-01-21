const classroomDAO = {};
import Classroom from '../models/Classroom.js';
classroomDAO.getAll=async()=>{
    return await Classroom.find();
};
export default classroomDAO;