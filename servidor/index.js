const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      config = require('./config/dev'),
      alquiler = require('./modelos/alquiler'),
      Fakedb = require('./fake-db');

const rutasAlquiler = require('./rutas/alquileres'),
      rutasUsuario = require('./rutas/usuarios');

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new Fakedb();
    //fakeDb.seeDb();
    
}, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/alquileres', rutasAlquiler);
app.use('/api/v1/usuarios', rutasUsuario);

const puerto = process.env.PUERTO || 3001;
app.listen(puerto, function(){
    console.log("servidor funcionando");
});