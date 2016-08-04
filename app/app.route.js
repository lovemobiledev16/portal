"use strict";
var router_1 = require('@angular/router');
var loginDlg_1 = require('./Admin/login/loginDlg');
var menu_1 = require('./Admin/Menu/menu');
var routes = [
    {
        path: 'login',
        component: loginDlg_1.Login
    }, {
        path: 'Dashboard',
        component: menu_1.AdminMenu
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map