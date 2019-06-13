import { Component, OnInit } from '@angular/core';
import { ReservacionService } from '../../reservaciones/compartido/reservacion.service';
import { Reservacion } from 'src/app/reservaciones/compartido/reservacion.model';
@Component({
  selector: 'app-gestionar-reservacion',
  templateUrl: './gestionar-reservacion.component.html',
  styleUrls: ['./gestionar-reservacion.component.scss']
})
export class GestionarReservacionComponent implements OnInit {
  reservaciones: Reservacion[];
  constructor(private reservacionService: ReservacionService) { }

  ngOnInit() {
    this.reservacionService.getReservacionesUsuario().subscribe(
    (reservaciones: Reservacion[])=>{
      this.reservaciones = reservaciones;
      console.log(this.reservaciones);
    },
    ()=>{

    })
  }

}
