import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const appRoutes: Routes = [
    { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
    { path: 'ingreso', component: LogInComponent},
    { path: 'registro', component: RegisterComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
