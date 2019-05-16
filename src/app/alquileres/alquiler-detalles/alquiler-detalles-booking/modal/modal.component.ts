import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Component, Inject } from '@angular/core';
export interface Datos {
    comienzaEn: string;
    terminaEn: string;
    dias: number;
    precioNoche: number;
    invitados: number;
    montoTotal: number;
  }
@Component({
    selector: 'app-modal',
    templateUrl: './modal.html',
    styleUrls: ['./modal.scss']
  })
  export class ModalComponent {
  
    constructor(
      public dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Datos) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }