import { Injectable } from '@angular/core';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router:Router) { }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    // Navigate to the login page
    this.router.navigateByUrl('/login');
   
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
