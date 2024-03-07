import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { UpdateBudgetComponent } from './update-budget/update-budget.component';


@NgModule({
  declarations: [
    BudgetComponent,
    AddBudgetComponent,
    UpdateBudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BudgetModule { }
