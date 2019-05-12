import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyudaRoutingModule } from './ayuda-routing.module';
import { AyudaComponent } from './ayuda.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AyudaListaComponent } from './ayuda-lista/ayuda-lista.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';





@NgModule({
  declarations: [
      AyudaComponent,
      AyudaListaComponent,
      BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    AyudaRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule
  ]
})
export class AyudaModule { }
