import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';  // Chemin correct vers le composant navbar
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { CardManagementComponent } from './pages/card-management/card-management.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AccountManagementComponent,
    CardManagementComponent,
    MoneyTransferComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
