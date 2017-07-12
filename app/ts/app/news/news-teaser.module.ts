import { NgModule } from '@angular/core';

import { NewsTeaserComponent } from './news-teaser.component';

@NgModule({
  declarations: [NewsTeaserComponent],
  exports: [NewsTeaserComponent]
})
export class NewsTeaserModule {}
