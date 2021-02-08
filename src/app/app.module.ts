import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DebtListComponent } from './debt/debt-list/debt-list.component';
import { UserService } from './services/user.service';
import { DebtService } from './services/debt.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DebtListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService,
    DebtService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
