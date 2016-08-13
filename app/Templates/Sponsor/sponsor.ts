import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CommonFooter } from '../../Common/Footer/footer.common';
import { CommonHeader } from '../../Common/Header/header.common';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'sponsor',
  templateUrl: './app/Templates/Sponsor/sponsor.html',
  styleUrls: ['./app/Templates/Sponsor/sponsor.css'],
  directives: [CommonFooter,CommonHeader,ROUTER_DIRECTIVES]
})
export class Sponsor {
  public path : string = "sponsor";
  constructor(private router:Router) {}
}
