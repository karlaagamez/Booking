const Rental = require('./modelos/alquiler');
const Usuario = require('./modelos/usuario');
class FakeDb {
    constructor() {
        this.rentals = [{
                titulo: "departamento en la playa",
                categoria: "departamento",
                ciudad: "Guasave",
                estado: "Sinaloa",
                calle: "Plutarco Elías Calles",
                imagen: "http://via.placeholder.com/350x250",
                cuartos: 3,
                noPersonas: 6,
                camas: 3,
                baños: 3,
                precioNoche: 1500,
                cocina: "Si",
                cuartoLavado: "Si",
                sala: "Si",
                comedor: "Si",
                descripcion: "Bonito departamento para toda la familia en la playa",
                //fechaCreacion: Date.now,
                compartido: false,
            },
            {
                titulo: "casa en los cabos san lucas",
                categoria: "casa",
                ciudad: "Los cabos",
                estado: "Baja California Sur",
                calle: "Boulevard Colosio",
                imagen: "http://via.placeholder.com/350x250",
                cuartos: 4,
                noPersonas: 7,
                camas: 4,
                baños: 4,
                precioNoche: 3000,
                cocina: "Si",
                cuartoLavado: "Si",
                sala: "Si",
                comedor: "Si",
                descripcion: "Bonito departamento para toda la familia en la hermosa ciudad de los cabos san lucas",
                //fechaCreacion: Date.now,
                compartido: false,
            },
            {
                titulo: "Habitación personal ",
                categoria: "habitacion",
                ciudad: "Aguascalientes",
                estado: "Aguascalientes",
                calle: "Adolfo lopez mateos",
                imagen: "http://via.placeholder.com/350x250",
                cuartos: 1,
                noPersonas: 2,
                camas: 1,
                baños: 1,
                precioNoche: 1000,
                cocina: "Si",
                cuartoLavado: "Si",
                sala: "No",
                comedor: "No",
                descripcion: "Acogedora habitación individual ",
                //fechaCreacion: Date.now,
                compartido: false,
            }
        ];
        this.usuarios = [{
            nombre: 'Jesus Alonso',
            username: 'kechu',
            apepat: 'Castro',
            apemat: 'Lopez',
            email: 'kechu@gmail.com',
            contrasena: 'hola1234',
            edad: 22,
            tipo: 'normal'
        }, 
        {
            nombre: 'Karla Berenice',
            username: 'pequeña',
            apepat: 'Gamez',
            apemat: 'Ruiz',
            email: 'pequeña@gmail.com',
            contrasena: 'hola1234',
            edad: 22,
            tipo: 'normal'
        }
    
    ];
    }
    async cleanDB(){
        await Rental.deleteMany({});
        await Usuario.deleteMany({});
    }
    pushDatos(){
        const usuario = new Usuario(this.usuarios[0]);
        this.rentals.forEach((rental)=>{
            const newRental = new Rental(rental);
            newRental.usuario = usuario;

            usuario.alquileres.push(newRental);
            
            newRental.save();
        });
        usuario.save();
    }
    async seeDb(){
        await this.cleanDB();
        await this.pushDatos();
    }
}
module.exports = FakeDb;