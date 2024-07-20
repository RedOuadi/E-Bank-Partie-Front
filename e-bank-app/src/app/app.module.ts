import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { CardManagementComponent } from './pages/card-management/card-management.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { JwtInterceptor } from './jwt.interceptor';

import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    AccountManagementComponent,
    CardManagementComponent,
    MoneyTransferComponent,
    AuthenticationComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
