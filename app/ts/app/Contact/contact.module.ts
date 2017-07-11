import { NgModule } from '@angular/core';

import { SearchModule } from '../Search/search.module';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [SearchModule ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
