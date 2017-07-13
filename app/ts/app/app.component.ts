import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>The First Angular 4 App - Structured</div>
    <contact></contact>
    <br />
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
