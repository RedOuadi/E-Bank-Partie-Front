import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent } from './components/user-list/user-list.component';

import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { CardManagementComponent } from './pages/card-management/card-management.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

const routes: Routes = [
 // { path: '', component: HomeComponent,pathMatch:"full" },
  { path: 'users', component: UserListComponent },
  { path: 'account-management', component: AccountManagementComponent },
  { path: 'card-management', component: CardManagementComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'authentication', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }