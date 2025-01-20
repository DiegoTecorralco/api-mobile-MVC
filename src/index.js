//Aquí se inicializa o arranca el servidor y/o mi aplicación
<<<<<<< HEAD
import app from './app.js'
import './database.js';

app.listen(app.get('port'),
()=> console.log ("Server listening on port 3000" ));
=======

import app from './app.js'

app.listen(app.get('port'),()=> console.log ("Server listening on port: 3000" ));
>>>>>>> 52f827237f7580f610d4f6f9f3a75f416738c489
