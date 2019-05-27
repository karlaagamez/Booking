import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../compartido/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  bug = ".";
  cargando: boolean;

  constructor(private form: FormBuilder,
              private aut: AutenticacionService,
              private enrutador: Router,
              private ruta: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.crearFrom();
    this.cargando = false;
    this.ruta.params.subscribe(
      (params)=>{
        if (params['registrado'] === 'exito') {
        }
    });
  }
  crearFrom() {
    this.loginForm = this.form.group({
      email: ['', [ Validators.required, 
                    Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      contrasena: ['', Validators.required]
    })
  }
  entradaInvalida(campo): boolean {
    return this.loginForm.controls[campo].invalid && 
           (this.loginForm.controls[campo].dirty || this.loginForm.controls[campo].touched);
  }
  esRequerido(campo): boolean {
    return this.loginForm.controls[campo].errors.required
  }
  login(){
    this.cargando = true;
    this.aut.login(this.loginForm.value).subscribe(
      () => {
        this.cargando = false;
        this.toastr.success('Bienvenido de nuevo ' + this.aut.getUsername());
        this.enrutador.navigate(['/alquileres']);
      },
      (errorDev) => {
        this.cargando = false;
        switch(errorDev.error.errors[0].titulo) {
          case 'Usuario invalido': this.toastr.error('El usuario ingresado no existe', 'Usuario no valido'); break;
          case 'Datos invalidos': this.toastr.error('Los datos ingresados no coinciden', 'Datos no validos :('); break;
        }
      });
  }

}
