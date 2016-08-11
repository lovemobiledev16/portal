import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.route';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(AppComponent , [ appRouterProviders, HTTP_PROVIDERS]);
