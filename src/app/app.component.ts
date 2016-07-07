import { Component } from '@angular/core';
import { Search } from './search/search.component';

@Component({
  selector: 'form-doc',
  providers: [Search],
  template: '<search></search>',
  directives: [Search]
})
export class AppComponent { }
