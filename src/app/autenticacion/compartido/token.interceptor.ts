import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AutenticacionService } from './autenticacion.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public aut: AutenticacionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.aut.getAutToken();
      if (token) {
        request = request.clone({
            setHeaders: {
              Authorization: 'Bearer ' + token // GET TOKEN HERE
            },
        });
      }
    return next.handle(request);
  }
}