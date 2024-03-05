import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseSService } from 'src/app/shared/services/expense-s.service';
import { Expense } from 'src/app/shared/models/expense.model';
import{Chart} from 'chart.js';

@Component({
  selector: 'app-expense-bar-graph',
  templateUrl: './expense-bar-graph.component.html',
  styleUrls: ['./expense-bar-graph.component.scss']
})
export class ExpenseBarGraphComponent {
  @ViewChild('barCanvas', { static: true }) barCanvas: ElementRef;
  barChart: any;
  expenses: Expense[];
 
  constructor(private expenseService: ExpenseSService) { }
 
  ngOnInit() {
     // Retrieve userId from local storage
     const userId = localStorage.getItem('userID');
     if (userId) {
       this.expenseService.getExpensesByUserID(+userId).subscribe(
         data => {
           this.expenses = data;
           this.generateBarChart();
         },
         error => {
           console.error('Error fetching expenses:', error);
         }
       );
     } else {
       console.error('User ID not found in local storage.');
     }
  }
 
  generateBarChart() {
     const ctx = this.barCanvas.nativeElement.getContext('2d');
 
     // Group expenses by category and sum the amounts
     const groupedExpenses = this.expenses.reduce((acc, expense) => {
       const key = expense.category;
       if (!acc[key]) {
         acc[key] = 0;
       }
       acc[key] += expense.amount;
       return acc;
     }, {});
 
     // Prepare data for the chart
     const labels = Object.keys(groupedExpenses);
     const data = Object.values(groupedExpenses);
 
     this.barChart = new Chart(ctx, {
       type: 'bar',
       data: {
         labels: labels,
         datasets: [{
           label: 'Expense by Category',
           data: data,
           backgroundColor: 'rgba(186, 150, 216, 0.3)', // Pastel Purple for background
          borderColor: 'rgba(138, 43, 226, 1)', // Dark Purple for border
           borderWidth: 1
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
  }

}
