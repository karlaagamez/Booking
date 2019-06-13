import { Component, OnInit } from '@angular/core';
import { Alquiler } from '../compartido/alquiler.model';
import { AlquileresService } from '../compartido/alquileres.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alquiler-crear',
  templateUrl: './alquiler-crear.component.html',
  styleUrls: ['./alquiler-crear.component.scss']
})
export class AlquilerCrearComponent implements OnInit {
  nuevoAlquiler: Alquiler;
  categoriasAlquiler = Alquiler.CATEGORIAS;

  constructor(  private alquilerService: AlquileresService,
                private toastr: ToastrService,
                private enrutador: Router) { }

  ngOnInit() {
    this.nuevoAlquiler = new Alquiler();
    this.nuevoAlquiler.compartido = false;
  }
  crearAlquiler() {
    this.alquilerService.crearAlquiler(this.nuevoAlquiler).subscribe(
      (alquiler: Alquiler) => {
        this.toastr.success('Alquiler creado exitosamente');
        this.enrutador.navigate([`alquileres/${alquiler._id}`]);
      },
      (respuestaError: HttpErrorResponse) => {
        this.toastr.error(respuestaError.error.errors[0].titulo, respuestaError.error.errors[0].detalles);
      });
  }
  cambiarImagen() {
    this.nuevoAlquiler.imagen = 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg';
  }
}