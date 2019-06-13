const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, required: true, max: [20, 'Nombre demasiado largo']},
    username: { type: String, required: true, max: [20, 'Username demasiado largo']},
    apepat: { type: String, required: true},
    apemat: String,
    email: { type: String,required: 'Correo es requerido', unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
    contrasena: { type: String, required: true, min: [8, 'Contraseña demasiado pequeña, minimo 8 caracteres']},
    edad: { type: Number, required: true},
    tipo: { type: String, required:true},
    alquileres: [{ type: Schema.Types.ObjectId, ref: 'Alquiler'}],
    reservaciones: [ { type: Schema.Types.ObjectId, ref: 'Reservacion'} ],
    comentarios: [ { type: Schema.Types.ObjectId, ref: 'Comentario'} ]


});
//FUNCION PARA VERIFICAR SI EL USUARIO EXISTE
usuarioSchema.methods.verificaContrasena = function(contrasena) {
    return bcrypt.compareSync(contrasena, this.contrasena);
}
//FUNCION PARA ENCRIPTAR CONTRASEÑAS
usuarioSchema.pre('save', function(next){
    const usuario = this;
    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(usuario.contrasena, salt, function(err,hash){
            usuario.contrasena = hash;
            next();
        });
    })
});

module.exports = mongoose.model('Usuario', usuarioSchema);