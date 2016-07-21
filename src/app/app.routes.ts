import { provideRouter, RouterConfig } from '@angular/router';
import { FormDocApp } from './app.component';
import { CategoriesList } from './categories/categories.component';
import { Search } from './search/search.component';

const routes: RouterConfig = [
  { path: 'categories', component: CategoriesList },
  { path: 'search', component: Search },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

export const appRouterProviders = [
  provideRouter(routes)
];
