import { provideRouter , RouterConfig } from '@angular/router';
// Admin
import { SponsorDashboard } from './Dashboard/sponsor.dashboard';
import { SponsorAccounts } from './Accounts/sponsor.accounts';

export const sponsorroutes: RouterConfig = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: SponsorDashboard
  },
  {
    path: '**',
    component: SponsorAccounts
  }
];
