import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { TrackIncomeComponent } from './track-income/track-income.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';

const routes: Routes = [
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'track-income', component: TrackIncomeComponent },
  { path: 'update-income/:id', component: UpdateIncomeComponent },
  { path: '', component: IncomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
