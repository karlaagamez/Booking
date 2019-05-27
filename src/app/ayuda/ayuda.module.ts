import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyudaRoutingModule } from './ayuda-routing.module';
import { AyudaComponent } from './ayuda.component';
import { AyudaListaComponent } from './ayuda-lista/ayuda-lista.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
      AyudaComponent,
      AyudaListaComponent,
  ],
  imports: [
    CommonModule,
    AyudaRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class AyudaModule { }
