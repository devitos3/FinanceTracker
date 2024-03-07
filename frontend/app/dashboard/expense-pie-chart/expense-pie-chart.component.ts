import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseSService } from 'src/app/shared/services/expense-s.service'; 
import { Expense } from 'src/app/shared/models/expense.model'; 
import { Chart } from 'chart.js';

@Component({
 selector: 'app-expense-pie-chart',
 templateUrl: './expense-pie-chart.component.html',
 styleUrls: ['./expense-pie-chart.component.scss']
})
export class ExpensePieChartComponent implements OnInit {
 @ViewChild('pieCanvas', { static: true }) pieCanvas: ElementRef;
 pieChart: any;
 expenses: Expense[];

 constructor(private expenseService: ExpenseSService) { }

 ngOnInit() {
     // Retrieve userId from local storage
     const userId = localStorage.getItem('userID');
     if (userId) {
       this.expenseService.getExpensesByUserID(+userId).subscribe(
         data => {
           this.expenses = data;
           this.generatePieChart();
         },
         error => {
           console.error('Error fetching expenses:', error);
         }
       );
     } else {
       console.error('User ID not found in local storage.');
     }
 }

 generatePieChart() {
     const ctx = this.pieCanvas.nativeElement.getContext('2d');

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

     this.pieChart = new Chart(ctx, {
       type: 'pie',
       data: {
         labels: labels,
         datasets: [{
           label: 'Expense by Category',
           data: data,
           backgroundColor: [
            'rgba(255, 255, 204, 0.3)',
             'rgba(255, 99, 132, 0.2)', 
             'rgba(54, 162, 235, 0.2)',
           
           ],
           borderColor: [
            'rgba(255, 255, 0, 1)',
             'rgba(255, 99, 132, 1)', 
             'rgba(54, 162, 235, 1)', 
            
           ],
           borderWidth: 1
         }]
       },
       options: {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
           legend: {
             position: 'top',
           },
           title: {
             display: true,
             text: 'Expense by Category'
           }
         }
       }
     });
 }
}
