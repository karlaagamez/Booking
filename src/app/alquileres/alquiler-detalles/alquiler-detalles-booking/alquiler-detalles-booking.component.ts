import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alquiler-detalles-booking',
  templateUrl: './alquiler-detalles-booking.component.html',
  styleUrls: ['./alquiler-detalles-booking.component.scss']
})
export class AlquilerDetallesBookingComponent implements OnInit {

  @Input() precio: number;
  daterange: any = {};
  options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens: 'left'
  };

  constructor() { }

  ngOnInit() {
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
