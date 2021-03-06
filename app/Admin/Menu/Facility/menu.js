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
var Facility = (function () {
    function Facility() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = [];
    }
    Facility.prototype.toggled = function (open) {
        console.log("Dropdown is now:", open);
    };
    Facility.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
        console.log($event);
    };
    Facility = __decorate([
        core_1.Component({
            selector: 'facility',
            templateUrl: './app/Admin/Menu/Facility/menu.html',
            styleUrls: ['./app/Admin/Menu//Facility/menu.css'],
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Facility);
    return Facility;
}());
exports.Facility = Facility;
//# sourceMappingURL=menu.js.map