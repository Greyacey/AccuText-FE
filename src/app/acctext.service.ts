import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AcctextService {
  url="http://localhost:3000/history"
  apiUrl : string ='https://accutext-backend-api.herokuapp.com/auth/login';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveData(test)
  {
     return this.http.post(this.url,test)
  }
  //onSubmit(data): Observable<any> {
  //  let API_URL = '${this.apiUrl}/users';
  //  return this.http.post(API_URL, data)
  //}
  onClick(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data)
  }
}
