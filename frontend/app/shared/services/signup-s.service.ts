import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupSService {

  private url="https://localhost:7008/api/Users";


  constructor(private http:HttpClient) { }

  signupUser(user: any): Observable<any> {
    return this.http.post(`${this.url}`, user);
}
}
