import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AutenticacionGuard } from '../autenticacion/compartido/autenticacion.guard';

import { GestionComponent } from './gestion.component';
import { GestionarReservacionComponent } from './gestionar-reservacion/gestionar-reservacion.component';
import { GestionarAlquilerComponent } from './gestionar-alquiler/gestionar-alquiler.component';
import { Modal2Component } from './gestionar-alquiler/gestionar-alquiler-reservacion/modal/modal2.component';

import {FormatoFechaPipe} from '../common/pipes/formato-fecha.pipe';

import { AlquileresService } from '../alquileres/compartido/alquileres.service';
import { ReservacionService } from '../reservaciones/compartido/reservacion.service';

import { NgPipesModule } from 'ngx-pipes';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GestionarAlquilerReservacionComponent } from './gestionar-alquiler/gestionar-alquiler-reservacion/gestionar-alquiler-reservacion.component';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
    {
        path: 'gestionar',
        component: GestionComponent,
        children: [
            { path: 'alquileres', component: GestionarAlquilerComponent, canActivate: [AutenticacionGuard] },
            { path: 'reservaciones', component: GestionarReservacionComponent, canActivate: [AutenticacionGuard] }
        ]

    }

]; 

@NgModule({
    declarations: [
        GestionComponent,
        GestionarReservacionComponent,
        GestionarAlquilerComponent,
        FormatoFechaPipe,
        GestionarAlquilerReservacionComponent,
        Modal2Component

    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        NgPipesModule,
        MatDialogModule

    ],
    entryComponents: [
        Modal2Component
    ],
    providers: [
        AutenticacionGuard,
        ReservacionService,
        AlquileresService
    ],
})
export class GestionModule { }