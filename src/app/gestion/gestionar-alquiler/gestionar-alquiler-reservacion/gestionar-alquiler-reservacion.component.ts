import { Component, OnInit, Input } from '@angular/core';
import { Modal2Component } from './modal/modal2.component';
import { MatDialog } from '@angular/material';
import {Reservacion} from '../../../reservaciones/compartido/reservacion.model';

@Component({
  selector: 'app-gestionar-alquiler-reservacion',
  templateUrl: './gestionar-alquiler-reservacion.component.html',
  styleUrls: ['./gestionar-alquiler-reservacion.component.scss']
})
export class GestionarAlquilerReservacionComponent implements OnInit {

  @Input() reservaciones: Reservacion[];

  constructor(private dialog: MatDialog) { }
  
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Modal2Component, {
      width: '350px',
      data: {
        reservaciones: this.reservaciones
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
      }
    });
  }
}
