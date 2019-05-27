import { Injectable } from '@angular/core';
import { Reservacion } from '../../reservaciones/compartido/reservacion.model';
import * as momento from 'moment';

@Injectable()
export class AyudanteService{
    private getRangoFechas(comienzaEn, terminaEn, formatoFecha) {
        const tempFechas = [];
        let mTerminaEn = momento(terminaEn);
        let mComienzaEn = momento(comienzaEn);
        mComienzaEn = mComienzaEn.add(1,'day');
        mTerminaEn = mTerminaEn.add(1,'day');
        while(mComienzaEn <= mTerminaEn) {
            tempFechas.push(mComienzaEn.format(formatoFecha));
            mComienzaEn = mComienzaEn.add(1,'day');
        }
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