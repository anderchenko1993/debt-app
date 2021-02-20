import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { DebtComponent } from './debt/debt.component';
import { DebtListComponent } from './debt/debt-list/debt-list.component';
import { DebtDetailComponent } from './debt/debt-detail/debt-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: DebtListComponent, canActivate: [AuthGuard] },
  { path: 'debts/add', component: DebtComponent, canActivate: [AuthGuard] },
  { path: 'debts/:id/edit', component: DebtComponent, canActivate: [AuthGuard] },
  { path: 'debts/:id', component: DebtDetailComponent, canActivate: [AuthGuard] },
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
