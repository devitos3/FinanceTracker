import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExpenseComponent,
    UpdateExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ExpenseModule { }
