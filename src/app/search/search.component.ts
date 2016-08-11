import { Component } from '@angular/core';
import { Injectable, ViewChild } from '@angular/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS, NgForm, FormBuilder, FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { CORE_DIRECTIVES } from '@angular/common';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

import { Footer } from '../footer/footer.component';
import { SearchService } from './service.component';

@Component({
  moduleId: module.id,
  providers: [SearchService, FORM_PROVIDERS],
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    NgForm,
    MdInput,
    Footer
  ]
})

export class Search {
  items: Observable<Array<string>>;
  searchForm: FormGroup;
  searchTerm = new Control('');

  constructor(private searchService: SearchService, formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
        searchTerm: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });

    this.items = this.searchForm.valueChanges
                 .debounceTime(350)
                 .distinctUntilChanged()
                 .switchMap((term) => this.searchService.search(term));
  }
}
