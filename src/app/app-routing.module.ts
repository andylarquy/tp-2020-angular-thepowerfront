import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'vuelos', component: VuelosComponent }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  VuelosComponent
];
