import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAlquileresComponent } from './lista-alquileres/lista-alquileres.component';
import { ListaAlquileresItemComponent } from './lista-alquileres-item/lista-alquileres-item.component';
import { AlquileresComponent } from './alquileres.component';
import { AppRoutingModule } from '../app-routing.module';
import { AlquileresService } from './compartido/alquileres.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { AlquilerDetallesComponent } from './alquiler-detalles/alquiler-detalles.component';

const routes: Routes = [
    {path: 'alquileres', 
    component: AlquileresComponent,
    children: [
        { path: '', component: ListaAlquileresComponent},
        { path: ':alquilerId', component: AlquilerDetallesComponent}
    ]
},
    
  ];
  
@NgModule({
    declarations: [
        ListaAlquileresItemComponent,
        ListaAlquileresComponent,
        AlquileresComponent,
        AlquilerDetallesComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        AlquileresService
    ]
})
export class AlquileresModule{}