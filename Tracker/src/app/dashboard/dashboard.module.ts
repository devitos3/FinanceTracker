import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IncomePieChartComponent } from './income-pie-chart/income-pie-chart.component';
import { IncomeModule } from '../income/income.module';
import { IncomeBarGraphComponent } from './income-bar-graph/income-bar-graph.component';
import { ExpenseBarGraphComponent } from './expense-bar-graph/expense-bar-graph.component';
import { ExpensePieChartComponent } from './expense-pie-chart/expense-pie-chart.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    IncomePieChartComponent,
    IncomeBarGraphComponent,
    ExpenseBarGraphComponent,
    ExpensePieChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IncomeModule,
    RouterModule
  ]
})
export class DashboardModule { }
