import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'studentdashboard',
  templateUrl: './app/Templates/Student/Dashboard/student.dashboard.html',
  styleUrls: ['']
})
export class StudentDashboard {
  constructor(private router:Router) {}
}
