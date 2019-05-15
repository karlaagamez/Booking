import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaAlquileresComponent } from './lista-alquileres/lista-alquileres.component';
import { ListaAlquileresItemComponent } from './lista-alquileres-item/lista-alquileres-item.component';
import { AlquileresComponent } from './alquileres.component';
import { AppRoutingModule } from '../app-routing.module';
import { AlquileresService } from './compartido/alquileres.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AlquilerDetallesComponent } from './alquiler-detalles/alquiler-detalles.component';
import { NgPipesModule } from 'ngx-pipes';
import { MayusculaPipe } from '../common/pipes/mayuscula.pipe';
import { Daterangepicker } from 'ng2-daterangepicker';
import { AutenticacionGuard } from '../autenticacion/compartido/autenticacion.guard';
import { AlquilerDetallesBookingComponent } from './alquiler-detalles/alquiler-detalles-booking/alquiler-detalles-booking.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

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
        AlquilerDetallesBookingComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        NgPipesModule,
        Daterangepicker,
        MatProgressSpinnerModule,
        MatButtonModule
    ],
    providers: [
        AlquileresService,
        AutenticacionGuard
    ]
})
export class AlquileresModule{}