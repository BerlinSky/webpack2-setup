import { NgModule } from '@angular/core';

import { SearchModule } from '../search/search.module';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [SearchModule ],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
