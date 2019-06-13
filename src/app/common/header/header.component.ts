import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {coerceNumberProperty} from '@angular/cdk/coercion';


import { AutenticacionService } from '../../autenticacion/compartido/autenticacion.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  temaActual = '';
  opened: boolean;  
  //VARIABLES PARA EL TAMA;O DE FUENTE
  tamContenido = '';
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  min = 14;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  private _tickInterval = 1;

  tamTitulos = '';
  autoTicks2 = false;
  disabled2 = false;
  invert2 = false;
  max2 = 36;
  min2 = 30;
  showTicks2 = false;
  step2 = 1;
  thumbLabel2 = true;
  value2 = 0;
  vertical2 = false;
  private _tickInterval2 = 1;

  constructor(private aut: AutenticacionService,
              private enrutador: Router) { }

  ngOnInit() {
    this.tamContenido = '_14';
  }
  //FUNCION PARA EL TAMA;O DE FUENTE
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  //FUNCION PARA EL TAMA;O DE FUENTE
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  //FUNCION PARA EL TAMA;O DE FUENTE
  get tickInterval2(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval2) : 0;
  }
  //FUNCION PARA EL TAMA;O DE FUENTE
  set tickInterval2(value) {
    this._tickInterval2 = coerceNumberProperty(value);
  }
  logout(){
    this.aut.logout();
    this.enrutador.navigate(['/login']);
  }
  getUsername(){
    return this.aut.getUsername();
  }
  autenticado() {
    return this.aut.esAutenticado();
  }
  cambiarFuenteTitulos(valor: number){
    switch (valor) {
      case 30: this.tamTitulos = '_30'; break;
      case 31: this.tamTitulos = '_31'; break;
      case 32: this.tamTitulos = '_32'; break;
      case 33: this.tamTitulos = '_33'; break;
      case 34: this.tamTitulos = '_34'; break;
      case 35: this.tamTitulos = '_35'; break;
      case 36: this.tamTitulos = '_36'; break;
    }
  }
  cambiarFuenteContenido(valor: number){
    switch (valor) {
      case 14: this.tamContenido = '_14'; break;
      case 15: this.tamContenido = '_15'; break;
      case 16: this.tamContenido = '_16'; break;
      case 17: this.tamContenido = '_17'; break;
      case 18: this.tamContenido = '_18'; break;
    }

  }
  buscar(ciudad:string){
    ciudad ? this.enrutador.navigate([`/alquileres/${ciudad}/lugares`]): this.enrutador.navigate([`/alquileres`]);
  }

}
