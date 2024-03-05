import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { UpdateBudgetComponent } from './update-budget/update-budget.component';

const routes: Routes = [
  {path:'add-budget',component:AddBudgetComponent},
  { path: 'update-budget/:id', component: UpdateBudgetComponent },
  { path: '', component: BudgetComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
