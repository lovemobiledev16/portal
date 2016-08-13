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
var router_1 = require('@angular/router');
var menu_common_1 = require('../../Common/Menu/menu.common');
var CommonHeader = (function () {
    function CommonHeader(router) {
        this.router = router;
        this.bShowRightMenu = true;
        this.bShowRightMessage = true;
        this.bShowRightActivity = true;
    }
    CommonHeader.prototype.onShowRightMenu = function () {
        //this.bShowRightMenu = true;
        this.bShowRightMessage = true;
        this.bShowRightActivity = true;
        this.bShowRightMenu = !this.bShowRightMenu;
    };
    CommonHeader.prototype.onShowRightMessage = function () {
        this.bShowRightMenu = true;
        //this.bShowRightMessage = true;
        this.bShowRightActivity = true;
        this.bShowRightMessage = !this.bShowRightMessage;
    };
    CommonHeader.prototype.onShowRightActivity = function () {
        this.bShowRightMenu = true;
        this.bShowRightMessage = true;
        //this.bShowRightActivity = true;
        this.bShowRightActivity = !this.bShowRightActivity;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommonHeader.prototype, "menuPath", void 0);
    CommonHeader = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: './app/Common/Header/header.common.html',
            styleUrls: [''],
            directives: [menu_common_1.CommonMenu]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CommonHeader);
    return CommonHeader;
}());
exports.CommonHeader = CommonHeader;
//# sourceMappingURL=header.common.js.map