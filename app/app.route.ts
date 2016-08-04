import { provideRouter , RouterConfig } from '@angular/router';
import { Login } from './Admin/login/loginDlg';
import { AdminMenu } from './Admin/Menu/menu';

const routes: RouterConfig = [
  {
    path: 'login',
    component: Login
  },{
    path: 'Dashboard',
    component: AdminMenu
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
export const appRouterProviders = [
  provideRouter(routes)
]
