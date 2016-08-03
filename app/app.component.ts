import { Component } from '@angular/core';
import { Login } from './Admin/login/loginDlg';
import { AdminMenu } from './Admin/Menu/menu';
@Component({
  selector: 'my-app',
  template: `
            <admin-menu>Sample Menu</admin-menu>
            <login-dlg>My First Angular 2 App</login-dlg>
            `,
  directives: [Login,AdminMenu]
})
export class AppComponent { }
