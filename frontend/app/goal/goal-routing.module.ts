import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './goal.component';
import { AddGoalComponent } from './add-goal/add-goal.component';

const routes: Routes = [{path:'add-goal',component:AddGoalComponent},

  { path: '', component: GoalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalRoutingModule { }
