import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './app/Common/Auth/Login/login.common.html',
  styleUrls: ['./app/Common/Auth/Login/login.common.css']
})
export class LoginComponent {
  constructor(private router:Router) {}
  login() {
    console.log("Login");
    this.router.navigate(['admin']);
    return false;
  }
}
