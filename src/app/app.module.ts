import { LogInComponent } from './components/log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './components/user.service';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CreditComponent } from './components/credit/credit.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
