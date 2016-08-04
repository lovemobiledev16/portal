import { Component } from '@angular/core';
import { Login } from './Admin/login/loginDlg';
import { AdminMenu } from './Admin/Menu/menu';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
            <router-outlet></router-outlet>
            `,
  directives: [Login,AdminMenu,ROUTER_DIRECTIVES]
})
export class AppComponent { }
