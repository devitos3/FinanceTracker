import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router:Router){}
  navigateToIncomeBarGraph() {
    this.router.navigate(['/dashboard/income-bar-graph']);
 }
 navigateToIncomePieChart() {
  this.router.navigate(['/dashboard/income-pie-chart']);
}
logout() {
  // Remove the token from local storage
  localStorage.removeItem('token');
  localStorage.removeItem('userID');
  // Navigate to the login page
  this.router.navigateByUrl('/login');
}


}
