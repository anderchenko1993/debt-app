import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebtComponent } from './debt/debt.component';
import { DebtListComponent } from './debt/debt-list/debt-list.component';
import { DebtDetailComponent } from './debt/debt-detail/debt-detail.component';

const routes: Routes = [
  { path: 'debts', component: DebtComponent },
  { path: 'debt/view/:id', component: DebtDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DebtComponent, DebtListComponent, DebtDetailComponent];
