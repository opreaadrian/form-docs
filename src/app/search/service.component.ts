import { Injectable } from '@angular/core';
import { NgForm } from '@angular/common';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Control } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {
    let search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term.searchTerm);
    search.set('format', 'json');
    return this.jsonp
                .get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .map((request) => request.json()[1]);
  }
}
