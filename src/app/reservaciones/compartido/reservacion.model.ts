import { Alquiler } from 'src/app/alquileres/compartido/alquiler.model';

export class Reservacion {
    _id: String;
    comienzaEn: String;
    terminaEn: String;
    montoTotal: Number;
    dias: Number;
    invitados: Number;
    creadoEn: String;
    usuario: String; // modelo usuario no creado aun
    alquiler: Alquiler;
}