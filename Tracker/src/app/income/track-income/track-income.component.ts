import { Component } from '@angular/core';
import { Income } from 'src/app/shared/models/income.model';
import { IncomeSService } from 'src/app/shared/services/income-s.service';
import { IncomeComponent } from '../income.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-income',
  templateUrl: './track-income.component.html',
  styleUrls: ['./track-income.component.scss']
})
export class TrackIncomeComponent {
  incomeForm: FormGroup;
filteredIncomes: Income[] = [];
userId:number;
incomes: Income[] = [];


constructor(private incomeService: IncomeSService, private router : Router) {
  this.userId = parseInt(localStorage.getItem('userID'));
}

ngOnInit(): void {
  // this.incomeService.getIncomes().subscribe((data: Income[]) => {
    this.incomeService.getIncomeByUserID(this.userId).subscribe((data: Income[]) => {
    this.incomes = data;
     this.filteredIncomes = data;
  });
 
  this.incomeForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    categoryFilter: new FormControl(''),
    
  });
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



}
