import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debt-app';
  user!: SocialUser;
  loggedIn: boolean = false;
  collapsed: boolean = true;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.initState.subscribe(() => {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
      });
    }); 
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
