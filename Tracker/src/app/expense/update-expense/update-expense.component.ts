import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseSService } from 'src/app/shared/services/expense-s.service';
import { Expense } from 'src/app/shared/models/expense.model';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.scss']
})
export class UpdateExpenseComponent {
  expenseForm: FormGroup;
 expense: Expense;

 constructor(
    private expenseService: ExpenseSService,
    private route: ActivatedRoute,
    private router: Router
 ) {}

 ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.expenseService.getExpenseById(id).subscribe(expense => {
      this.expense = expense;
      this.expenseForm = new FormGroup({
        //expenseID: new FormControl({value: this.expense.expenseID, disabled: true}),
        expenseID:new FormControl(this.expense.expenseID),
        userID: new FormControl(this.expense.userID),
        category: new FormControl(this.expense.category),
        paymentMethod: new FormControl(this.expense.paymentMethod),
        amount: new FormControl(this.expense.amount),
        date: new FormControl(this.expense.date),
        isRecurring: new FormControl(this.expense.isRecurring),
        recurringFrequency: new FormControl(this.expense.recurringFrequency)
      });
    });
 }

 onSubmit() {
    if (this.expenseForm.valid) {
      this.expenseService.updateExpense(this.expense.expenseID, this.expenseForm.value).subscribe(() => {
        console.log('Expense updated successfully');
        // Optionally, navigate back to the expense list
        this.router.navigate(['/expense']);
      });
    }
 }

}
