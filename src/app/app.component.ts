import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CategoriesList } from './categories/categories.component';
import { Footer } from './footer/footer.component';
import { Search } from './search/search.component';
import { SearchService } from './search/service.component';

@Component({
  selector: 'form-doc-app',
  providers: [
    Search,
    SearchService,
    Footer
  ],
  template: `
    <router-outlet></router-outlet>
    `,
  directives: [
    Search,
    Footer,
    ROUTER_DIRECTIVES
  ],
  precompile: [FormDocApp, CategoriesList, Search]
})

export class FormDocApp {}
