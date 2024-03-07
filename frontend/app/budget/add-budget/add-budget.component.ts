import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Budget } from 'src/app/shared/models/budget.model';
import { BudgetSService } from 'src/app/shared/services/budget-s.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss']
})
export class AddBudgetComponent {
  budgets: Budget[] = [];
  budgetForm: FormGroup;
  showMsg: boolean = false;
  userId:number;

  constructor(private budgetService:BudgetSService,private router:Router)
  {
    this.userId=parseInt(localStorage.getItem('userID'));

  }
  ngOnInit():void{

  this.budgetForm = new FormGroup({
    userID:new FormControl(this.userId),
    Category: new FormControl(''),
    BudgetLimit: new FormControl(''),
    CurrentSpending: new FormControl('')
  });
}

onSubmit() {
  if (this.budgetForm.valid) {
    const newBudget: Budget = this.budgetForm.value;
    this.budgetService.addBudget(newBudget).subscribe(() => {
      console.log('Budget added successfully');
      // Optionally, refresh the list of budgets
      this.showMsg=true;
      this.ngOnInit();
    });
  }
}

}
