import { Component } from '@angular/core';
import { Search } from './search/search.component';

@Component({
  selector: 'my-app',
  providers: [Search],
  template: '<search></search>',
  directives: [Search]
})
export class AppComponent { }
