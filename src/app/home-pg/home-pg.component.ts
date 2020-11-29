import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { AccutextService } from '../accutext.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  showError = false;
  message: string;
  currentUser: any;
  numbersArray: any = [];

  constructor(private service: AccutextService, private  router: Router) {
  }

  onSubmit(formData) {
    formData.phoneNumbers = this.numbersArray;

    this.service.sendBulkSMS(formData).pipe(tap(data => {
      this.message = 'data.Message';
        this.showError = true;
        this.router.navigateByUrl('/home');
    }), catchError(err => {
      this.message = "Invalid Number(s)";
      this.showError = true;
      return of(err);
    })).subscribe();
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigateByUrl('/login');
    } else {
      this.currentUser = JSON.parse(user);
    }
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer> (evt.target);

    if (target.files.length !== 1) {
      throw new Error('Cannot use multile files');
    }

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      // @ts-ignore
      this.numbersArray = data[0].map(d => d.toString());
    };

    reader.readAsBinaryString(target.files[0]);

  }
  logoutUser(){
    localStorage.clear();
    this.router.navigateByUrl('/index');
  }


}
