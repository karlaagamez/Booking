import { Component, OnInit, Input, Inject } from '@angular/core';
import { Reservacion } from 'src/app/reservaciones/compartido/reservacion.model';
import { Alquiler } from '../../compartido/alquiler.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { AyudanteService } from '../../../common/servicio/ayudante.service';
import { ReservacionService } from '../../../reservaciones/compartido/reservacion.service';
import * as momento from 'moment';


@Component({
  selector: 'app-alquiler-detalles-booking',
  templateUrl: './alquiler-detalles-booking.component.html',
  styleUrls: ['./alquiler-detalles-booking.component.scss']
})
export class AlquilerDetallesBookingComponent implements OnInit {

  @Input() alquiler: Alquiler;

  nuevaReservacion: Reservacion;
  daterange: any = {};
  fechasReservadas: any[] = [];

  options: any = {
    locale: { format: Reservacion.FORMATO },
    alwaysShowCalendars: false,
    opens: 'left',
    isInvalidDate: this.verificarDiasInvalidos.bind(this)
  };

  constructor(
    private ayudante: AyudanteService,
    private dialog: MatDialog,
    private reservacionServicio: ReservacionService) { }

  ngOnInit() {
    this.nuevaReservacion = new Reservacion();
    this.getBookedOutDates();
  }
  reservarAlquiler(){

  }
  private verificarDiasInvalidos(fecha) {
    return this.fechasReservadas.includes(this.ayudante.FormatearFechaReservacion(fecha)) ||  fecha.diff(momento(), 'days') < 0
  }

  private getBookedOutDates(){
    const reservaciones: Reservacion[] = this.alquiler.reservaciones;
    if (reservaciones && reservaciones.length > 0) {
      reservaciones.forEach((reservacion: Reservacion)=>{
        const rangoFechas = this.ayudante.getRangoFechasReservaciones(reservacion.comienzaEn,reservacion.terminaEn);
        this.fechasReservadas.push(...rangoFechas);
      });
    }
  }
  private crearReservacion(){
    this.nuevaReservacion.alquiler = this.alquiler;
    this.reservacionServicio.crearReservacion(this.nuevaReservacion).subscribe(
      (reservacionDatos) => {
        console.log(reservacionDatos);
      },
      () => {

      }
    );
  }
     
  selectedDate(value: any, datepicker?: any) {
    this.nuevaReservacion.comienzaEn = this.ayudante.FormatearFechaReservacion(value.start);
    this.nuevaReservacion.terminaEn = this.ayudante.FormatearFechaReservacion(value.end);
    this.nuevaReservacion.dias = -(value.start.diff(value.end, 'days'));
    this.nuevaReservacion.montoTotal = this.nuevaReservacion.dias * this.alquiler.precioNoche;
    }
  
    openDialog(): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '350px',
        data: {
          comienzaEn: this.nuevaReservacion.comienzaEn,
          terminaEn: this.nuevaReservacion.terminaEn,
          dias: this.nuevaReservacion.dias,
          precioNoche: this.alquiler.precioNoche,
          invitados: this.nuevaReservacion.invitados,
          montoTotal: this.nuevaReservacion.montoTotal
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.crearReservacion();
        }
      });
    }
  
  

}
