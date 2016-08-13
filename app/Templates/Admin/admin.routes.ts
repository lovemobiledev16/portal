import { provideRouter , RouterConfig } from '@angular/router';
// Admin
import { AdminDashboard } from './Dashboard/admin.dashboard';
import { AdminEnquiry } from './Admin_Communication/Enquiry/admin.enquiry';

export const adminroutes: RouterConfig = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: AdminDashboard
  },
  {
    path: 'enquiry',
    component: AdminEnquiry
  },
  {
    path: '**',
    component:AdminEnquiry
  }
];
