const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alquilerSchema = new Schema({
    titulo: { type: String, required: true, max: [120, 'Titulo demasiado largo, maximo 120 caracteres']},
    categoria: { type: String, required: true, lowercase: true },   
    ciudad: { type: String, required: true, lowercase:true},
    estado: { type: String, required: true,lowercase:true},
    calle: { type: String, required: true, min: [4, 'Calle demasiado pequeña, minimo 4 caracteres'] },
    imagen: { type: String, required: true},
    cuartos: Number,
    noPersonas: Number,
    camas: Number,
    banos: Number,
    precioNoche: { type: Number, required: true},
    cocina: String,
    cuartoLavado: String,
    sala: String,
    comedor: String,
    descripcion: { type:String, required: true},
    fechaCreacion: { type: Date, default: Date.now},
    compartido: Boolean,  
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'},
    reservaciones: [ { type: Schema.Types.ObjectId, ref: 'Reservacion'} ],
    comentarios: [ { type: Schema.Types.ObjectId, ref: 'Comentario'} ],
    activo: Number
});

module.exports = mongoose.model('Alquiler', alquilerSchema);