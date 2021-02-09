import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { DebtListComponent } from './debt/debt-list/debt-list.component';
import { UserService } from './services/user.service';
import { DebtService } from './services/debt.service';
import { DebtDetailComponent } from './debt/debt-detail/debt-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DebtListComponent,
    DebtDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
  ],
  providers: [
    UserService,
    DebtService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
