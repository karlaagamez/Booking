import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-alquileres-item',
  templateUrl: './lista-alquileres-item.component.html',
  styleUrls: ['./lista-alquileres-item.component.scss']
})
export class ListaAlquileresItemComponent implements OnInit {
  @Input() alquilerActual: any;

  constructor() { }

  ngOnInit() {
  }

}
