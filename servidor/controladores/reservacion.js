const Usuario = require("../modelos/usuario"),
      Alquiler = require("../modelos/alquiler"),
      Reservacion = require("../modelos/reservacion"),
      { auxErrores } = require('../helpers/mongoose'), 
      moment = require('moment');

exports.crearReservacion = function(req, res) {
    const { comienzaEn, terminaEn, montoTotal, dias, invitados, alquiler } = req.body;
    const usuario = res.locals.usuario;
    const reservacion = new Reservacion({comienzaEn, terminaEn, montoTotal, dias, invitados});
    //Encontrar alquiler por ID
    Alquiler.findById(alquiler.id)
            .populate('reservaciones')
            .populate('usuario')
            .exec(function(err, alquilerEncontrado){
        console.log(alquilerEncontrado);
        if (err) {
            return res.status(422).send({errors: auxErrores(err.errors)});
        }
        if (alquilerEncontrado.usuario._id === usuario.id) {
            return res.status(422).send({errors: [{titulo: 'Usuario invalido', detalles: 'No puedes hacer una reservación de tu propio alquiler'}]});
        }
        if (reservacionValida(reservacion, alquilerEncontrado)){
            reservacion.usuario = usuario;
            reservacion.alquiler = alquilerEncontrado;
            alquilerEncontrado.reservaciones.push(reservacion);
            reservacion.save(function(err){
                if (err) {
                    return res.status(422).send({errors: auxErrores(err.errors)});
                }
            });

            alquilerEncontrado.save();
            Usuario.update(
            {
                _id: usuario.id
            },
            {
                $push: {reservaciones: reservacion}
            }, function(){});
            return res.json({comienzaEn: reservacion.comienzaEn, terminaEn: reservacion.terminaEn})
            
        } else {
            return res.status(422).send({errors: [{titulo: 'Reservación invalida', detalles: 'Las fechas seleccionadas ya estan reservadas'}]});
        }

    });

}
//VALIDACION DE FECHAS (AQUI SE VAN A VALIDAR LAS HORAS) 
function reservacionValida(reservacionPropuesta, alquiler) {
    let esValida = true;
    if (alquiler.reservaciones && alquiler.reservaciones.length > 0) {
        esValida = alquiler.reservaciones.every(function(reservacion){ // iteracion de reservaciones
            const inicioPropuesto = moment(reservacionPropuesta.comienzaEn);// fecha de inicio propuesta por el usuario
            const finPropuesto = moment(reservacionPropuesta.terminaEn);// fecha final propuesta por el usuario
            const inicioActual = moment(reservacion.comienzaEn);// fecha de inicio de la reservacion actual en la iteracion
            const finActual = moment(reservacion.terminaEn);// fecha final de la reservacion actual en la iteracion
            return ((inicioActual < inicioPropuesto && finActual < inicioPropuesto) || (finPropuesto < finActual && finPropuesto < inicioActual));
        });
    }



    return esValida;
}