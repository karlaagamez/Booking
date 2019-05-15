import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from '../../autenticacion/compartido/autenticacion.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  temaActual = '';
  opened: boolean;  
  constructor(private aut: AutenticacionService,
              private enrutador: Router) { }

  ngOnInit() {
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

}
