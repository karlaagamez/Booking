import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
const jwt = new JwtHelperService();
import * as moment from 'moment';
import 'rxjs/Rx';

class tokenDescifrado {
  exp: number = 0;
  username: string = '';
}


@Injectable()
export class AutenticacionService {
  private tokenDescifrado;
  constructor(private http: HttpClient){
    this.tokenDescifrado = JSON.parse(localStorage.getItem('booking_meta') ) || new tokenDescifrado();
  }

  private guardarToken(token: string): string{
    this.tokenDescifrado = jwt.decodeToken(token);
    localStorage.setItem('booking_autenticacion', token);
    localStorage.setItem('booking_meta', JSON.stringify(this.tokenDescifrado));
    return token;
  }
  private getExpiracion() {
    return moment.unix(this.tokenDescifrado.exp);
  }
  public registro(datosUsuario: any): Observable<any> {
      return this.http.post('/api/v1/usuarios/registro', datosUsuario);
  }
  public getAutToken(): string {
    return localStorage.getItem('booking_autenticacion');
  }
  public login(datosUsuario: any): Observable<any> {
    return this.http.post('/api/v1/usuarios/auth', datosUsuario).map((token: string) => this.guardarToken(token));
  }
  public logout() {
    localStorage.removeItem('booking_autenticacion'); //limpia el token del navegador
    localStorage.removeItem('booking_meta');
    this.tokenDescifrado = new tokenDescifrado(); //limpia la variable del token 
  }
  public esAutenticado(): boolean {
    return moment().isBefore(this.getExpiracion());
  }
  public getUsername(): string {
    return this.tokenDescifrado.username;
  }
  
}
