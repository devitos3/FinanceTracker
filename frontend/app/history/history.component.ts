
import { Component } from '@angular/core';
import { UserDataService } from '../shared/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})


export class HistoryComponent {
  userData: any;
  savings: number = 0; // Initialize savings to 0
 
  constructor(private userDataService: UserDataService) { }
 
  ngOnInit(): void {
     const userId = localStorage.getItem('userID');
     if (userId) {
       this.loadUserData(+userId);
     } else {
       console.log("error");
     }
  }
 
  loadUserData(userId: number): void {
     this.userDataService.getUserData(userId).subscribe(data => {
       this.userData = data;
       this.calculateSavings();
     });
  }
 
  calculateSavings(): void {
     let incomeTotal = this.userData.incomes.reduce((sum, income) => sum + income.amount, 0);
     let expenseTotal = this.userData.expenses.reduce((sum, expense) => sum + expense.amount, 0);
     this.savings = incomeTotal - expenseTotal;
  }
 }
 
