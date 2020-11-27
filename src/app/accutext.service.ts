import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccutextService {
  apiUrl = environment.apiUrl;

  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  loginUser(email, password): Observable<any> {
    const payload = {
      email, password
    };
    return this.http.post<Observable<any>>(this.apiUrl + '/auth/login', payload);
  }

  sendBulkSMS(payload): Observable<any> {
    return this.http.post<Observable<any>>(this.apiUrl + '/sms/bulk', payload);
  }
}
