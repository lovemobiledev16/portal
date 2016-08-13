import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonFooter } from '../../Common/Footer/footer.common';
import { CommonHeader } from '../../Common/Header/header.common';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'student',
  templateUrl: './app/Templates/Student/student.html',
  styleUrls: ['./app/Templates/Student/student.css'],
  directives: [CommonFooter,CommonHeader,ROUTER_DIRECTIVES]
})
export class Student {
  public path : string = "student";
  constructor(private router:Router) {}
}
