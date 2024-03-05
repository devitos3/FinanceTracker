import { Component } from '@angular/core';
import { Income } from 'src/app/shared/models/income.model';
import { FormControl, FormGroup } from '@angular/forms';
import { IncomeSService } from 'src/app/shared/services/income-s.service';


@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent {
  incomes: Income[] = [];
  showMsg: boolean = false;
incomeForm: FormGroup;
filteredIncomes: Income[] = [];
userId:number;

constructor(private incomeService: IncomeSService) {}

ngOnInit(): void {
  this.userId=parseInt(localStorage.getItem('userID'));
 this.incomeService.getIncomes().subscribe((data: Income[]) => {
    this.incomes = data;
    
    this.filteredIncomes = this.incomes;
 });

 this.incomeForm = new FormGroup({
   
    // UserID: new FormControl(''),
    UserID:new FormControl(this.userId),
    category: new FormControl(''),
    paymentMethod: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    isRecurring: new FormControl(false),
    recurringFrequency: new FormControl('')
 });


}

onSubmit() {
  if (this.incomeForm.valid) {
     const newIncome: Income = this.incomeForm.value;
     this.incomeService.addIncome(newIncome).subscribe(() => {
       console.log('Income added successfully');
       // Optionally, refresh the list of incomes
       this.showMsg = true;
       this.ngOnInit();
     });
  }
 }

 
}
