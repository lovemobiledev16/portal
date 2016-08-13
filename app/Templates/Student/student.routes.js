"use strict";
// Admin
var student_dashboard_1 = require('./Dashboard/student.dashboard');
var student_activities_1 = require('./Activities/student.activities');
exports.studentroutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: student_dashboard_1.StudentDashboard
    },
    {
        path: '**',
        component: student_activities_1.StudentActivities
    }
];
//# sourceMappingURL=student.routes.js.map