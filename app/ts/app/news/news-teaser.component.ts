import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-teaser',
  template: `
    <div>Watch the news flash here: {{ message }}</div>
  `
})
export class NewsTeaserComponent {
  @Input() message: string;
}
