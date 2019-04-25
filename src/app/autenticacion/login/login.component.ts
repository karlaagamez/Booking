import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AutenticacionService } from '../compartido/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  errores:any [] = [];
  notifMsgs: string = '';

  constructor(private form: FormBuilder,
              private aut: AutenticacionService,
              private enrutador: Router,
              private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.crearFrom();

    this.ruta.params.subscribe(
      (params)=>{
        if (params['registrado'] === 'exito') {
          this.notifMsgs = 'Has sido registrado exitosamente, puedes iniciar sesión ahora';
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
    this.aut.login(this.loginForm.value).subscribe(
      (token) => {
        this.enrutador.navigate(['/alquileres']);
      },
      (errorDev) => {
        this.errores = errorDev.error.errors;

      });
  }

}
