import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div>
      <a routerLink="">Home</a>
      <a routerLink="contact">Contact</a>
    </div>
    <br />
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
