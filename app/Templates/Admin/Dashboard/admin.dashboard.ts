import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'admindashboard',
  templateUrl: './app/Templates/Admin/Dashboard/admin.dashboard.html',
  styleUrls: ['./app/Templates/Admin/Dashboard/admin.dashboard.css'],
  directives : [ ]
})
export class AdminDashboard {
  constructor(private router:Router) {}
  login() {
    console.log("Login");
    this.router.navigate(['portal/:admin']);
    return false;
  }
}
