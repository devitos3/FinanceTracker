import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Budget } from '../shared/models/budget.model';
import { BudgetSService } from '../shared/services/budget-s.service';
import { BudgetNotifService } from '../shared/services/budget-notif.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {

  budgets: Budget[] = [];
 budgetForm: FormGroup;
 userId:number;

 constructor(public budgetService: BudgetSService, public notificationService:BudgetNotifService,public router:Router,private excelService:ExcelService) {
  this.userId = parseInt(localStorage.getItem('userID'));
 }

 ngOnInit(): void {
    this.budgetService.getBudgetByUserID(this.userId).subscribe((data: Budget[]) => {
      this.budgets = data;

   });
   this.budgetService.getBudgetByUserID(this.userId).subscribe(budgets => {
    budgets.forEach(budget => {
      if (budget.budgetLimit - budget.currentSpending <= 100) {
        this.notificationService.showNotification(`Your budget for ${budget.category} is nearing its limit.`);
      }
    });
  });

    this.budgetForm = new FormGroup({
      UserID: new FormControl(''),
      Category: new FormControl(''),
      BudgetLimit: new FormControl(''),
      CurrentSpending: new FormControl('')
    });
 }



exportBudgetToExcel(): void {
  this.excelService.generateExcel(this.budgets, 'budgets');
}
 navigateToAddBudget(): void {
  this.router.navigate(['budget/add-budget']);
}

routeToUpdateBudget(budgetID: number): void {
  this.router.navigate(['budget/update-budget', budgetID]);
 }


 deleteBudget(id: number): void {
    this.budgetService.deleteBudget(id).subscribe(() => {
      console.log('Budget deleted successfully');
      
      this.ngOnInit();
    });
 }

}
