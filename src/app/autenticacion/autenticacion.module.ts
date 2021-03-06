import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AutenticacionComponent } from './autenticacion.component';
import { AutenticacionService } from './compartido/autenticacion.service';
import { AutenticacionGuard } from './compartido/autenticacion.guard';
import { TokenInterceptor } from './compartido/token.interceptor';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [ AutenticacionGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [ AutenticacionGuard] }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    AutenticacionComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
    
  ],
  providers: [
    AutenticacionService,
    AutenticacionGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class AutenticacionModule { }