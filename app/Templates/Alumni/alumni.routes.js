"use strict";
// Admin
var alumni_dashboard_1 = require('./Dashboard/alumni.dashboard');
var alumni_address_1 = require('./Address/alumni.address');
exports.alumniroutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: alumni_dashboard_1.AlumniDashboard
    },
    {
        path: '**',
        component: alumni_address_1.AlumniAddress
    }
];
//# sourceMappingURL=alumni.routes.js.map