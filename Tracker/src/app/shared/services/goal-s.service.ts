// goal.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal.model'; // Adjust the import path as necessary

@Injectable({
 providedIn: 'root'
})
export class GoalService {
 private url = 'https://localhost:7008/api/Goal';

 constructor(private http: HttpClient) {}

 getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.url);
 }

 addGoal(goal: Goal): Observable<any> {
    return this.http.post(this.url, goal);
 }

 getGoalById(id: string): Observable<Goal> {
    return this.http.get<Goal>(`${this.url}/${id}`);
 }

 updateGoal(id: number, updatedGoal: Goal): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.put(`${this.url}/${id}`, updatedGoal, { headers: headers });
}
 deleteGoal(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
 }

 getGoalByUserID(userId: number): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.url}/user/${userId}`);
 }
}
