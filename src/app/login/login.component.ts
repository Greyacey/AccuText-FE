import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  constructor(private _router: Router) { }

  onSubmit(data)
    {
      console.warn(data)
      this._router.navigate(['home'])
    }

  ngOnInit(): void {
  }

}
