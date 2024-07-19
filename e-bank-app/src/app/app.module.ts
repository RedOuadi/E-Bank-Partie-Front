import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { CardManagementComponent } from './pages/card-management/card-management.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthInterceptor } from '../app/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {FormsModule} from "@angular/forms";



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
    SignupComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
