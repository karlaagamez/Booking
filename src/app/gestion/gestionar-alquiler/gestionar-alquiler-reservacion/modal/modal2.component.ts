import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Component, Inject } from '@angular/core';
import { Reservacion } from 'src/app/reservaciones/compartido/reservacion.model';
export interface Datos {
    reservaciones: Reservacion
  }
@Component({
    selector: 'app-modal',
    templateUrl: './modal2.html',
    styleUrls: ['./modal2.scss']
  })
  export class Modal2Component {
  
    constructor(
      public dialogRef: MatDialogRef<Modal2Component>,
      @Inject(MAT_DIALOG_DATA) public data: Datos) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }