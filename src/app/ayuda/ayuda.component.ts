import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {
tema: Number;
  constructor() { }
  ngOnInit() {
    this.tema = 1;
  }
setTema(nuevoTema) {
 this.tema = nuevoTema;
}
    



}
