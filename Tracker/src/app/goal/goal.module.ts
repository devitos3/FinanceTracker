import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalComponent } from './goal.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { UpdateGoalComponent } from './update-goal/update-goal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GoalComponent,
    AddGoalComponent,
    UpdateGoalComponent
  ],
  imports: [
    CommonModule,
    GoalRoutingModule,
    NgCircleProgressModule,
    ReactiveFormsModule
  ]
})
export class GoalModule { }
