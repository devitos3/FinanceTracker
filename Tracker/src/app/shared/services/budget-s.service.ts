import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetSService {

  private url='https://localhost:7008/api/Budgets';

  constructor(private http: HttpClient) { }

  getBudgets(): Observable<Budget[]> {
     return this.http.get<Budget[]>(this.url);
  }
 
  addBudget(budget: Budget): Observable<any> {
     return this.http.post(this.url, budget);
  }
 
  updateBudget(id: number, updatedBudget: Budget): Observable<any> {
     return this.http.put(`${this.url}/${id}`, updatedBudget);
  }
 
  deleteBudget(id: number): Observable<any> {
     return this.http.delete(`${this.url}/${id}`);
  }

  getBudgetById(id: string): Observable<Budget> {
   console.log(`${this.url}/${id}`);
   
 return this.http.get<Budget>(`${this.url}/${id}`);
 }

  getBudgetByUserID(userId:number):Observable<Budget[]>{
   return this.http.get<Budget[]>(`${this.url}/user/${userId}`);
  }
 }

