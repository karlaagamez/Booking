import { Alquiler } from 'src/app/alquileres/compartido/alquiler.model';

export class Reservacion {

    static readonly FORMATO = 'Y-MM-DD';
    
    _id: String;
    comienzaEn: String;
    terminaEn: String;
    montoTotal: Number;
    dias: number;
    invitados: number;
    creadoEn: String;
    usuario: String; // modelo usuario no creado aun
    alquiler: Alquiler;
}