// notes.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes.model'; // Adjust the import path as necessary

@Injectable({
 providedIn: 'root'
})
export class NotesService {
 private url = 'https://localhost:7008/api/Notes'; // Adjust the URL as necessary

 constructor(private http: HttpClient) {}

 getNotes(): Observable<Notes[]> {
    return this.http.get<Notes[]>(this.url);
 }

 addNote(note: Notes): Observable<any> {
    return this.http.post(this.url, note);
 }

 getNoteById(id: number): Observable<Notes> {
    return this.http.get<Notes>(`${this.url}/${id}`);
 }

 updateNote(id: number, updatedNote: Notes): Observable<any> {
 const headers = new HttpHeaders().set('Content-Type', 'application/json');
 return this.http.put(`${this.url}/${id}`, updatedNote, { headers: headers });
}
 deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
 }

 getNotesByUserID(userId: number): Observable<Notes[]> {
    return this.http.get<Notes[]>(`${this.url}/user/${userId}`);
 }
}
