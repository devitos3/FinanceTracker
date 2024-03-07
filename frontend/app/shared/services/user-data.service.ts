import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'https://localhost:7008/api/UserData';

  constructor(private http: HttpClient) { }

  getUserData(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
}

