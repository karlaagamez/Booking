const express = require('express');
const ruta = express.Router();
const Alquiler = require('../modelos/alquiler');
const usuarioCtrl = require('../controladores/usuario');

ruta.get('/secreto', usuarioCtrl.authMiddleware ,function(req, res){
    
    res.json({secreto: true});
});

ruta.get('', function(req, res){
    Alquiler.find({})
            .select('-reservaciones')
            .exec(function(err,alquileresEncontrados){
        res.json(alquileresEncontrados);
    });
});

ruta.get('/:id', function(req,res) {
    const alquilerId = req.params.id;

    Alquiler.findById(alquilerId)
            .populate('user', 'username -_id')
            .populate('reservaciones', 'comienzaEn terminaEn -_id')
            .exec(function(err,alquilerEncontrado){
        if (err) {
            res.status(422).send({errores: [{
                titulo: 'Error al localizar alquiler',
                detalles: 'No se pudo localizar el alquiler asociado'
                }]
            })
        }
        res.json(alquilerEncontrado);
    });
    
})
module.exports = ruta;