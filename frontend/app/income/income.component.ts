import { Component } from '@angular/core';
import { Income } from '../shared/models/income.model';
import { FormControl, FormGroup } from '@angular/forms';
import { IncomeSService } from '../shared/services/income-s.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {
  incomes: Income[] = [];
  totalIncome: number = 0;
  userId: number;
incomeForm: FormGroup;
filteredIncomes: Income[] = [];

constructor(private incomeService: IncomeSService, private router : Router,private excelService:ExcelService) {
   this.userId = parseInt(localStorage.getItem('userID'));
}


ngOnInit(): void {
   this.incomeService.getIncomeByUserID(this.userId).subscribe((data: Income[]) => {
     this.incomes = data;
     this.totalIncome = this.incomes.reduce((sum, income) => sum + income.amount, 0);
     this.filteredIncomes = this.incomes;
   });
 }
 
 exportIncomesToExcel(): void {
   this.excelService.generateExcel(this.incomes, 'incomes');
 }
 


routeToUpdateIncome(incomeId: number): void {
   this.router.navigate(['income/update-income', incomeId]);
  }


navigateToAddIncome(): void {
   this.router.navigate(['income/add-income']);
}

navigateToTrackIncome(): void {
   this.router.navigate(['income/track-income']);
}

sortIncomes(): void {
  this.incomes.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}



searchIncomes(): void {
   const startDate = new Date(this.incomeForm.get('startDate').value);
   const endDate = new Date(this.incomeForm.get('endDate').value);
   const categoryFilter = this.incomeForm.get('categoryFilter').value;
  
   this.filteredIncomes = this.incomes.filter(income => {
      const incomeDate = new Date(income.date);
      const matchesDate = incomeDate >= startDate && incomeDate <= endDate;
      const matchesCategory = categoryFilter ? income.category === categoryFilter : true;
      return matchesDate && matchesCategory;
   });
  }
  
deleteIncome(id: number): void {
 this.incomeService.deleteIncome(id).subscribe(() => {
    console.log('Income deleted successfully');
    
    this.ngOnInit();
 });
}


}
