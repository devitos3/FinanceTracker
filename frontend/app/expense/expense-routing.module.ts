import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

const routes: Routes = [

{ path: 'update-expense/:id', component: UpdateExpenseComponent },
{path:'add-expense',component:AddExpenseComponent},
{ path: '', component: ExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
