import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccutextService } from '../accutext.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private accutext: AccutextService) {
  }

  onSubmit(data) {
    console.warn(data);
    this._router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
