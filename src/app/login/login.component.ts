import { Component, OnInit } from '@angular/core';
//import { Router, RouterLinkActive } from '@angular/router';
import { AcctextService } from '../acctext.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  constructor(private accutext: AcctextService) { }

  onClick(data)
    {
      console.warn(data)
      //this._router.navigate(['home'])
    }

  ngOnInit(): void {
  }

}
