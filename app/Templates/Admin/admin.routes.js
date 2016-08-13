"use strict";
// Admin
var admin_dashboard_1 = require('./Dashboard/admin.dashboard');
var admin_enquiry_1 = require('./Admin_Communication/Enquiry/admin.enquiry');
exports.adminroutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: admin_dashboard_1.AdminDashboard
    },
    {
        path: 'enquiry',
        component: admin_enquiry_1.AdminEnquiry
    },
    {
        path: '**',
        component: admin_enquiry_1.AdminEnquiry
    }
];
//# sourceMappingURL=admin.routes.js.map