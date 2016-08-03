import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'students',
  templateUrl: './app/Admin/Menu/Students/menu.html',
  styleUrls: ['./app/Admin/Menu/Students/menu.css'],
  directives: [ DROPDOWN_DIRECTIVES , CORE_DIRECTIVES]
})


export class Students {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items: Array<string> = [];
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
