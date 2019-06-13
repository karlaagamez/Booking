import { Component, OnInit } from '@angular/core';
import { AlquileresService } from '../../alquileres/compartido/alquileres.service';
import { Alquiler } from '../../alquileres/compartido/alquiler.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestionar-alquiler',
  templateUrl: './gestionar-alquiler.component.html',
  styleUrls: ['./gestionar-alquiler.component.scss']
})
export class GestionarAlquilerComponent implements OnInit {

  alquileres: Alquiler[];
  alquilerEliminadoIndex: number;

  constructor(private alquilerService: AlquileresService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.alquilerService.getAlquileresUsuario().subscribe(
      (alquileres: Alquiler[]) => {
        this.alquileres = alquileres;
        console.log(this.alquileres);
      },
      () => {

      });
  }
  borrarAlquiler(alquilerId: string) {
    this.alquilerService.borrarAlquiler(alquilerId).subscribe(
      () => {
        this.alquileres.splice(this.alquilerEliminadoIndex, 1);
        this.alquilerEliminadoIndex = undefined;
        this.toastr.success('Alquiler eliminado exitosamente','Eliminado');

      },
      (errorRespuesta: HttpErrorResponse) => {
        this.toastr.warning(errorRespuesta.error.errores[0].detalles,errorRespuesta.error.errores[0].titulo);
      }
    );
  }

}
