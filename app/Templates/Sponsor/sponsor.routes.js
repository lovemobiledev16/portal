"use strict";
// Admin
var sponsor_dashboard_1 = require('./Dashboard/sponsor.dashboard');
var sponsor_accounts_1 = require('./Accounts/sponsor.accounts');
exports.sponsorroutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: sponsor_dashboard_1.SponsorDashboard
    },
    {
        path: '**',
        component: sponsor_accounts_1.SponsorAccounts
    }
];
//# sourceMappingURL=sponsor.routes.js.map