import { Component, OnInit, Input } from '@angular/core';
import { Reservacion } from 'src/app/reservaciones/compartido/reservacion.model';

@Component({
  selector: 'app-alquiler-detalles-booking',
  templateUrl: './alquiler-detalles-booking.component.html',
  styleUrls: ['./alquiler-detalles-booking.component.scss']
})
export class AlquilerDetallesBookingComponent implements OnInit {

  @Input() precio: number;
  @Input() reservaciones: Reservacion[];

  daterange: any = {};
  options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens: 'left'
  };

  constructor() { }

  ngOnInit() {
    this.reservarFechas();
  }
  private reservarFechas() {
    if (this.reservaciones && this.reservaciones.length > 0) {
      this.reservaciones.forEach((reservacion: Reservacion) => {
        console.log(reservacion);
      });
    }
  }
     
  selectedDate(value: any, datepicker?: any) {
    console.log(value);
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
    }

}
