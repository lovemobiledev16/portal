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
var footer_common_1 = require('../../Common/Footer/footer.common');
var header_common_1 = require('../../Common/Header/header.common');
var router_2 = require('@angular/router');
var Admin = (function () {
    function Admin(router) {
        this.router = router;
        this.path = "admin";
    }
    Admin = __decorate([
        core_1.Component({
            selector: 'admin',
            templateUrl: './app/Templates/Admin/admin.html',
            styleUrls: ['./app/Templates/Admin/admin.css'],
            directives: [footer_common_1.CommonFooter, header_common_1.CommonHeader, router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Admin);
    return Admin;
}());
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map