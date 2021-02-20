import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
    if( localStorage.getItem('user') ) {
      this.router.navigate(['/']);
    }
   }

  async signInWithGoogle() {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      if(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      }
    });
  }

}
