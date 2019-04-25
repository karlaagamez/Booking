import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AutenticacionService } from '../compartido/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formDatos: any = {};
  errores: any[] = [];

  constructor(private authService: AutenticacionService, 
              private enrutador: Router) { }

  ngOnInit() {
    this.formDatos = {};
    
  }
  cerrarRequisitos() {
    /*$(".alerta").delay(100).slideUp(200, function(){
      $(this).remove();
    });*/
  }
  mostrar() {
   // $(".alerta").delay(100).slideDown(200);
  }
  registrarDatos() {
    //manda 
    this.formDatos.tipo = 'normal';
    console.log(this.formDatos);
    this.authService.registro(this.formDatos).subscribe(
      () => {
        this.enrutador.navigate(['./login',{registrado: 'exito'}]);
      }, 
      (errorDev) => {
        switch (errorDev.error.errors[0].titulo) {
          case 'email': 
            errorDev.error.errors[0].titulo = 'Correo electronico no valido';
            errorDev.error.errors[0].detalles = 'El correo electronico debe tener un formato valido';
            break;
          case '': break;
        }
        this.errores = errorDev.error.errors;
      });
  }

}
