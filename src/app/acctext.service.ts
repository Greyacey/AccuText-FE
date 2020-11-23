import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AcctextService {
  url="http://localhost:3000/history"

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }
  saveData(data)
  {
     return this.http.post(this.url,data)
  }
}
