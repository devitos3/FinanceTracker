import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { IncomeSService } from 'src/app/shared/services/income-s.service';
import { Income } from 'src/app/shared/models/income.model';
import { Chart } from 'chart.js';

@Component({
 selector: 'app-income-pie-chart',
 templateUrl: './income-pie-chart.component.html',
 styleUrls: ['./income-pie-chart.component.scss']
})
export class IncomePieChartComponent implements OnInit {
 @ViewChild('pieCanvas', { static: true }) pieCanvas: ElementRef;
 pieChart: any;
 incomes: Income[];

 constructor(private incomeService: IncomeSService) { }

 ngOnInit() {
  const userId = localStorage.getItem('userID');
  if(userId){
    this.incomeService.getIncomeByUserID(+userId).subscribe(
      data => {
        this.incomes = data;
        this.generatePieChart();
      },
      error => {
        console.error('Error fetching incomes:', error);
      }
    );
  } else {
    console.error('User ID not found in local storage.');
  }

  }


 generatePieChart() {
    const ctx = this.pieCanvas.nativeElement.getContext('2d');

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

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Income by Category',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
 }
}

