//Aquí va la configuración de la aplicación

import express from 'express'; //importa express que sirve para definir rutas para manejar diferentes solicitudes HTTP (GET, POST, PUT, DELETE, etc.) 
import morgan from 'morgan'; //importa morgan que sirve para crear una bitacora de las peticiones
import studentRoutes from './routes/students.routes.js';
const app =express();

//settings
app.set('port', process.env.PORT||3000); //configuramos el puerto

//Middlewares
app.use(express.json()); //linea para que entienda json
app.use(express.urlencoded({extended:true}))//linea  para que entienda formularios
app.use(morgan('dev')); //para que podamos usar morgan o la bitacora y ver que peticiones llegan al servodor
//Routes
app.use("/api/students",studentRoutes); // hacemos el prefijo para diferenciar los endpoints
export default app; //para exportar todas las congiguraciones a quien las requiera