

import { Component, OnInit } from '@angular/core';
import { Goal } from '../shared/models/goal.model';
import { GoalService } from '../shared/services/goal-s.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-goal',
 templateUrl: './goal.component.html',
 styleUrls: ['./goal.component.scss']
})

export class GoalComponent implements OnInit {
  goals: Goal[] = [];
  userId: number;
 
  constructor(private goalService:GoalService,private router:Router) {
     console.log("GoalComponent constructor called");
     this.userId = parseInt(localStorage.getItem('userID') || '0');
  }
 
  ngOnInit(): void {
     console.log("GoalComponent ngOnInit called");
     this.goalService.getGoalByUserID(this.userId).subscribe((data: Goal[]) => {
       this.goals = data;
       console.log("Goals fetched:", this.goals);
     });
  }
 
  
  calculateProgress(goal: Goal): number {
    console.log('Current Amount:', goal.currentAmount);
  console.log('Target Amount:', goal.targetAmount);
     console.log("Calculating progress for goal:", goal.goalName);
     return (goal.currentAmount / goal.targetAmount) * 100;
  }
  navigateToAddGoal() {
    this.router.navigate(['Goal/add-goal']); 
   }
   
   deleteGoal(id: number): void {
    this.goalService.deleteGoal(id).subscribe(() => {
       this.ngOnInit();
    });
   }
   


 }
 
