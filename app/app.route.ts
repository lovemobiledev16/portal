import { provideRouter , RouterConfig } from '@angular/router';
import { AdminMenu } from './Admin/Menu/menu';
import { CommonMenu } from './Common/Menu/menu.common';
import { LoginComponent } from './Common/Auth/Login/login.common';

// Admin
import { AdminDashboard } from './Templates/Admin/Dashboard/admin.dashboard';

const routes: RouterConfig = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'portal/:part',
    component: CommonMenu
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'admin/dashboard',
    component: AdminDashboard
  }
];
export const appRouterProviders = [
  provideRouter(routes)
]
