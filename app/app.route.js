"use strict";
var router_1 = require('@angular/router');
var menu_common_1 = require('./Common/Menu/menu.common');
var login_common_1 = require('./Common/Auth/Login/login.common');
// Admin
var admin_dashboard_1 = require('./Templates/Admin/Dashboard/admin.dashboard');
var routes = [
    {
        path: 'login',
        component: login_common_1.LoginComponent
    },
    {
        path: 'portal/:part',
        component: menu_common_1.CommonMenu
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'admin/dashboard',
        component: admin_dashboard_1.AdminDashboard
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map