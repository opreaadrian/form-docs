import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { JSONP_PROVIDERS } from '@angular/http';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { FormDocApp } from './app/app.component';
import { appRouterProviders } from './app/app.routes';

bootstrap(FormDocApp, [
  appRouterProviders,
  disableDeprecatedForms(),
  provideForms(),
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  JSONP_PROVIDERS
]).catch(error => console.error(error));
