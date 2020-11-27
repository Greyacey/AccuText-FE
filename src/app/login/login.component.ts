import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
//import { Router, RouterLinkActive } from '@angular/router';
import { AccutextService } from '../accutext.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any = {
    email: '',
    password: ''
  };

  showError = false;
  message: string;

  constructor(private service: AccutextService, private router: Router) {
  }

  onClick(data)
    {
      console.warn(data)
      //this._router.navigate(['home'])
    }

  ngOnInit(): void {
  }

  loginUser() {
    if (this.loginData.email && this.loginData.password) {
      this.service.loginUser(this.loginData.email, this.loginData.password).pipe(tap(data => {
        const user = data.body;
        const authToken = data.Authorization;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('auth', authToken);

        this.message = 'Login successful';
        this.showError = true;

        this.router.navigateByUrl('/home');
      }), catchError(err => {
        console.log(err);
        this.message = err.error.message;
        this.showError = true;
        return of(err);
      })).subscribe();
    } else {
      this.showError = true;
      this.message = 'Invalid login data';
    }
  }

}
