import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreditComponent } from './components/credit/credit.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
    { path: 'ingreso', component: LogInComponent},
    { path: 'registro', component: RegisterComponent},
    { path: 'credito', component: CreditComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
