import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'admin-subdashboard',
  templateUrl: './app/Admin/Menu/subDashboard/menu.html',
  styleUrls: ['./app/Admin/Menu/subDashboard/menu.css'],
  directives: [ DROPDOWN_DIRECTIVES , CORE_DIRECTIVES]
})


export class subDashboard {/*
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public toggled(open : boolean ):void {
    console.log("Dropdown is now:",open);
  }
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
    console.log($event);
  }*/
}
