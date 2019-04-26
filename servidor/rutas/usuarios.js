const express = require('express');
const ruta = express.Router();
const Usuario = require('../controladores/usuario');

ruta.post('/auth', Usuario.auth);
ruta.post('/registro', Usuario.registro);

module.exports = ruta;