import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaComponent } from './mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaService } from './mapa.service';
import { CamelizePipe } from 'ngx-pipes';
@NgModule({
    declarations: [
        MapaComponent
    ],
    exports: [
        MapaComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBJj6V7oQmb_UsbC_gUcDIUhyB66lOPzGE'
        }),
        CommonModule
    ],
    providers: [
        MapaService,
        CamelizePipe
    ]
})
export class MapaModule{}