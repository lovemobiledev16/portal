"use strict";
var router_1 = require('@angular/router');
var login_common_1 = require('./Common/Auth/Login/login.common');
// Admin
var admin_1 = require('./Templates/Admin/admin');
var admin_routes_1 = require('./Templates/Admin/admin.routes');
// Alumni
var alumni_1 = require('./Templates/Alumni/alumni');
var alumni_routes_1 = require('./Templates/Alumni/alumni.routes');
// Sponsor
var sponsor_1 = require('./Templates/Sponsor/sponsor');
var sponsor_routes_1 = require('./Templates/Sponsor/sponsor.routes');
// Student
var student_1 = require('./Templates/Student/student');
var student_routes_1 = require('./Templates/Student/student.routes');
var routes = [
    {
        path: 'login',
        component: login_common_1.LoginComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: admin_1.Admin,
        children: admin_routes_1.adminroutes
    },
    {
        path: 'alumni',
        component: alumni_1.Alumni,
        children: alumni_routes_1.alumniroutes
    },
    {
        path: 'sponsor',
        component: sponsor_1.Sponsor,
        children: sponsor_routes_1.sponsorroutes
    },
    {
        path: 'student',
        component: student_1.Student,
        children: student_routes_1.studentroutes
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map