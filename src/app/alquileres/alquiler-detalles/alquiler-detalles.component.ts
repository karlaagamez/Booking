import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlquileresService} from '../compartido/alquileres.service';
import { Alquiler } from '../compartido/alquiler.model';
@Component({
  selector: 'app-alquiler-detalles',
  templateUrl: './alquiler-detalles.component.html',
  styleUrls: ['./alquiler-detalles.component.scss']
})
export class AlquilerDetallesComponent implements OnInit {
  alquiler: Alquiler;

  constructor(private ruta: ActivatedRoute, 
              private alquilerService: AlquileresService
              ) { }

  ngOnInit() {
    this.ruta.params.subscribe(
      (params) => {
        this.getAlquiler(params['alquilerId']);
      })
  }
  getAlquiler(id: String) {
    this.alquilerService.getAlquileresPorID(id).subscribe((alquiler: Alquiler)=>{
      this.alquiler = alquiler;
    });
  }

}
