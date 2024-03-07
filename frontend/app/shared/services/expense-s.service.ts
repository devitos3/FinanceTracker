import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Expense } from '../models/expense.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpenseSService {

  private url='https://localhost:7008/api/Expense';

  constructor(private http:HttpClient) { }

  getExpenses(): Observable<Expense[]>
  {
    return this.http.get<Expense[]>(this.url);
  }

  // expense-s.service.ts
  getExpenseById(id: string): Observable<Expense> {
    console.log(`${this.url}/${id}`);
    
  return this.http.get<Expense>(`${this.url}/${id}`);
 }
 

  addExpense(expense: Expense): Observable<any> {
    return this.http.post(this.url, expense);
  }

  updateExpense(id: number, updatedExpense: Expense): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.url}/${id}`, updatedExpense, { headers: headers });
}

 
 deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
 }
 getExpensesByUserID(userId: number): Observable<Expense[]> {
  return this.http.get<Expense[]>(`${this.url}/user/${userId}`);
}

}
