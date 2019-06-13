const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
    comentario: { type: String},
    alquiler: { type: Schema.Types.ObjectId, ref: 'Alquiler'},
    calificacion: { type: String},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'},
});

module.exports = mongoose.model('Comentario', comentarioSchema);