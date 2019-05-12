import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyudaComponent } from './ayuda.component';

const routes: Routes = [
  {path: 'ayuda', component: AyudaComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AyudaRoutingModule { }
