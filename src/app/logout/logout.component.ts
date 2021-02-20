import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.authService.initState.subscribe(() => {
      this.authService.signOut().then(() => {
        this.router.navigate(['/login']);   
      });
    });
  }

}
