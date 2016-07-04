import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/common';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

import { SearchService } from './service.component';

@Component({
  moduleId: module.id,
  providers: [SearchService],
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    NgForm,
    MdInput
  ]
})

export class Search {
  items: Observable<Array<string>>;
  term = new Control();
  constructor(private searchService: SearchService) {
    this.items = this.term.valueChanges
                 .debounceTime(350)
                 .distinctUntilChanged()
                 .switchMap(term => this.searchService.search(term));
  }
}
