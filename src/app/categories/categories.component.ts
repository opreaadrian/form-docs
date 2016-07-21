import { Component } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { Footer } from '../footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    Footer
  ]
})

export class CategoriesList {}
