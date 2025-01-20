//Aquí va la configuración de la aplicación

import express from 'express'; //importa express que sirve para definir rutas para manejar diferentes solicitudes HTTP (GET, POST, PUT, DELETE, etc.) 
import morgan from 'morgan'; //importa morgan que sirve para crear una bitacora de las peticiones
<<<<<<< HEAD
import studentRouter from './routes/students.routes.js'; ///importa el archivo entrado a la carpeta de routes y busca el objeto de studentRouter en el archivo students.routes.js
=======
import studentRoutes from './routes/students.routes.js';
>>>>>>> 52f827237f7580f610d4f6f9f3a75f416738c489
const app =express();

//settings
app.set('port', process.env.PORT||3000); //configuramos el puerto

//Middlewares
app.use(express.json()); //linea para que entienda json
app.use(express.urlencoded({extended:true}))//linea  para que entienda formularios
<<<<<<< HEAD
app.use(morgan('dev')); //para que podamos usar morgan o la bitacora y ver que peticiones llegan al servidor
//Routes
app.use("/api/students",studentRouter); // hacemos el prefijo para diferenciar los endpoints y va a buscar el objeto "studentRouter" en la importacion de import studentRouter from './routes/students.routes.js';
=======
app.use(morgan('dev')); //para que podamos usar morgan o la bitacora y ver que peticiones llegan al servodor
//Routes
app.use("/api/students",studentRoutes); // hacemos el prefijo para diferenciar los endpoints
>>>>>>> 52f827237f7580f610d4f6f9f3a75f416738c489
export default app; //para exportar todas las congiguraciones a quien las requiera