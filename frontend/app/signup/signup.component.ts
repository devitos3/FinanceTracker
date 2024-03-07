import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';
import { SignupSService } from '../shared/services/signup-s.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;
  loginSuccess: boolean = false; 
 loginFailed: boolean = false;
 

 constructor(private authService: SignupSService,private router:Router) { }


 
 ngOnInit() {
  this.signupForm = new FormGroup({
    Username: new FormControl(''),
    Email: new FormControl(''),
    PasswordHash: new FormControl('')
  });
}

signup() {
  if (this.signupForm.valid) {
    const user = this.signupForm.value;
    this.authService.signupUser(user).subscribe(
      data => {
        // console.log('Success', data);
        this.loginSuccess = true; 
            setTimeout(() => { // Delay the navigation
              this.router.navigate(['/login']);
            }, 2000);
    

 
     
      },
      error => {
        console.log('Error', error);
        this.loginFailed = true; 
          setTimeout(() => { // Delay the navigation
            this.router.navigate(['/landing']);
          }, 2000);
        }
    );
        
      
    
  }
}

}
