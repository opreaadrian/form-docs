import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  selector: 'search',
  template: `
    <input type="search" placeholder="Contract, SRL ...">
    <button md-raised-button>Find</button>
  `,
  directives: [ MD_BUTTON_DIRECTIVES ]
})

export class Search {}
