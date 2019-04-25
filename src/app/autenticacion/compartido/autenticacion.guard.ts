import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AutenticacionService }      from './autenticacion.service';

@Injectable()
export class AutenticacionGuard implements CanActivate {

    private url: string;

    constructor(private aut: AutenticacionService,private enrutador: Router) {}

    private manejarEstadoAutenticacion(): boolean {
        if (this.loginOregistrar()) {
            this.enrutador.navigate(['/alquileres']);
            return false;
        }
        return true;
    }
    private noManejarEstadoAutenticacion(): boolean {
        if (this.loginOregistrar()) {
            return true;
        }
        this.enrutador.navigate(['/login']);
        return false;
    }
    
    private loginOregistrar(): boolean {
        if (this.url.includes('login') || this.url.includes('registro')){
            return true;
        }
        return false;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        if (this.aut.esAutenticado()) {
            return this.manejarEstadoAutenticacion();
        }
        return this.noManejarEstadoAutenticacion();
    }
}