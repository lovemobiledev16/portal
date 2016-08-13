import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter , RouterConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { LoginComponent } from './Common/Auth/Login/login.common';
// Admin
import { Admin } from './Templates/Admin/admin';
import { adminroutes } from './Templates/Admin/admin.routes';
// Alumni
import { Alumni } from './Templates/Alumni/alumni';
import { alumniroutes } from './Templates/Alumni/alumni.routes';
// Sponsor
import { Sponsor } from './Templates/Sponsor/sponsor';
import { sponsorroutes } from './Templates/Sponsor/sponsor.routes';
// Student
import { Student } from './Templates/Student/student';
import { studentroutes } from './Templates/Student/student.routes';

const routes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'admin',
    component : Admin,
    children : adminroutes
  },
  {
    path: 'alumni',
    component : Alumni,
    children : alumniroutes
  },
  {
    path: 'sponsor',
    component : Sponsor,
    children : sponsorroutes
  },
  {
    path: 'student',
    component : Student,
    children : studentroutes
  }
];
export const appRouterProviders = [
  provideRouter(routes)
]
