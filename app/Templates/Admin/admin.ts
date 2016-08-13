import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonFooter } from '../../Common/Footer/footer.common';
import { CommonHeader } from '../../Common/Header/header.common';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'admin',
  templateUrl: './app/Templates/Admin/admin.html',
  styleUrls: ['./app/Templates/Admin/admin.css'],
  directives: [CommonFooter,CommonHeader,ROUTER_DIRECTIVES]
})
export class Admin {
  public path : string = "admin";
  constructor(private router:Router) {}
}
