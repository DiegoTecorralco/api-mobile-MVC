//Aquí se inicializa o arranca el servidor y/o mi aplicación

import app from './app.js'

app.listen(app.get('port'),()=> console.log ("Server listening on port: 3000" ));