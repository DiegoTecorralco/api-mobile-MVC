//Aquí va la configuración de la aplicación

import express from 'express'; //importa express que sirve para definir rutas para manejar diferentes solicitudes HTTP (GET, POST, PUT, DELETE, etc.) 
import morgan from 'morgan'; //importa morgan que sirve para crear una bitacora de las peticiones
import ejs from 'ejs';
import studentRouter from './routes/students.routes.js'; ///importa el archivo entrado a la carpeta de routes y busca el objeto de studentRouter en el archivo students.routes.js
import teacherRouter from './routes/teachers.routes.js';
import classroomRoutes from './routes/classrooms.routes.js';

const app =express();

//settings
app.set('port', process.env.PORT||3000); //configuramos el puerto
app.set('view engine', ejs); //configuramos el motor de vistas
//Middlewares
app.use(express.json()); //linea para que entienda json
app.use(express.urlencoded({extended:true}))//linea  para que entienda formularios

app.use(morgan('dev')); //para que podamos usar morgan o la bitacora y ver que peticiones llegan al servidor
//Routes
app.use("/api/students",studentRouter); // hacemos el prefijo para diferenciar los endpoints y va a buscar el objeto "studentRouter" en la importacion de import studentRouter from './routes/students.routes.js';
app.use("/api/teachers", teacherRouter);
app.use("/api/classrooms", classroomRoutes);
export default app; //para exportar todas las congiguraciones a quien las requiera