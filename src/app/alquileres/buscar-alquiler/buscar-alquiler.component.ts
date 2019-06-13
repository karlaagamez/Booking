import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlquileresService } from '../compartido/alquileres.service';
import { Alquiler } from '../compartido/alquiler.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-buscar-alquiler',
  templateUrl: './buscar-alquiler.component.html',
  styleUrls: ['./buscar-alquiler.component.scss']
})
export class BuscarAlquilerComponent implements OnInit {
  
  ciudad: string;
  alquileres: Alquiler[] = [];
  errores: any[] = [];

  constructor(private ruta: ActivatedRoute,
              private alquilerService: AlquileresService) { }

  ngOnInit() {
    this.ruta.params.subscribe( (params)=>{
      this.ciudad = params['ciudad'];
      this.getAlquileres();
    })
  }
  getAlquileres(){
    this.errores = [];
    this.alquileres = [];
    this.alquilerService.obtenerAlquileresPorCiudad(this.ciudad).subscribe(
      (alquileres: Alquiler[]) => {
        this.alquileres = alquileres;
      },
      (error) => {
        this.errores = error.error.errores;
      }
    )
  }

}
