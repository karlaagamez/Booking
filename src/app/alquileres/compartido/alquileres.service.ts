import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Alquiler } from './alquiler.model';

export class AlquileresService {
    private alquileres: Alquiler[] = [{
      id: "43",
      titulo: "departamento en la playa",
      tipo: "departamento",
      ciudad: "Guasave",
      estado: "Sinaloa",
      calle: "Boulevard Tiburon",
      imagen: "http://via.placeholder.com/350x250",
      cuartos: 3,
      noPersonas: 6,
      camas: 3,
      baños: 3,
      precioNoche: 1500,
      cocina: "Si",
      cuartoLavado: "Si",
      sala: "Si",
      comedor: "Si",
      descripcion: "Bonito departamento para toda la familia en la playa",
      creacion: "23/02/2019",
      compartido: false,
        
      },
      {
        id: "2",
      titulo: "casa en acapulco",
      tipo: "casa",
      ciudad: "Acapulco",
      estado: "Guerrero",
      calle: "Boulevard Tiburon",
      imagen: "http://via.placeholder.com/350x250",
      cuartos: 3,
      noPersonas: 6,
      camas: 3,
      baños: 3,
      precioNoche: 1500,
      cocina: "Si",
      cuartoLavado: "Si",
      sala: "Si",
      comedor: "Si",
      descripcion: "Bonito departamento para toda la familia en la playa",
      creacion: "23/02/2019",
      compartido: false,
      },
      {
        id: "43",
        titulo: "departamento en la playa",
        tipo: "departamento",
        ciudad: "Guasave",
        estado: "Sinaloa",
        calle: "Boulevard Tiburon",
        imagen: "http://via.placeholder.com/350x250",
        cuartos: 3,
        noPersonas: 6,
        camas: 3,
        baños: 3,
        precioNoche: 1500,
        cocina: "Si",
        cuartoLavado: "Si",
        sala: "Si",
        comedor: "Si",
        descripcion: "Bonito departamento para toda la familia en la playa",
        creacion: "23/02/2019",
        compartido: false,
      },
      {
        id: "43",
      titulo: "departamento en la playa",
      tipo: "departamento",
      ciudad: "Guasave",
      estado: "Sinaloa",
      calle: "Boulevard Tiburon",
      imagen: "http://via.placeholder.com/350x250",
      cuartos: 3,
      noPersonas: 6,
      camas: 3,
      baños: 3,
      precioNoche: 1500,
      cocina: "Si",
      cuartoLavado: "Si",
      sala: "Si",
      comedor: "Si",
      descripcion: "Bonito departamento para toda la familia en la playa",
      creacion: "23/02/2019",
      compartido: false,
      }];
    
      public getAlquileresPorID(idAlquiler: String): Observable<Alquiler> {
        return new Observable<Alquiler>((observer) =>{
          setTimeout(()=>{
            const alquilerEncontrado = this.alquileres.find((alquiler) => {
              return alquiler.id == idAlquiler;
            });
            observer.next(alquilerEncontrado);
          },2000);
        });
      }
      public obtenerAlquileres(): Observable<Alquiler[]> {
        return new Observable<Alquiler[]>((observer) => {
          setTimeout( () => {
            observer.next(this.alquileres);
          }, 3000);          
        }); 
    }
}