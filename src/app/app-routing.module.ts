import { LogInComponent } from './components/log-in/log-in.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const appRoutes: Routes = [
    { path: '', redirectTo: '/logIn', pathMatch: 'full' },
    { path: 'logIn', component: LogInComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
