import { Component, OnInit, Input } from '@angular/core';
import { MapaService } from './mapa.service';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  
  @Input() locacion: string;
  error: boolean = false;
  lat: number;
  lng: number;

  constructor(private mapaService: MapaService) { }

  ngOnInit() {
    this.locacion = 'Aguascalientes, Ignacio T. Chavez';
   console.log(this.locacion);
  }
  mapaListo() {
    this.mapaService.geoCodificarLocacion(this.locacion).subscribe(
      (coordenadas) => {
      this.lat = coordenadas.lat;
      this.lng = coordenadas.lng;
    }, () =>{
      this.error = true;
    });
  }

}
