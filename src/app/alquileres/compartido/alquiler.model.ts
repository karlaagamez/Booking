import { Reservacion } from 'src/app/reservaciones/compartido/reservacion.model';

export class Alquiler {
        _id: String;
        titulo: String;
        categoria: String;
        ciudad: String;
        estado: String;
        calle: String;
        imagen: String;
        cuartos: number;
        noPersonas: number;
        camas: number;
        baños: number;
        precioNoche: number;
        cocina: String;
        cuartoLavado: String;
        sala: String;
        comedor: String;
        descripcion: String;
        fechaCreacion: String;
        compartido: boolean;
        reservaciones: Reservacion[];
}