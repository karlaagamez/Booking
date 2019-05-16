import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListaAlquileresComponent } from './lista-alquileres/lista-alquileres.component';
import { ListaAlquileresItemComponent } from './lista-alquileres-item/lista-alquileres-item.component';
import { AlquileresComponent } from './alquileres.component';

import { AlquileresService } from './compartido/alquileres.service';
import { AyudanteService } from '../common/servicio/ayudante.service';
import { ReservacionService } from '../reservaciones/compartido/reservacion.service';

import { Routes, RouterModule, Router } from '@angular/router';
import { AlquilerDetallesComponent } from './alquiler-detalles/alquiler-detalles.component';
import { NgPipesModule } from 'ngx-pipes';
import { MayusculaPipe } from '../common/pipes/mayuscula.pipe';
import { Daterangepicker } from 'ng2-daterangepicker';
import { AutenticacionGuard } from '../autenticacion/compartido/autenticacion.guard';
import { AlquilerDetallesBookingComponent } from './alquiler-detalles/alquiler-detalles-booking/alquiler-detalles-booking.component';
import { ModalComponent } from './alquiler-detalles/alquiler-detalles-booking/modal/modal.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
    {path: 'alquileres', 
    component: AlquileresComponent,
    children: [
        { path: '', component: ListaAlquileresComponent},
        { path: ':alquilerId', component: AlquilerDetallesComponent, canActivate: [AutenticacionGuard]}
    ]
},
    
];
  
@NgModule({
    declarations: [
        ListaAlquileresItemComponent,
        ListaAlquileresComponent,
        AlquileresComponent,
        AlquilerDetallesComponent,
        MayusculaPipe,
        AlquilerDetallesBookingComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        NgPipesModule,
        Daterangepicker,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatDividerModule,
        FormsModule
    ],
    entryComponents: [
        ModalComponent
       ],
    providers: [
        AlquileresService,
        AyudanteService,
        ReservacionService,
        AutenticacionGuard
    ]
})
export class AlquileresModule{}