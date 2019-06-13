import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlquileresService} from '../compartido/alquileres.service';
import { Alquiler } from '../compartido/alquiler.model';
import { AutenticacionService } from '../../autenticacion/compartido/autenticacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alquiler-detalles',
  templateUrl: './alquiler-detalles.component.html',
  styleUrls: ['./alquiler-detalles.component.scss']
})
export class AlquilerDetallesComponent implements OnInit {
  
  alquiler: any;
  calificacion: String = '';
  comentario: String = '';
  alquilerId: String = '';
  elegido: boolean = false;
  cargando: boolean = false;

  constructor(private ruta: ActivatedRoute, 
              private alquilerService: AlquileresService,
              public aut: AutenticacionService,
              private toastr: ToastrService
              ) { }

  ngOnInit() {
    
    this.ruta.params.subscribe(
      (params) => {
        this.getAlquiler(params['alquilerId']);
      })
  }
  setCalif(calificacion: String){
    this.calificacion = calificacion;
    this.elegido = true;
  }
  getUsername(){
    
  }
  limpiarCajaComentarios(){
    this.calificacion = '';
    this.elegido = false;
    this.comentario = '';
  }
  publicarComentario(){
    this.cargando = true;
    const contenidoComentario:any = {
      alquilerId: this.alquiler._id,
      comentario: this.comentario,
      calificacion: this.calificacion
    }
    this.alquilerService.publicarComentario(contenidoComentario).subscribe(
      () => {
        this.toastr.success('Comentario registrado exitosamente ');
        this.limpiarCajaComentarios();
        this.cargando = false;
      },
      () => {
        this.toastr.info('Intentalo en otro momento :(','Ocurrio un problema intentando guardar el comentario');
        this.limpiarCajaComentarios();
        this.cargando = false;
      }
    )
  }
  getAlquiler(id: String) {
    this.alquilerService.getAlquileresPorID(id).subscribe((alquiler: any)=>{
      this.alquiler = alquiler;
      console.log(this.alquiler.usuario)
    },
    (err) => {
      console.log(err);
    });
  }

}
