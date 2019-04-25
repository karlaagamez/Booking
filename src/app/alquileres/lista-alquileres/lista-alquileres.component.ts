import { Component, OnInit } from '@angular/core';
import { AlquileresService} from '../compartido/alquileres.service';
import { Alquiler } from '../compartido/alquiler.model';

@Component({
  selector: 'app-lista-alquileres',
  templateUrl: './lista-alquileres.component.html',
  styleUrls: ['./lista-alquileres.component.scss']
})
export class ListaAlquileresComponent implements OnInit {

  alquileres: Alquiler[] = [];
  cargando: boolean = true;
  error: boolean = false;
  constructor(private alquileresService: AlquileresService) { }

  ngOnInit() {
    const alquileresObservable = this.alquileresService.obtenerAlquileres();
    
    alquileresObservable.subscribe( 
    (alquileres: Alquiler[]) => {
      this.alquileres = alquileres;
      this.cargando = false;
    },
    (err) => {
    },
    () => {
    });
  }

}
