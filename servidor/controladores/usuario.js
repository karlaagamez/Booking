const Usuario = require("../modelos/usuario");
const MongooseHelpers = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');

exports.auth = function(req, res) {
    const { email,
            contrasena
    } = req.body;
    if (!contrasena || !email) {
        return res.status(422).send({errors: [{titulo: 'Faltan datos', detalles: 'Porfavor ingresa el email y la contraseña'}]});
    }
    //PETICION A LA BD
    Usuario.findOne( {email}, function(err, usuario){
        if (err) {
            return res.status(422).send({errors: MongooseHelpers.auxErrores(err.errors)});
        }
        if (!usuario) { // si el usuario no existe mandamos mensaje de error, si existe verificamos la contraseña encriptada
            return res.status(422).send({errors: [{titulo: 'Usuario invalido', detalles: 'El usuario asociado a los datos no existe'}]});
        } else {
            if (usuario.verificaContrasena(contrasena)) {
                const token = jwt.sign({
                    usuarioId: usuario.id,
                    username: usuario.username
                  }, config.SECRETO , { expiresIn: '1h' });
                return res.json(token);
            } else {
                return res.status(422).send({errors: [{titulo: 'Datos invalidos', detalles: 'Correo o contraseña erroneos'}]});
            }
        }
        
    });

}
exports.registro = function(req, res) {
    const { username, 
            email, 
            nombre, 
            apepat, 
            apemat, 
            edad, 
            contrasena, 
            confirmacionContra,
            tipo
        } = req.body;
        console.log(req.body);
    if (!contrasena || !email) {
        return res.status(422).send({errors: [{titulo: 'Faltan datos', detalles: 'Porfavor ingresa el email y la contraseña'}]});
    }
    if (contrasena !== confirmacionContra) {
        return res.status(422).send({errors: [{titulo: 'Contraseña invalida', detalles: 'La contraseña y la confirmación deben ser identicas'}]});
    }
    if (edad < 18) {
        return res.status(422).send({errors: [{titulo: 'Menor de edad', detalles: 'Debes ser mayor de edad para poder registrarte en este sitio'}]})
    }
    
    //PETICION A BD DE MONGO
    //Busca en la BD si existe un email ya registrado
    //Si existe regresa un error
    //Si no existe realiza el registro
    Usuario.findOne({email:email}, function(err,usuarioExistente){
        if (err) {
            return res.status(422).send({errors: MongooseHelpers.auxErrores(err.errors)});
        }
        if (usuarioExistente) {
            return res.status(422).send({errors: [{titulo: 'Correo invalido', detalles: 'Ya existe un usuario registrado con este correo'}]});
        } 
        const registroUsuario = new Usuario({
            nombre: nombre,
            username: username,
            apepat: apepat,
            apemat: apemat,
            email: email,
            contrasena: contrasena,
            edad: edad, 
            tipo: tipo
            });
        registroUsuario.save(function(err){
            if (err) {
                return res.status(422).send({errors: MongooseHelpers.auxErrores(err.errors)});
            }
            return res.json({registrado: true});
        });
        
    });


}
exports.authMiddleware = function(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const usuario = parseToken(token);
        Usuario.findById(usuario.usuarioId, function(err, usuarioEncontrado){
            if (err) {
                return res.status(422).send({errors: MongooseHelpers.auxErrores(err.errors)});
            }
            if (usuarioEncontrado) {
                res.locals.usuario = usuarioEncontrado;
                next();
            } else {
                return res.status(422).send({errors: [{titulo: 'No autorizado', detalles: 'Necesitas iniciar sesión para tener acceso'}]});
            }
        });
    } else {
        return res.status(422).send({errors: [{titulo: 'No autorizado', detalles: 'Necesitas iniciar sesión para tener acceso'}]});

    }
}
function parseToken(token) {
    return jwt.verify(token.split(' ')[1], config.SECRETO);
}