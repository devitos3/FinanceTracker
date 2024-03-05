import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseSService } from '../shared/services/expense-s.service';
import { Expense } from '../shared/models/expense.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[] = [];
  expenseForm: FormGroup;
  totalExpenses: number = 0;
  userId: number;
  currentNotification:any;

  constructor(private expenseService: ExpenseSService, private router: Router, private excelService:ExcelService) {
    this.userId = parseInt(localStorage.getItem('userID'));
  }

  ngOnInit(): void {
   
    this.expenseService.getExpensesByUserID(this.userId).subscribe((data: Expense[]) => {
      this.expenses = data;
      this.totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
      this.checkAndNotifyRecurringExpenses();
      
   });

    this.expenseForm = new FormGroup({
      UserID: new FormControl(''),
      category: new FormControl(''),
      paymentMethod: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl(''),
      isRecurring: new FormControl(false),
      recurringFrequency: new FormControl('')
    });
  }

  exportExpenseToExcel(): void {
    this.excelService.generateExcel(this.expenses, 'expenses');
  }
  

  onSubmit() {
    if (this.expenseForm.valid) {
      const newExpense: Expense = this.expenseForm.value;
      this.expenseService.addExpense(newExpense).subscribe(() => {
        console.log('Expense added successfully');
       
        this.ngOnInit();
      });
    }
  }

  routeToUpdateExpense(expenseId: number): void {
    this.router.navigate(['expense/update-expense', expenseId]);
   }
   
   navigateToAddExpense(): void {
    this.router.navigate(['expense/add-expense']);
 }



 deleteExpense(id: number): void {
  this.expenseService.deleteExpense(id).subscribe(() => {
    console.log('Expense deleted successfully');
    
    this.ngOnInit();
  });
}




 checkAndNotifyRecurringExpenses(): void {
  const today = new Date();
  const todayDay = today.getDate(); // Get the day of the month

  this.expenses.forEach(expense => {
    if (expense.isRecurring) {
      const expenseDate = new Date(expense.date);
      const expenseDay = expenseDate.getDate(); // Get the day of the month for the expense

      // Check if the day of the month for the expense matches today's day
      if (expenseDay === todayDay) {
        // Display notification
        this.displayNotification(expense);
      }
    }
  });
}


 displayNotification(expense: Expense): void {
    this.currentNotification = expense;
    
    setTimeout(() => {
      this.currentNotification = null;
    }, 50000); 
 }
}



