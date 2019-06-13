const Rental = require('./modelos/alquiler');
const Usuario = require('./modelos/usuario');
const Reservacion = require('./modelos/reservacion')
const datos = require('./data.json');

class FakeDb {
    constructor() {
        this.rentals = datos.alquileres;
        this.usuarios = datos.usuarios;
    }
    async cleanDB(){
        await Rental.deleteMany({});
        await Usuario.deleteMany({});
        await Reservacion.deleteMany({});
    }
    pushDatos(){
        const usuario = new Usuario(this.usuarios[0]);
        const usuario2 = new Usuario(this.usuarios[1]);
        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);
            newRental.usuario = usuario;
            usuario.alquileres.push(newRental);
            newRental.save();
        });
        usuario.save();
        usuario2.save();        
    }
    async seeDb(){
        await this.cleanDB();
        await this.pushDatos();
    }
}
module.exports = FakeDb;