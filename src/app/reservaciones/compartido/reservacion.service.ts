import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservacion } from './reservacion.model';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ReservacionService {
  
  constructor(private http: HttpClient){}

  public crearReservacion(reservacion: Reservacion): Observable<any> {
    return this.http.post('/api/v1/reservaciones',reservacion );
  }
}