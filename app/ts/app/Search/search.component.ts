import { Component } from '@angular/core';

@Component({
  selector: 'search',
  template: `
    <div>You are using the search component</div>
  `,
  styles: [
    ` :host {
      color: red;
    }
    `
  ]
})
export class SearchComponent { }
