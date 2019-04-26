module.exports = {
    auxErrores: function(errores) {
        let erroresNorm = [];
        for (let propiedad in errores) {
            if (errores.hasOwnProperty(propiedad)) {
                erroresNorm.push({titulo: propiedad, detalles: errores[propiedad].message});
            }
        }
        return erroresNorm;
    }
}