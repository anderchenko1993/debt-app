import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebtComponent } from './debt/debt.component';
import { DebtListComponent } from './debt/debt-list/debt-list.component';
import { DebtDetailComponent } from './debt/debt-detail/debt-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: DebtListComponent },
  { path: 'debts/add', component: DebtComponent },
  { path: 'debts/:id/edit', component: DebtComponent },
  { path: 'debts/:id', component: DebtDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DebtComponent, 
  DebtListComponent, 
  DebtDetailComponent,
  LoginComponent,
  LogoutComponent,
];
