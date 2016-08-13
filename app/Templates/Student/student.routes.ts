import { provideRouter , RouterConfig } from '@angular/router';
// Admin
import { StudentDashboard } from './Dashboard/student.dashboard';
import { StudentActivities } from './Activities/student.activities';

export const studentroutes: RouterConfig = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: StudentDashboard
  },
  {
    path: '**',
    component: StudentActivities
  }
];
