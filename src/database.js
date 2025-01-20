//Aquí va la conexxión a la base de datos utilizando Mongoose
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://DiegoTecorralco:Darkfendem112!@clusterteco.rwznw.mongodb.net/school_control_db?retryWrites=true&w=majority&appName=ClusterTeco')  // se conec
.then((db)=> console.log("MongoDB atlas connected")) //promesas
.catch((error)=>console.log(error)); //promesas
export default mongoose;