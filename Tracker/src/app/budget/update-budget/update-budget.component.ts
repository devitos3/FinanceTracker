import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Budget } from 'src/app/shared/models/budget.model';
import { BudgetSService } from 'src/app/shared/services/budget-s.service';

@Component({
  selector: 'app-update-budget',
  templateUrl: './update-budget.component.html',
  styleUrls: ['./update-budget.component.scss']
})
export class UpdateBudgetComponent {
  budgetForm: FormGroup;
  budget: Budget;
 
  constructor(
     private budgetService: BudgetSService, 
     private route: ActivatedRoute,
     private router: Router
  ) {}
 
  ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get('id');
     this.budgetService.getBudgetById(id).subscribe(budget => { 
       this.budget = budget;
       this.budgetForm = new FormGroup({
         budgetID: new FormControl(this.budget.budgetID), 
         userID: new FormControl(this.budget.UserID),
         category: new FormControl(this.budget.category),
         budgetLimit: new FormControl(this.budget.budgetLimit),
         currentSpending: new FormControl(this.budget.currentSpending)
       });
     });
  }
 
  onSubmit() {
     if (this.budgetForm.valid) {
       this.budgetService.updateBudget(this.budget.budgetID, this.budgetForm.value).subscribe(() => { 
         console.log('Budget updated successfully');
        
         this.router.navigate(['/budget']); 
       });
     }
  }

}
