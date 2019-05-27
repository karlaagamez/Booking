import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../compartido/autenticacion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  cargando: boolean;
  formDatos: any = {};
  errores: any[] = [];

  constructor(private authService: AutenticacionService, 
              private enrutador: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.formDatos = {};
    this.cargando = false;
  }
  registrarDatos() {
    //manda 
    this.cargando = true;
    this.formDatos.tipo = 'normal';
    console.log(this.formDatos);
    this.authService.registro(this.formDatos).subscribe(
      () => {
        this.cargando = false;
        this.toastr.success('Se ha creado tu cuenta exitosamente, ahora puedes ingresar!','Registrado')
        this.enrutador.navigate(['./login',{registrado: 'exito'}]);
      }, 
      (errorDev) => {
        console.log(errorDev.error.errors[0]);
        this.cargando = false;
        switch (errorDev.error.errors[0].titulo) {
          case 'email': 
            this.toastr.error('El correo electronico debe tener un formato valido', 'Correo electronico no valido :(');
            break;
          case 'Contraseña invalida': 
            this.toastr.error('La contraseña y la confirmacion deben ser identicas, porfavor intentalo de nuevo','Contraseña no valida :(');
            break;
          case 'Menor de edad':
            this.toastr.error('Para ser miembro debes tener al menos 18 años', 'Lo sentimos :(');
            break;
          case 'Correo invalido':
            this.toastr.error('Ya existe un usuario registrado con este correo, porfavor intenta con otro','Correo electronico no valido');
            break;
        }
        this.errores = errorDev.error.errors;
      });
  }

}
