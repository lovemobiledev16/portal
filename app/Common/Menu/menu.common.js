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
require('rxjs/add/observable/throw');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var menu_service_1 = require('../../Services/Menu/menu.service');
var router_1 = require('@angular/router');
var CommonMenu = (function () {
    function CommonMenu(menuService, route) {
        this.menuService = menuService;
        this.route = route;
        this.disabled = false;
        this.status = { isopen: false };
        this.bShowMenu = true;
    }
    CommonMenu.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    CommonMenu.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log(params);
            var id = params['part'];
            id = 'admin';
            _this.menuService.getMenu(_this.path).then(function (res) {
                //console.log(JSON.stringify(res));
                _this.subMenus = res;
                console.log(_this.subMenus);
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        });
    };
    CommonMenu.prototype.toggleDropdown = function ($event) {
        //$event.preventDefault();
        //$event.stopPropagation();
        this.status.isopen = !this.status.isopen;
        //console.log(this.menuService.get())
    };
    CommonMenu.prototype.onShowMenu = function () {
        this.bShowMenu = !this.bShowMenu;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommonMenu.prototype, "path", void 0);
    CommonMenu = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            templateUrl: './app/Common/Menu/menu.common.html',
            styleUrls: ['./app/Common/Menu/menu.common.css'],
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES],
            providers: [menu_service_1.MenuService]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.ActivatedRoute])
    ], CommonMenu);
    return CommonMenu;
}());
exports.CommonMenu = CommonMenu;
//# sourceMappingURL=menu.common.js.map