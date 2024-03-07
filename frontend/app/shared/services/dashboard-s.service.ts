import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Income } from '../models/income.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardSService {

  private url='https://localhost:7008/api/Income';

  constructor(private http: HttpClient) { }
  
  getIncomes(): Observable<Income[]> {
   return this.http.get<Income[]>(this.url);
  }



 
}
