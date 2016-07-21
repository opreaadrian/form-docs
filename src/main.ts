import { bootstrap }    from '@angular/platform-browser-dynamic';
import { JSONP_PROVIDERS } from '@angular/http';
import { FormDocApp } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

bootstrap(FormDocApp, [
  appRouterProviders,
  JSONP_PROVIDERS
]).catch(error => console.error(error));
