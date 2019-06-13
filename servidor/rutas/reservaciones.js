const express = require('express');
const ruta = express.Router();

const reservacionCtrl = require('../controladores/reservacion');
const usuarioCtrl = require('../controladores/usuario');

ruta.post('', usuarioCtrl.authMiddleware , reservacionCtrl.crearReservacion);
ruta.get('/gestionar', usuarioCtrl.authMiddleware , reservacionCtrl.getReservacionesUsuario)
module.exports = ruta;