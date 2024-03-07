import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Goal } from 'src/app/shared/models/goal.model';
import { GoalService } from 'src/app/shared/services/goal-s.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent {
  goalForm: FormGroup;
 showMsg: boolean = false;
 userId: number;

 constructor(private goalService: GoalService, private router: Router) {}

 ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userID') || '0');

    this.goalForm = new FormGroup({
      userID: new FormControl(this.userId),
      goalName: new FormControl(''),
      currentAmount: new FormControl(''),
      targetAmount: new FormControl(''),
      goalStart: new FormControl(''),
      goalComplete: new FormControl(''),
      //goalID: new FormControl('') // 
    });
 }

 onSubmit() {
  if (this.goalForm.valid) {
    const formValues = this.goalForm.value;
    const newGoal: Goal = {
      ...formValues,
      goalStart: formValues.goalStart ? new Date(formValues.goalStart) : undefined,
      goalComplete: formValues.goalComplete ? new Date(formValues.goalComplete) : undefined,
    };
    this.goalService.addGoal(newGoal).subscribe(() => {
      console.log('Goal added successfully');
      this.showMsg = true;
    });
  }
}

}
