import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMenu } from "app/Common/Menu/menu.common";
@Component({
  selector: 'login',
  templateUrl: './app/Templates/Admin/Dashboard/admin.dashboard.html',
  styleUrls: ['./app/Templates/Admin/Dashboard/admin.dashboard.css']
})
export class AdminDashboard {
  constructor(private router:Router) {}
  login() {
    console.log("Login");
    this.router.navigate(['portal/:admin']);
    return false;
  }
}
