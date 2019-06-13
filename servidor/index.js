const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config/dev'),
      alquiler = require('./modelos/alquiler'),
      Fakedb = require('./fake-db'),
      path = require('path');
const rutasAlquiler = require('./rutas/alquileres'),
      rutasUsuario = require('./rutas/usuarios'),
      rutasReservaciones = require('./rutas/reservaciones');

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new Fakedb();
    fakeDb.seeDb();
    
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/alquileres', rutasAlquiler);
app.use('/api/v1/usuarios', rutasUsuario); 
app.use('/api/v1/reservaciones',rutasReservaciones);
/*const appPath = path.join(__dirname,'../../../../../','/home/karla/Documentos/Booking/dist/Booking');
app.use(express.static(appPath));
app.get('*',function(req,res){
    res.sendFile(path.resolve(appPath,'index.html'));
})*/
const puerto = process.env.PUERTO || 3002;
app.listen(puerto, function(){
    console.log("servidor funcionando");
});
