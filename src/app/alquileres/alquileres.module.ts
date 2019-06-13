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
import { BuscarAlquilerComponent } from './buscar-alquiler/buscar-alquiler.component';
import { AlquilerCrearComponent } from './alquiler-crear/alquiler-crear.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';



const routes: Routes = [
    {
        path: 'alquileres',
        component: AlquileresComponent,
        children: [
            { path: '', component: ListaAlquileresComponent },
            { path: 'nuevo', component: AlquilerCrearComponent, canActivate: [AutenticacionGuard]  },
            { path: ':alquilerId', component: AlquilerDetallesComponent },
            { path: ':ciudad/lugares', component: BuscarAlquilerComponent }

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
        ModalComponent,
        BuscarAlquilerComponent,
        AlquilerCrearComponent
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
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatSelectModule,
        MatCheckboxModule,
        MatRadioModule
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
export class AlquileresModule { }