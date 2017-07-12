import { NgModule } from '@angular/core';

import { SearchModule } from '../search/search.module';
import { NewsTeaserModule } from '../news/news-teaser.module';

import { ContactComponent } from './contact.component';

@NgModule({
  imports: [SearchModule, NewsTeaserModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
