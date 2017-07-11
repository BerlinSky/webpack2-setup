import { NgModule } from '@angular/core';

import { MailService } from './mail.service';

@NgModule({})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [MailService]
    }
  }
}

export {
  MailService
}
