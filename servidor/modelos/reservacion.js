const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservacionSchema = new Schema({
    comienzaEn: { type: Date, required: 'La fecha inicial es obligatoria'},
    terminaEn: { type: Date, required: 'La fecha final es obligatoria'},
    montoTotal: Number,
    dias: Number,
    invitados: Number,
    creadoEn: { type: Date, default: Date.now},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario'},
    alquiler: { type: Schema.Types.ObjectId, ref: 'Alquiler'}

});

module.exports = mongoose.model('Reservacion', reservacionSchema);