import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { MenuService } from '../../Services/Menu/menu.service';
import { MenuItem, SubMenu } from '../../Objects/Menu/menu.object';
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'nav-menu',
    templateUrl: './app/Common/Menu/menu.common.html',
    styleUrls: ['./app/Common/Menu/menu.common.css'],
    directives: [ DROPDOWN_DIRECTIVES, CORE_DIRECTIVES ],
    providers: [MenuService]
})


export class CommonMenu implements OnInit {
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public subMenus:SubMenu[];
    sub: any;
    bShowMenu: any;
    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }
    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            console.log(params);
            let id = params['part'];
            this.menuService.getMenu(id).then(
                (res) => {
                    //console.log(JSON.stringify(res));
                    this.subMenus = res as SubMenu[];
                    console.log(this.subMenus);
                },
                (err) => {
                    console.log(JSON.stringify(err));
                }
            )
        });      
    }
    public toggleDropdown($event:MouseEvent):void {
        //$event.preventDefault();
        //$event.stopPropagation();
        this.status.isopen = !this.status.isopen;
        //console.log(this.menuService.get())
    }
    onShowMenu() {
        this.bShowMenu = !this.bShowMenu;   
    }
    constructor(private menuService:MenuService,private route: ActivatedRoute){
        this.bShowMenu = true;
    }
}
