"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var menu_1 = require('./subDashboard/menu');
var menu_2 = require('./AdminandCommunication/menu');
var menu_3 = require('./HumanResources/menu');
var menu_4 = require('./Financial/menu');
var menu_5 = require('./Students/menu');
var menu_6 = require('./Facility/menu');
var menu_7 = require('./Portals/menu');
var AdminMenu = (function () {
    function AdminMenu() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    AdminMenu.prototype.toggled = function (open) {
        console.log("Dropdown is now:", open);
    };
    AdminMenu.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
        console.log($event);
    };
    AdminMenu = __decorate([
        core_1.Component({
            selector: 'admin-menu',
            templateUrl: './app/Admin/Menu/menu.html',
            styleUrls: ['./app/Admin/Menu/menu.css'],
            directives: [menu_1.subDashboard, menu_2.AdminCommunication, menu_3.HumanResources, menu_4.Financial, menu_5.Students, menu_6.Facility, menu_7.Portals, ng2_bootstrap_1.DROPDOWN_DIRECTIVES,
                common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminMenu);
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
//# sourceMappingURL=menu.js.map