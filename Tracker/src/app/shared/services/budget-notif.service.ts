import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetNotifService {

  private notificationSource = new BehaviorSubject<string | null>(null);
 currentNotification = this.notificationSource.asObservable();

 constructor() { }

 showNotification(message: string) {
    this.notificationSource.next(message);
 }

 hideNotification() {
    this.notificationSource.next(null);
 }

  
}
