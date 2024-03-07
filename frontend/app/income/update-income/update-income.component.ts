import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Income } from 'src/app/shared/models/income.model';
import { IncomeSService } from 'src/app/shared/services/income-s.service';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.scss']
})
export class UpdateIncomeComponent {
  incomeForm: FormGroup;
 income: Income;

 constructor(
    private incomeService: IncomeSService, // Use IncomeService instead of ExpenseService
    private route: ActivatedRoute,
    private router: Router
 ) {}

 ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.incomeService.getIncomeById(id).subscribe(income => { // Use getIncomeById instead of getExpenseById
      this.income = income;
      this.incomeForm = new FormGroup({
        incomeID: new FormControl(this.income.incomeID), // Adjust the form control names as necessary
        userID: new FormControl(this.income.userID),
        category: new FormControl(this.income.category),
        paymentMethod: new FormControl(this.income.paymentMethod),
        amount: new FormControl(this.income.amount),
        date: new FormControl(this.income.date),
        isRecurring: new FormControl(this.income.isRecurring),
        recurringFrequency: new FormControl(this.income.recurringFrequency)
      });
    });
 }

 onSubmit() {
  if (this.incomeForm.valid) {
    this.incomeService.updateIncome(this.income.incomeID, this.incomeForm.value).subscribe(() => { // Use updateIncome instead of updateExpense
      console.log('Income updated successfully');
      // Optionally, navigate back to the income list
      this.router.navigate(['/income']); // Adjust the route as necessary
    });
  }
}

}
