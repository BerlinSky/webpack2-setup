import { NgModule } from '@angular/core';

import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  exports: [NewsComponent]
})

export class NewsModule {}
