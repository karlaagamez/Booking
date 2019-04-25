import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Alquiler } from './alquiler.model';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AlquileresService {
  
  constructor(private http: HttpClient){}

  public getAlquileresPorID(idAlquiler: String): Observable<any> {
    return this.http.get('/api/v1/alquileres/' + idAlquiler);
  }
  public obtenerAlquileres(): Observable<any> {
    return this.http.get('/api/v1/alquileres');
  }
}