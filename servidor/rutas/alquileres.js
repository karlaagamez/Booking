const express = require('express');
const ruta = express.Router();
const Usuario = require('../modelos/usuario');
const Alquiler = require('../modelos/alquiler');
const Comentario = require('../modelos/comentario')
const usuarioCtrl = require('../controladores/usuario');
const { auxErrores } = require('../helpers/mongoose');
var datosComentario = [];
ruta.get('/secreto', usuarioCtrl.authMiddleware, function (req, res) {
    res.json({ secreto: true });
});
ruta.post('/comentarios', function (req, res) {
    const { alquilerId } = req.body;

})
//id del alquiler tiene que llegar
ruta.post('/comentario', usuarioCtrl.authMiddleware, function (req, res) {
    const { comentario, alquilerId, calificacion } = req.body;
    const usuario = res.locals.usuario;
    const comentarioBd = new Comentario({ comentario, calificacion, usuario });
    Alquiler.findOne(
        { _id: alquilerId },
        function (err, alquilerEncontrado) {
            if (err) {
                return res.status(422).send({ errors: auxErrores(err.errors) });
            }
            if (alquilerEncontrado) {
                if (usernameEcontrado) {
                    comentarioBd.save(function (err) {
                        if (err) {
                            return res.status(422).send({ errors: auxErrores(err.errors) });
                        }
                        Usuario.updateOne(
                            { _id: usuario.id },
                            {
                                $push: { comentarios: comentarioBd }
                            }, function (err) { }
                        )
                        Alquiler.updateOne(
                            { _id: alquilerId },
                            {
                                $push: { comentarios: comentarioBd }
                            }, function (err) { }
                        )
                        return res.json(
                            {
                                titulo: "Comentario registrado exitosamente",
                                detalles: "El comentario ha sido registrado exitosamente en la base de datos"
                            }
                        )
                    })
                }
                comentarioBd.alquiler = alquilerEncontrado;


            }
        }
    )

});
ruta.post('', usuarioCtrl.authMiddleware, function (req, res) {
    const { titulo, ciudad, estado, calle, categoria, imagen, cuartos, compartido, descripcion, noPersonas, precioNoche, camas, banos,
        cocina, cuartoLavado, sala, comedor } = req.body;
    const usuario = res.locals.usuario; // usuario guardado actualmente en el navegador
    const alquiler = new Alquiler({
        titulo, ciudad, estado, calle, categoria, imagen, cuartos, compartido, descripcion, noPersonas, precioNoche, camas, banos,
        cocina, cuartoLavado, sala, comedor
    });
    alquiler.usuario = usuario;
    alquiler.save(function (err) {
        if (err) {
            return res.status(422).send({ errors: auxErrores(err.errors) });
        }

        Usuario.update(
            { _id: usuario.id },
            {
                $push: { alquileres: alquiler }
            }, function (err) { }
        );
        return res.json(alquiler);
    });
});
ruta.get('/gestionar', usuarioCtrl.authMiddleware, function (req, res) {
    const usuario = res.locals.usuario;
    Alquiler
        .find({ usuario: usuario.id })
        .populate('reservaciones')
        .exec(function (err, alquileresEncontrados) {
            if (err) {
                return res.status(422).send({ errors: auxErrores(err.errors) });
            }
            return res.json(alquileresEncontrados);
        })
});
ruta.delete('/:id', usuarioCtrl.authMiddleware, function (req, res) {
    const usuario = res.locals.usuario;
    Alquiler.find({ _id: req.params.id })
        .populate('usuario', '_id')
        .populate({
            path: 'reservaciones',
            select: 'comienzaEn',
            match: { comienzaEn: { $gt: new Date() } }
        })
        .exec(function (err, alquilerEncontrado) {
            if (err) {
                return res.status(422).send({ errors: auxErrores(err.errors) });
            }
            if (alquilerEncontrado) {
                if (usuario.id !== alquilerEncontrado[0].usuario.id) {
                    return res.status(422).send({ errores: [{ titulo: 'Usuario no valido :(', detalles: 'No eres el propietario de este alquiler' }] })
                }
                if (alquilerEncontrado[0].reservaciones.length > 0) {
                    return res.status(422).send({ errores: [{ titulo: 'Reservaciones activas:(', detalles: 'No puedes eliminar un alquiler con reservaciones activas' }] })
                }
                Alquiler.remove({ _id: alquilerEncontrado[0]._id }, function (err) {
                    if (err) {
                    }
                    return res.json({ 'status': 'eliminado' })
                })

            }

        })
});

ruta.get('', function (req, res) {
    const ciudad = req.query.ciudad;
    const query = ciudad ? { ciudad: ciudad.toLowerCase() } : {};
    Alquiler.find(query, { reservaciones: 0 }, (err, alquileresEncontrados) => {
        if (err) {
            return res.status(422).send({ errors: auxErrores(err.errors) });
        }
        if (alquileresEncontrados == 0) {
            return res.status(422).send({
                errores: [{
                    titulo: 'Lo sentimos :(',
                    detalles: `No se pudo localizar ningun alquiler asociado a la busqueda de la ciudad ${ciudad}`
                }]
            })
        }
        return res.json(alquileresEncontrados);
    });
});

ruta.get('/:id', function (req, res) {
    const alquilerId = req.params.id;
    Alquiler.findById(alquilerId)
        .populate('usuario', 'username')
        .populate('reservaciones', 'comienzaEn terminaEn')
        .exec(function (err, alquilerEncontrado) {
            if (err) {
                return res.status(422).send({
                    errores: [{
                        titulo: 'Error al localizar alquiler',
                        detalles: 'No se pudo localizar el alquiler asociado'
                    }]
                })
            }
            return res.json(alquilerEncontrado);
        });

})
module.exports = ruta;