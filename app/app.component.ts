import { Component } from '@angular/core';
import { Login } from './Admin/login/loginDlg';
@Component({
  selector: 'my-app',
  template: '<login-dlg>My First Angular 2 App</login-dlg>',
  directives: [Login]
})
export class AppComponent { }
