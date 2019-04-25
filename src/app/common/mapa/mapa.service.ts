import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';

@Injectable()
export class MapaService {

    private geoCodificador;
    private locacionCache: any = {};
    
    constructor(private camelizePipe: CamelizePipe){}
    private camelize(valor: string):string {
        return this.camelizePipe.transform(valor);
    }

    private cacheLocacion(locacion: string, coordenadas: any) {
        const camelizedLocation = this.camelize(locacion);
        this.locacionCache[camelizedLocation] = coordenadas;
    }
    private isLocacionCache(locacion): boolean {
        return this.locacionCache[this.camelize(locacion)];
    }
    public geoCodificarLocacion(locacion: string): Observable<any> {
        this.geoCodificador = new (<any>window).google.maps.Geocoder();
        return new Observable((observer)=>{
            if (this.isLocacionCache(locacion)) {
                observer.next(this.locacionCache[this.camelize(locacion)]);
            } else {
                this.geoCodificador.geocode({address: locacion}, (result,status) =>{
                    if (status === 'OK') {
                        const geometry = result[0].geometry.location;
                        const coordenadas = {lat: geometry.lat(), lng: geometry.lng()};
                        this.cacheLocacion(locacion, coordenadas);
                        observer.next(coordenadas);
                    } else {
                        observer.error('Lugar no localizado');
                    }
                    console.log(result);
                });
            }
            
        });
    }
}