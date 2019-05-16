import { Injectable } from '@angular/core';
import { Reservacion } from '../../reservaciones/compartido/reservacion.model';
import * as momento from 'moment';

@Injectable()
export class AyudanteService{
    private getRangoFechas(comienzaEn, terminaEn, formatoFecha) {
        const tempFechas = [];
        const mTerminaEn = momento(terminaEn);
        let mComienzaEn = momento(comienzaEn);
        while(mComienzaEn < mTerminaEn) {
            tempFechas.push(mComienzaEn.format(formatoFecha));
            mComienzaEn = mComienzaEn.add(1,'day');
        }
        tempFechas.push(momento(comienzaEn).format(formatoFecha));
        tempFechas.push(mTerminaEn.format(formatoFecha));
        return tempFechas;
    }
    private formatearFecha(fecha, formatoFecha) {
        return momento(fecha).format(formatoFecha);
    }
    public getRangoFechasReservaciones(comienzaEn, terminaEn) {
        return this.getRangoFechas(comienzaEn,terminaEn, Reservacion.FORMATO);
    }
    
    public FormatearFechaReservacion(fecha){
        return this.formatearFecha(fecha,Reservacion.FORMATO);
    }
}