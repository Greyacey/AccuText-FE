import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcctextService {
  url = 'https://accutext-backend-api.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get(this.url);
  }

  saveData(data) {
    return this.http.post(this.url, data);
  }

  sendBulk() {

  }
}
