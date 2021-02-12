import { Component } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debt-app';
  isLogged: boolean = false;  
  user: any;

  constructor(private authService: SocialAuthService) {     
    this.authService.authState.subscribe((user: any) => {
      if(user) {
        this.isLogged = true;     
        this.user = user;
      }
    });
  }

}
