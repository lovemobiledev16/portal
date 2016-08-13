import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonFooter } from '../../Common/Footer/footer.common';
import { CommonHeader } from '../../Common/Header/header.common';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'alumni',
  templateUrl: './app/Templates/Alumni/alumni.html',
  styleUrls: ['./app/Templates/Alumni/alumni.css'],
  directives: [CommonFooter,CommonHeader,ROUTER_DIRECTIVES]
})
export class Alumni {
  public path : string = "alumni";
  constructor(private router:Router) {}
}
