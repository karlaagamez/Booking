import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Alquiler } from './alquiler.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlquileresService {

  constructor(private http: HttpClient) { }

  public getAlquileresPorID(idAlquiler: String): Observable<any> {
    return this.http.get('/api/v1/alquileres/' + idAlquiler);
  }
  public obtenerAlquileres(): Observable<any> {
    return this.http.get('/api/v1/alquileres');
  }
  public obtenerAlquileresPorCiudad(ciudad: string): Observable<any> {
    return this.http.get(`/api/v1/alquileres?ciudad=${ciudad}`);
  }
  public publicarComentario(contenidoComentario: any): Observable<any> {
    return this.http.post('/api/v1/alquileres/comentario', contenidoComentario);
  }
  public crearAlquiler(alquiler: Alquiler): Observable<any> {
    return this.http.post('/api/v1/alquileres', alquiler);
  }
  public getAlquileresUsuario(): Observable <any> {
    return this.http.get('/api/v1/alquileres/gestionar');
  }
  public borrarAlquiler(alquilerId: string): Observable <any> {
    return this.http.delete(`/api/v1/alquileres/${alquilerId}`);
  }
}