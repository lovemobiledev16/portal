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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
    }
    MenuService.prototype.getMenu = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('./app/Data/' + id + '.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log(res);
                return resolve(res);
            }, function (err) {
                return reject(err);
            });
        });
    };
    MenuService.prototype.getAdminMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('./app/Data/admin.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log(res);
                return resolve(res);
            }, function (err) {
                return reject(err);
            });
        });
    };
    MenuService.prototype.getStudentMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('./app/Data/student.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log(res);
                return resolve(res);
            }, function (err) {
                return reject(err);
            });
        });
    };
    MenuService.prototype.getAlumniMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('./app/Data/alumni.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log(res);
                return resolve(res);
            }, function (err) {
                return reject(err);
            });
        });
    };
    MenuService.prototype.getSponsorMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('./app/Data/sponsor.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //console.log(res);
                return resolve(res);
            }, function (err) {
                return reject(err);
            });
        });
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map