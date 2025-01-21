const teacherDAO = {};
import Teacher from '../models/Teacher.js';
teacherDAO.getAll=async()=>{
    return await Teacher.find();
};
export default teacherDAO;