import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { subDashboard } from './subDashboard/menu';
import { AdminCommunication } from './AdminandCommunication/menu';
import { HumanResources } from './HumanResources/menu';
import { Financial } from './Financial/menu';
import { Students } from './Students/menu';
import { Facility } from './Facility/menu';
import { Portals } from './Portals/menu';
@Component({
  selector: 'admin-menu',
  templateUrl: './app/Admin/Menu/menu.html',
  styleUrls: ['./app/Admin/Menu/menu.css'],
  directives: [ subDashboard , AdminCommunication, HumanResources, Financial, Students, Facility, Portals, DROPDOWN_DIRECTIVES , CORE_DIRECTIVES]
})


export class AdminMenu {
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
  }
}
