import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { AlquileresModule } from './alquileres/alquileres.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { AyudaModule } from  './ayuda/ayuda.module';
import { ToastrModule } from 'ngx-toastr';
import { GestionModule } from './gestion/gestion.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlquileresModule,
    AutenticacionModule,
    AyudaModule,
    GestionModule,
    ToastrModule.forRoot(),
    MatCardModule, MatSelectModule,MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatTooltipModule,
    BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
