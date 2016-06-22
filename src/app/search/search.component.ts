import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';

@Component({
  selector: 'search',
  template: `
    <md-card>
          <md-card-title>Docomente</md-card-title>
          <md-card-subtitle>Found one you need?</md-card-subtitle>
       <md-card-content>
         <md-input placeholder="Contract, SRL ..."></md-input>
         <button md-raised-button>Find</button>
       </md-card-content>
    </md-card>
  `,
  directives: [ MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdInput ]
})

export class Search {}
