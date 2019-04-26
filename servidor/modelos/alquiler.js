const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alquilerlSchema = new Schema({
    titulo: { type: String, required: true, max: [120, 'Titulo demasiado largo, maximo 120 caracteres']},
    categoria: { type: String, required: true, lowercase: true },   
    ciudad: { type: String, required: true},
    estado: { type: String, required: true},
    calle: { type: String, required: true, min: [4, 'Calle demasiado pequeña, minimo 4 caracteres'] },
    imagen: { type: String, required: true},
    cuartos: Number,
    noPersonas: Number,
    camas: Number,
    baños: Number,
    precioNoche: { type: Number, required: true},
    cocina: String,
    cuartoLavado: String,
    sala: String,
    comedor: String,
    descripcion: { type:String, required: true},
    fechaCreacion: { type: Date, default: Date.now},
    compartido: Boolean,  
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'}

});

module.exports = mongoose.model('Alquiler', alquilerlSchema);