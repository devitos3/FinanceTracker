import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Expense } from 'src/app/shared/models/expense.model';
import { ExpenseSService } from 'src/app/shared/services/expense-s.service';
import { ExpenseComponent } from '../expense.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {
 
    expenses: Expense[] = [];
    expenseForm: FormGroup;
    showMsg: boolean = false;
    userId:number;
    
  
    constructor(private expenseService: ExpenseSService, private router: Router) {}
  
    ngOnInit(): void {

      this.userId=parseInt(localStorage.getItem('userID'));
      
      this.expenseForm = new FormGroup({
       // UserID: new FormControl(''),
       userID:new FormControl(this.userId),
        category: new FormControl(''),
        paymentMethod: new FormControl(''),
        amount: new FormControl(''),
        date: new FormControl(''),
        isRecurring: new FormControl(false),
        recurringFrequency: new FormControl('')
      });
    }
  
    onSubmit() {
      if (this.expenseForm.valid) {
        const newExpense: Expense = this.expenseForm.value;
        this.expenseService.addExpense(newExpense).subscribe(() => {
          console.log('Expense added successfully');
          // Optionally, refresh the list of expenses
          this.showMsg = true;
          this.ngOnInit();
        });
      }
    }
  

}
