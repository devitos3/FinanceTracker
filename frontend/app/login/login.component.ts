import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSuccess: boolean = false; // Add this
 loginFailed: boolean = false;

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.http.post('https://localhost:7008/api/Login', loginData).subscribe(
        (response: any) => {
          if (response.token) {
            // Store the token securely (e.g., in local storage)
            localStorage.setItem('token', response.token);
            localStorage.setItem('userID', response.user.userID)
            // console.log(response.token);
            // console.log(response.user.userID);

            console.log("CONGRATS YOU ARE IN");
            this.loginSuccess = true; 
            setTimeout(() => { // Delay the navigation
              this.router.navigate(['/dashboard']);
            }, 2000);
            // Navigate to the dashboard or home page
            
          } else {
            // Handle error response from the API
            // console.error('Authentication failed:', response);
            this.loginFailed = true; 
            setTimeout(() => { // Delay the navigation
              this.router.navigate(['/landing']);
            }, 2000);
            
          }
        },
        (error) => {
          // console.error('An error occurred:', error);
          this.loginFailed = true; 
          setTimeout(() => { // Delay the navigation
            this.router.navigate(['/landing']);
          }, 2000);
        }
      );
    } else {
      // Handle form validation errors
      // console.error('Form is invalid');
    }
  }
}