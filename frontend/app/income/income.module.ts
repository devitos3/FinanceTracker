import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackIncomeComponent } from './track-income/track-income.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';



@NgModule({
  declarations: [
    IncomeComponent,
    TrackIncomeComponent,
    AddIncomeComponent,
    UpdateIncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class IncomeModule { }
