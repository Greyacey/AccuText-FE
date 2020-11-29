import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AccutextService } from '../accutext.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginData: any = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: ''
  };

  showError = false;
  message: string;

  constructor(private router: Router, private service: AccutextService) {
  }
  ngOnInit(): void {
  }
  
  regUser() {
    if (this.loginData.email && this.loginData.password && this.loginData.first_name && this.loginData.last_name && this.loginData.phone_number) {
      this.service.regUser(this.loginData.first_name, this.loginData.last_name, this.loginData.phone_number, this.loginData.email, this.loginData.password).pipe(tap(data => {
        const user = data.body;

        localStorage.setItem('user', JSON.stringify(user));

        this.message = 'Registration successful';
        this.showError = true;

        this.router.navigateByUrl('/login');
      }), catchError(err => {
        console.log(err);
        this.message = err.error.message;
        this.showError = true;
        return of(err);
      })).subscribe();
    } else {
      this.showError = true;
      this.message = 'Invalid Register data';
    }
  }
}
