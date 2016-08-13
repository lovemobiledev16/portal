import { provideRouter , RouterConfig } from '@angular/router';
// Admin
import { AlumniDashboard } from './Dashboard/alumni.dashboard';
import { AlumniAddress } from './Address/alumni.address';

export const alumniroutes: RouterConfig = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: AlumniDashboard
  },
  {
    path: '**',
    component: AlumniAddress
  }
];
