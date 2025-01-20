const studentDAO = {};
import Studet from '../models/Student.js';
studentDAO.getAll=async()=>{
    return await Studet.find();
};
export default studentDAO;