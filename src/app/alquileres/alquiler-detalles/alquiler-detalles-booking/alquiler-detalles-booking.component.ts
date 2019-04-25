import { Component, OnInit, Input } from '@angular/core';
import { Alquiler } from '../../compartido/alquiler.model';

@Component({
  selector: 'app-alquiler-detalles-booking',
  templateUrl: './alquiler-detalles-booking.component.html',
  styleUrls: ['./alquiler-detalles-booking.component.scss']
})
export class AlquilerDetallesBookingComponent implements OnInit {

  @Input() alquiler: Alquiler;

  constructor() { }

  ngOnInit() {
  }
  public daterange: any = {};
 
    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false,
        opens: 'left'
    };
 
    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        console.log(value);
 
        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;
 
        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }

}
