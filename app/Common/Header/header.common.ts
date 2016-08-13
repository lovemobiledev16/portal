import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMenu } from '../../Common/Menu/menu.common';
@Component({
  selector: 'header',
  templateUrl: './app/Common/Header/header.common.html',
  styleUrls: [''],
  directives: [CommonMenu]
})
export class CommonHeader {
  @Input()
  menuPath : string;
  bShowRightMenu: any = true;
  bShowRightMessage: any = true;
  bShowRightActivity: any = true;
  constructor(private router:Router) {
  }
  onShowRightMenu() {
    //this.bShowRightMenu = true;
    this.bShowRightMessage = true;
    this.bShowRightActivity = true;
    this.bShowRightMenu = !this.bShowRightMenu;
  }
  onShowRightMessage() {
    this.bShowRightMenu = true;
    //this.bShowRightMessage = true;
    this.bShowRightActivity = true;
    this.bShowRightMessage = !this.bShowRightMessage;
  }
  onShowRightActivity() {
    this.bShowRightMenu = true;
    this.bShowRightMessage = true;
    //this.bShowRightActivity = true;
    this.bShowRightActivity = !this.bShowRightActivity;
  }
}
