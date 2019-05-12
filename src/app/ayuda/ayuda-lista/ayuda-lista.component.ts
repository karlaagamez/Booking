import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ayuda-lista',
  templateUrl: './ayuda-lista.component.html',
  styleUrls: ['./ayuda-lista.component.css']
})
export class AyudaListaComponent implements OnInit {
  @Input() tema: Number;
  
  constructor() { }

  ngOnInit() {
  }

}
