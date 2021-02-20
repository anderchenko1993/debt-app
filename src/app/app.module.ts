import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { DatePipe } from "@angular/common";
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";
import { AuthGuard } from './auth/auth.guard'; 

import { DebtListComponent } from './debt/debt-list/debt-list.component';
import { UserService } from './services/user.service';
import { DebtService } from './services/debt.service';
import { DebtDetailComponent } from './debt/debt-detail/debt-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DebtListComponent,
    DebtDetailComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
    SocialLoginModule,
  ],
  providers: [
    UserService,
    DebtService,
    AuthGuard,
    DatePipe,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '143401630435-316cmabn9daih30q39tu1og9u52i33de.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
