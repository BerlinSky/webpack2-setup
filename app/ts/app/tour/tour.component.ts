import { Component } from '@angular/core';

@Component({
  selector: 'tour',
  templateUrl: './tour.component.pug',
   styles: [
    `
    * {
        background-color: #7bb9af;
        min-height: 20rem;
        width: 100%;
      }
    `
  ]
})
export class TourComponent {
}
