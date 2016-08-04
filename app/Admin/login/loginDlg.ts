import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login-dlg',
  templateUrl: './app/Admin/login/loginDlg.html',
  styleUrls: ['./app/Admin/login/loginDlg.css']
})
export class Login {
  constructor(private router:Router) {}
  login() {
    console.log("Login");
    this.router.navigate(['Dashboard']);
    return false;
  }
}
