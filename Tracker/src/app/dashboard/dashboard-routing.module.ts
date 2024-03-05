import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IncomePieChartComponent } from './income-pie-chart/income-pie-chart.component';
import { IncomeBarGraphComponent } from './income-bar-graph/income-bar-graph.component';
import { ExpenseBarGraphComponent } from './expense-bar-graph/expense-bar-graph.component';
import { ExpensePieChartComponent } from './expense-pie-chart/expense-pie-chart.component';
import { IncomeComponent } from '../income/income.component';
import { ExpenseComponent } from '../expense/expense.component';
import { BudgetComponent } from '../budget/budget.component';

const routes: Routes = [

  {
    path: 'income-pie-chart',
    component: IncomePieChartComponent // Optional: Add a title for the route
  },
  { path: 'income-bar-graph', component: IncomeBarGraphComponent },
  { path: 'expense-bar-graph', component: ExpenseBarGraphComponent },
  { path: 'expense-pie-chart', component: ExpensePieChartComponent },
  { path: 'income', loadChildren: () => import('../income/income.module').then(m => m.IncomeModule) },
  { path: 'expense', loadChildren:()=> import('../expense/expense.module').then(m=>m.ExpenseModule)},

  { path: 'budget', loadChildren:()=> import('../budget/budget.module').then(m=>m.BudgetModule) },
  {path:'history',loadChildren:()=> import('../history/history.module').then(m=>m.HistoryModule)},
  {path:'Goal',loadChildren:()=> import('../goal/goal.module').then (m=>m.GoalModule)},



  { path: '', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
