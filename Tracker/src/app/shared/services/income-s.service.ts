import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from '../models/income.model';import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IncomeSService {


private url='https://localhost:7008/api/Income';

constructor(private http: HttpClient) { }

getIncomes(): Observable<Income[]> {
 return this.http.get<Income[]>(this.url);
}

addIncome(income: Income): Observable<any> {
 return this.http.post(this.url, income);
}

getIncomeById(id: string): Observable<Income> {
  console.log(`${this.url}/${id}`);
  
return this.http.get<Income>(`${this.url}/${id}`);
}
updateIncome(id: number, updatedIncome: Income): Observable<any> {
 return this.http.put(`${this.url}/${id}`, updatedIncome);
}

deleteIncome(id: number): Observable<any> {
 return this.http.delete(`${this.url}/${id}`);
}

getIncomeByUserID(userId: number): Observable<Income[]> {
  return this.http.get<Income[]>(`${this.url}/user/${userId}`);
}

}
