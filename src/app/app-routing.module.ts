import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebtComponent } from './debt/debt.component';

const routes: Routes = [
  { path: 'debt', component: DebtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DebtComponent];
