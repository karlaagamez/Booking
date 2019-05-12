import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ayuda-lista',
  templateUrl: './ayuda-lista.component.html',
  styleUrls: ['./ayuda-lista.component.scss']
})
export class AyudaListaComponent implements OnInit {
  @Input() tema: Number;
  panelOpenState = false;
  step = 0;

  constructor() { }

  ngOnInit() {
  }
  
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
