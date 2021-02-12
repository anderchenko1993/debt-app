import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: SocialAuthService) { 
    this.authService.authState.subscribe((user) => {
      if(user) 
        this.router.navigate(['/']);
    }, error => {
      alert(error.message);
    });
  }

  ngOnInit(): void {
    // if( localStorage.getItem('user') ) 
    //   this.router.navigate(['/']);
   }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
