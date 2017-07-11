import { Component } from '@angular/core';

import { MailService } from '../services/services.module';

@Component({
  selector: 'contact',
  template: `
    <div>This is the contact component</div>
    <p> {{mailService.message}}</p>
    <search></search>
  `
})
export class ContactComponent {
  constructor(private mailService: MailService) {}
}
