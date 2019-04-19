import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { AlquileresModule } from './alquileres/alquileres.module';

const routes: Routes = [
  {path: '', redirectTo: '/alquileres', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
