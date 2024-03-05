import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IncomeSService } from 'src/app/shared/services/income-s.service';
import { Income } from 'src/app/shared/models/income.model';
import { Chart } from 'chart.js';

@Component({
 selector: 'app-income-bar-graph',
 templateUrl: './income-bar-graph.component.html',
 styleUrls: ['./income-bar-graph.component.scss']
})
export class IncomeBarGraphComponent implements OnInit {
 @ViewChild('barCanvas', { static: true }) barCanvas: ElementRef;
 barChart: any;
 incomes: Income[];

 constructor(private incomeService: IncomeSService) { }

 ngOnInit() {
    // Retrieve userId from local storage
    const userId = localStorage.getItem('userID');
    if (userId) {
      this.incomeService.getIncomeByUserID(+userId).subscribe(
        data => {
          this.incomes = data;
          this.generateBarChart();
        },
        error => {
          console.error('Error fetching incomes:', error);
        }
      );
    } else {
      console.error('User ID not found in local storage.');
    }
 }

 generateBarChart() {
    const ctx = this.barCanvas.nativeElement.getContext('2d');

    // Group incomes by category and sum the amounts
    const groupedIncomes = this.incomes.reduce((acc, income) => {
      const key = income.category;
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += income.amount;
      return acc;
    }, {});

    // Prepare data for the chart
    const labels = Object.keys(groupedIncomes);
    const data = Object.values(groupedIncomes);

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Income by Category',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
